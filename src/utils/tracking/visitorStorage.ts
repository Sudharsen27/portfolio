const VISITOR_META_KEY = "portfolio_visitor_meta";

interface VisitorMeta {
  visitorId: string;
  visitCount: number;
  lastVisit: string;
}

/** Client-side visit counter keyed by fingerprint visitor ID. */
export function incrementClientVisitCount(visitorId: string): {
  visitNumber: number;
  isReturning: boolean;
} {
  if (typeof window === "undefined") {
    return { visitNumber: 1, isReturning: false };
  }

  try {
    const raw = localStorage.getItem(VISITOR_META_KEY);
    let meta: VisitorMeta;

    if (raw) {
      meta = JSON.parse(raw) as VisitorMeta;
      if (meta.visitorId === visitorId) {
        meta.visitCount += 1;
      } else {
        meta = {
          visitorId,
          visitCount: 1,
          lastVisit: new Date().toISOString(),
        };
      }
    } else {
      meta = {
        visitorId,
        visitCount: 1,
        lastVisit: new Date().toISOString(),
      };
    }

    meta.lastVisit = new Date().toISOString();
    localStorage.setItem(VISITOR_META_KEY, JSON.stringify(meta));

    return {
      visitNumber: meta.visitCount,
      isReturning: meta.visitCount > 1,
    };
  } catch {
    return { visitNumber: 1, isReturning: false };
  }
}
