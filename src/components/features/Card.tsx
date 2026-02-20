import React from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => (
  <div
    className={cn(`p-2 md:p-4 rounded-xl border border-transparent bg-neutral-900/60 shadow-sm ring-1 ring-transparent hover:ring-neutral-700/40 hover:shadow-black/10
shadow-transparent transition-all duration-200 ${className}`)}
  >
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({
  className = "",
  children,
}) => (
  <h3
    className={cn(
      `text-xl font-medium text-shadow text-white/80 text-shadow-white/10 ${className}`,
    )}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<CardProps> = ({
  className = "",
  children,
}) => (
  <p
    className={cn(
      `max-w-sm font-inter text-neutral-400 dark:text-neutral-400 mt-2 text-balance ${className}`,
    )}
  >
    {children}
  </p>
);

export const CardContent: React.FC<CardProps> = ({
  className = "",
  children,
}) => <div className={cn(`p-4 md:p-8 ${className}`)}>{children}</div>;

export const CardSkeleton: React.FC<CardProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={cn(
        `h-40 md:h-64 relative overflow-hidden mask-t-from-80% mask-b-from-80% ${className}`,
      )}
    >
      {children}
    </div>
  );
};
