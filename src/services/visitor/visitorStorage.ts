import type { ClientVisitorPayload } from "@/src/types/visitor";

const VISITOR_COUNT_PREFIX = "portfolio_visit_count:";

/**
 * Optional server-side visitor persistence via Upstash Redis REST API (free tier).
 * Falls back to client-reported visit metadata when not configured.
 */
export async function persistVisitorVisit(
  visitorId: string,
  clientVisitNumber: number
): Promise<{ visitNumber: number; isReturning: boolean }> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return {
      visitNumber: clientVisitNumber,
      isReturning: clientVisitNumber > 1,
    };
  }

  const key = `${VISITOR_COUNT_PREFIX}${visitorId}`;

  try {
    const incrRes = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(3000),
    });

    if (!incrRes.ok) {
      return {
        visitNumber: clientVisitNumber,
        isReturning: clientVisitNumber > 1,
      };
    }

    const incrData = (await incrRes.json()) as { result?: number };
    const visitNumber =
      typeof incrData.result === "number" ? incrData.result : clientVisitNumber;

    return {
      visitNumber,
      isReturning: visitNumber > 1,
    };
  } catch {
    return {
      visitNumber: clientVisitNumber,
      isReturning: clientVisitNumber > 1,
    };
  }
}

export function mergeVisitorPersistence(
  client: ClientVisitorPayload,
  persisted: { visitNumber: number; isReturning: boolean }
): ClientVisitorPayload {
  return {
    ...client,
    visitNumber: persisted.visitNumber,
    isReturning: persisted.isReturning,
  };
}
