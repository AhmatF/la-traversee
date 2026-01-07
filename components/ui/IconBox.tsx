"use client";

type IconBoxVariant =
  | "default"
  | "urgence"
  | "espoir"
  | "proteger"
  | "contenir"
  | "preparer"
  | "mission-a"
  | "mission-b"
  | "mission-c"
  | "mission-d"
  | "mission-e"
  | "mission-f";

type IconBoxSize = "sm" | "md" | "lg";

interface IconBoxProps {
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<IconBoxVariant, string> = {
  default: "bg-white/10 text-white",
  urgence: "bg-[var(--urgency-red)]/20 text-[var(--urgency-red)]",
  espoir: "bg-[var(--hope-emerald)]/20 text-[var(--hope-emerald)]",
  proteger: "bg-[var(--pilier-proteger)]/20 text-[var(--pilier-proteger)]",
  contenir: "bg-[var(--pilier-contenir)]/20 text-[var(--pilier-contenir)]",
  preparer: "bg-[var(--pilier-preparer)]/20 text-[var(--pilier-preparer)]",
  "mission-a": "bg-[var(--mission-a)]/20 text-[var(--mission-a)]",
  "mission-b": "bg-[var(--mission-b)]/20 text-[var(--mission-b)]",
  "mission-c": "bg-[var(--mission-c)]/20 text-[var(--mission-c)]",
  "mission-d": "bg-[var(--mission-d)]/20 text-[var(--mission-d)]",
  "mission-e": "bg-[var(--mission-e)]/20 text-[var(--mission-e)]",
  "mission-f": "bg-[var(--mission-f)]/20 text-[var(--mission-f)]",
};

const sizeStyles: Record<IconBoxSize, string> = {
  sm: "w-10 h-10 rounded-lg text-lg",
  md: "w-14 h-14 rounded-xl text-2xl",
  lg: "w-20 h-20 rounded-2xl text-4xl",
};

export default function IconBox({
  variant = "default",
  size = "md",
  children,
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`icon-box ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
