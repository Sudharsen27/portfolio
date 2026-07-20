import { CertificationIcon } from "@/src/components/certifications/CertificationIcon";
import { Button } from "@/src/components/ui/Button";
import type { CertificationItem } from "@/src/types";
import type { CSSProperties } from "react";

function hasUrl(url: string | null | undefined): url is string {
  return Boolean(url && url.trim().length > 0);
}

interface CertificationCardProps {
  certification: CertificationItem;
  style?: CSSProperties;
}

export function CertificationCard({
  certification,
  style,
}: CertificationCardProps) {
  const verifyUrl = certification.verifyUrl;
  const certificateUrl =
    certification.certificateUrl ?? certification.link ?? null;
  const showVerify = hasUrl(verifyUrl);
  const showCertificate = hasUrl(certificateUrl);

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800/60 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
      style={style}
    >
      <span
        className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-blue-400 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:text-blue-300">
          <CertificationIcon name={certification.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-md border border-zinc-700/70 bg-zinc-900/50 px-2.5 py-1 text-xs font-medium text-zinc-300">
          {certification.year}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
        {certification.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-blue-400">
        {certification.issuer}
      </p>

      <div className="mt-3">
        <span className="inline-flex rounded-md border border-blue-500/25 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
          {certification.category}
        </span>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-zinc-700/50 pt-4">
        {showVerify && (
          <Button
            variant="secondary"
            href={verifyUrl}
            external
            className="px-3.5 py-2 text-xs sm:text-sm"
          >
            Verify Credential
          </Button>
        )}
        {showCertificate && (
          <Button
            variant="primary"
            href={certificateUrl}
            external={
              certificateUrl.startsWith("http") ||
              certificateUrl.startsWith("//")
            }
            className="px-3.5 py-2 text-xs sm:text-sm"
          >
            View Certificate
          </Button>
        )}
      </div>
    </article>
  );
}
