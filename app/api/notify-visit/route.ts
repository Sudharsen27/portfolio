import { NextResponse } from "next/server";
import { processVisitNotification } from "@/src/services/visitor/notifyVisitHandler";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const result = await processVisitNotification(request);
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
