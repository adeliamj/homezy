"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

export const TextInput = ({
  className,
  iconLeft,
  iconRight,
  onClick,
  type = "text",
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "border border-secondary-dark-20 rounded-15 py-12 px-16 h-50 flex items-center gap-8 bg-white",
        className
      )}
      onClick={onClick}
    >
      {iconLeft && <div>{iconLeft}</div>}
      <input
        ref={inputRef}
        {...props}
        type={type}
        readOnly={props.readOnly}
        className={cn(
          "flex-1 font-syne text-normal-regular text-secondary-dark-40 focus:outline-none bg-transparent"
        )}
      />
      {iconRight && <div>{iconRight}</div>}
    </div>
  );
};
