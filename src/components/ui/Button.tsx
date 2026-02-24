import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  external = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 shadow-md hover:shadow-blue-500/20 hover:shadow-lg",
    secondary:
      "border border-zinc-600 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 active:bg-zinc-700",
    ghost:
      "text-zinc-300 hover:bg-zinc-800 hover:text-white active:bg-zinc-700",
  };
  const styles = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("//");
    return (
      <a
        href={href}
        className={styles}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
