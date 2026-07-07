import { NextResponse } from "next/server";
import { processVisitNotification } from "@/src/services/visitor/notifyVisitHandler";
import { visitorDebug } from "@/src/helpers/visitorDebug";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    visitorDebug(
      "route:received",
      {
        referer: request.headers.get("referer"),
        ua: request.headers.get("user-agent")?.slice(0, 80),
        ip: request.headers.get("x-forwarded-for"),
      },
      "server"
    );

    const result = await processVisitNotification(request);
    visitorDebug("route:result", result.body, "server");
    return NextResponse.json(result.body, { status: result.status });
  } catch (e) {
    console.error("[notify-visit]", e);
    return NextResponse.json(
      {
        ok: false,
        error: e instanceof Error ? e.message : "Internal error",
      },
      { status: 500 }
    );
  }
}
