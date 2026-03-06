"use client"

import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface OnClickButtonProps {
  action: {
    icon?: LucideIcon;
    label: string;
    onClick: () => void;
  }
}

export default function OnClickButton({ action }: OnClickButtonProps) {
  const { onClick, label, icon } = action
  return (
    <Button onClick={onClick}>
      {/* <Icon className="mr-2 h-4 w-4" /> */}
      {label}
    </Button>);
}