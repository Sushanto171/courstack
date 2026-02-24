import React from "react";

interface HeroBadgeProps {
  text: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({ text }) => (
  <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
    {text}
  </div>
);