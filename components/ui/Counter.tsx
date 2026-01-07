"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  separator?: string;
}

function formatNumber(num: number, decimals: number, separator: string): string {
  const fixed = num.toFixed(decimals);
  const parts = fixed.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join(",");
}

export default function Counter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  separator = " ",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  // Use amount instead of negative margin - more reliable on mobile
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentValue = startValue + (end - startValue) * easeProgress;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, hasAnimated]);

  // Fallback: if component has been mounted for 3s and still shows 0, show final value
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count === 0 && !hasAnimated) {
        setCount(end);
        setHasAnimated(true);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [count, end, hasAnimated]);

  return (
    <span
      ref={ref}
      className={`counter-animated font-variant-numeric tabular-nums ${className}`}
      aria-label={`${prefix}${formatNumber(end, decimals, separator)}${suffix}`}
    >
      {prefix}
      {formatNumber(count, decimals, separator)}
      {suffix}
    </span>
  );
}
