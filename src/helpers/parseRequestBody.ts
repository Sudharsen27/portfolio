import { visitorDebug } from "@/src/helpers/visitorDebug";

/**
 * Read POST body reliably.
 * sendBeacon + Blob often omits Content-Type on Edge — always parse from text.
 */
export async function parseRequestBody(request: Request): Promise<unknown> {
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = request.headers.get("content-length");

  visitorDebug(
    "body:headers",
    { contentType, contentLength },
    "server"
  );

  try {
    const text = await request.text();
    visitorDebug(
      "body:raw",
      { length: text.length, preview: text.slice(0, 200) },
      "server"
    );

    if (!text.trim()) return {};

    return JSON.parse(text) as unknown;
  } catch (error) {
    visitorDebug(
      "body:parse-error",
      error instanceof Error ? error.message : error,
      "server"
    );
    return {};
  }
}
