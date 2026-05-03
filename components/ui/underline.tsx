"use client";

import { motion } from "framer-motion";

interface UnderlineProps {
  color?: string;
  className?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
}

export const Underline = ({
  color = "hsl(325deg, 100%, 48%)",
  className = "",
  duration = 1.5,
  delay = 0.5,
  strokeWidth = 3,
}: UnderlineProps) => {
  return (
    <svg
      viewBox="0 0 187 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute bottom-1 left-0 w-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 7.85498C2 7.85498 63 2.81649 112 1.97674C161 1.137 185.5 4.91586 185.5 4.91586"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      />
    </svg>
  );
};
