"use client";

type BadgeVariant = "urgence" | "espoir" | "info" | "default" | "pilier-proteger" | "pilier-contenir" | "pilier-preparer";

interface BadgeProps {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  urgence: "badge-urgence",
  espoir: "badge-espoir",
  info: "badge-info",
  default: "bg-white/10 text-white/80 border border-white/20",
  "pilier-proteger": "bg-[var(--pilier-proteger)]/20 text-[var(--pilier-proteger)] border border-[var(--pilier-proteger)]/40",
  "pilier-contenir": "bg-[var(--pilier-contenir)]/20 text-[var(--pilier-contenir)] border border-[var(--pilier-contenir)]/40",
  "pilier-preparer": "bg-[var(--pilier-preparer)]/20 text-[var(--pilier-preparer)] border border-[var(--pilier-preparer)]/40",
};

export default function Badge({
  variant = "default",
  icon,
  children,
  className = "",
  pulse = false,
}: BadgeProps) {
  return (
    <span className={`badge ${variantStyles[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
