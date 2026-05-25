"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light" | "white";
}

const sizes = {
  sm: { icon: 32, textClass: "text-base" },
  md: { icon: 44, textClass: "text-xl" },
  lg: { icon: 60, textClass: "text-3xl" },
};

export default function IndoorGardenLogo({ className, size = "md", variant = "dark" }: LogoProps) {
  const { icon, textClass } = sizes[size];
  const color = variant === "white" ? "#FFFFFF" : variant === "light" ? "#C4D7A8" : "#2C5F2E";
  const textColor = variant === "white" ? "text-white" : "text-forest";

  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      {/* Leaf Icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        {/* Outer leaf shape */}
        <path
          d="M30 5C30 5 8 18 8 36C8 47.046 18 54 30 54C42 54 52 47.046 52 36C52 18 30 5 30 5Z"
          fill={color}
          opacity="0.15"
        />
        {/* Main leaf */}
        <path
          d="M30 8C30 8 12 22 12 38C12 47.941 20.059 54 30 54C39.941 54 48 47.941 48 38C48 22 30 8 30 8Z"
          fill={color}
          opacity="0.3"
        />
        {/* Leaf highlight */}
        <path
          d="M30 12C30 12 16 24 16 38C16 45.732 22.268 50 30 50C37.732 50 44 45.732 44 38C44 24 30 12 30 12Z"
          fill={color}
        />
        {/* Center vein */}
        <path
          d="M30 15L30 50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Side veins left */}
        <path d="M30 24L22 32" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M30 31L20 38" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M30 38L22 44" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        {/* Side veins right */}
        <path d="M30 24L38 32" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M30 31L40 38" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M30 38L38 44" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-semibold tracking-tight",
            textClass,
            textColor
          )}
        >
          Indoor
        </span>
        <span
          className={cn(
            "font-display font-semibold tracking-tight",
            textClass,
            textColor,
            "-mt-0.5"
          )}
        >
          Garden
        </span>
      </div>
    </Link>
  );
}
