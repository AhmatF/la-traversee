"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type CardVariant = "default" | "glass" | "pilier-proteger" | "pilier-contenir" | "pilier-preparer" | "urgence" | "espoir";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white/5 border border-white/10",
  glass: "glass",
  "pilier-proteger": "pilier-card pilier-proteger",
  "pilier-contenir": "pilier-card pilier-contenir",
  "pilier-preparer": "pilier-card pilier-preparer",
  urgence: "bg-[var(--urgency-surface)] border border-[var(--urgency-red)]/30",
  espoir: "bg-[var(--hope-sky)] border border-[var(--hope-emerald)]/30 text-[var(--ocean-midnight)]",
};

const paddingStyles: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  variant = "default",
  hover = true,
  padding = "md",
  className = "",
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-300";

  const hoverStyles = hover
    ? "hover:bg-white/8 hover:border-[var(--sunset-orange)]/30 hover:-translate-y-1"
    : "";

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Sub-components for structured content
Card.Header = function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

Card.Title = function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={`text-xl font-bold text-white ${className}`}>{children}</h3>;
};

Card.Description = function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-white/70 text-sm mt-2 ${className}`}>{children}</p>;
};

Card.Content = function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
};

Card.Footer = function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>{children}</div>;
};
