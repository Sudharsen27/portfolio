import { decodeCity } from "@/src/helpers/decodeCity";
import type { GeoInfo } from "@/src/types/visitor";

interface IpWhoResponse {
  success?: boolean;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  postal?: string;
  latitude?: number | string;
  longitude?: number | string;
  timezone?: string | { id?: string };
  connection?: {
    org?: string;
    isp?: string;
    domain?: string;
    type?: string;
  };
}

function toNumber(value: number | string | undefined): number | undefined {
  if (value == null || value === "") return undefined;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function isPrivateIp(ip: string): boolean {
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("169.254.")
  );
}

/** Free geo lookup via ipwho.is — no API key required. */
export async function fetchGeoFromIpWho(ip: string): Promise<GeoInfo | null> {
  if (isPrivateIp(ip)) return null;

  try {
    const res = await fetch(`https://ipwho.is/${ip}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;

    const data = (await res.json()) as IpWhoResponse;
    if (data.success !== true) return null;

    const tz = data.timezone;
    const timezone =
      typeof tz === "object" && tz?.id
        ? tz.id
        : typeof tz === "string"
          ? tz
          : undefined;

    return {
      city: decodeCity(data.city),
      region: data.region,
      country: data.country,
      countryCode: data.country_code,
      postal: data.postal,
      timezone,
      latitude: toNumber(data.latitude),
      longitude: toNumber(data.longitude),
      organization: data.connection?.org,
      isp: data.connection?.isp,
      connectionType: data.connection?.type,
      source: "ipwhois",
    };
  } catch {
    return null;
  }
}

export function geoFromVercelHeaders(headers: Headers): GeoInfo | null {
  const city = decodeCity(headers.get("x-vercel-ip-city"));
  const country = decodeCity(headers.get("x-vercel-ip-country"));
  const region = decodeCity(headers.get("x-vercel-ip-country-region"));

  if (!city && !country && !region) return null;

  return {
    city,
    region,
    country,
    countryCode: country,
    source: "vercel",
  };
}

export function formatLocation(geo: GeoInfo | null): string {
  if (!geo) return "Unknown";
  const parts = [geo.city, geo.region, geo.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "Unknown";
}

export async function resolveGeo(
  ip: string | null,
  headers: Headers
): Promise<GeoInfo | null> {
  const vercelGeo = geoFromVercelHeaders(headers);
  const ipwhoGeo =
    ip && !isPrivateIp(ip) ? await fetchGeoFromIpWho(ip) : null;

  if (ipwhoGeo && vercelGeo) {
    return {
      ...ipwhoGeo,
      city: ipwhoGeo.city || vercelGeo.city,
      region: ipwhoGeo.region || vercelGeo.region,
      country: ipwhoGeo.country || vercelGeo.country,
      countryCode: ipwhoGeo.countryCode || vercelGeo.countryCode,
      source: "ipwhois",
    };
  }

  if (ipwhoGeo) return ipwhoGeo;
  if (vercelGeo) return vercelGeo;

  return null;
}
