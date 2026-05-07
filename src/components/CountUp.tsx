import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counts a number from 0 to `to` once it enters the viewport.
 * Uses requestAnimationFrame with an ease-out cubic curve so the
 * animation feels confident, not robotic.
 */
export default function CountUp({
  to,
  suffix = "",
  duration = 1800,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();

            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(to * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(to);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  // Render integers cleanly. If the target has a decimal, keep one digit.
  const display =
    to % 1 === 0 ? Math.round(value).toLocaleString() : value.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
