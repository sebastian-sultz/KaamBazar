// components/GradientButton.tsx

import React from "react";
import { Link } from "react-router-dom";
import StarBorder from "../assets/Anim/StarBorder";

type GradientButtonProps = {
  to: string;
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  gradientFrom?: string;
  gradientTo?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  isExternal?: boolean;
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-sm",
  md: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-base",
  lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl",
};

const GradientButton: React.FC<GradientButtonProps> = ({
  to,
  text,
  icon,
  iconPosition = "right",
  gradientFrom = "from-primary",
  gradientTo = "to-secondary",
  size = "md",
  className = "",
  isExternal = false,
}) => {
  const isFullWidth = className.includes("w-full");

  const sharedClasses = `
    relative inline-flex items-center justify-center
    bg-gradient-to-r ${gradientFrom} ${gradientTo}
    text-background font-semibold rounded-full
    hover:shadow-lg transition-all group overflow-hidden
    ${sizeClasses[size]} ${className}
  `;

  const ButtonContent = (
    <>
      {/* Hover shimmer */}
      <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>

      {/* Text & Icon */}
      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-center w-full">
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span className="truncate">{text}</span>
        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    </>
  );

  return (
    <div
      className={`relative inline-flex items-center justify-center group ${
        isFullWidth ? "w-full" : ""
      }`}
    >
      {/* Background Blur */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-60 rounded-full blur-lg filter group-hover:opacity-100 transition-all duration-300`}
      ></div>

      <StarBorder as="button" className={isFullWidth ? "w-full" : ""}>
        {isExternal ? (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={sharedClasses}
          >
            {ButtonContent}
          </a>
        ) : (
          <Link to={to} className={sharedClasses}>
            {ButtonContent}
          </Link>
        )}
      </StarBorder>
    </div>
  );
};

export default GradientButton;
