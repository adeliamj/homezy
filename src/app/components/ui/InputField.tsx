"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value: string; 
  placeholder?: string;
  onClick?: () => void;
}

export const TextInput = ({
  className,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
  type = "text",
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputType, setInputType] = useState(type);

  return (
    <div
      className={cn(
        "border border-secondary-dark-20 rounded-15 py-12 px-16 h-50 flex items-center focus:border-transparent focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      <input
        ref={inputRef}
        {...props}
        className={cn(
          "w-fit text-syne text-normal-regular text-secondary-dark-40 focus:outline-none"
        )}
        disabled={disabled}
        type={inputType}
      />
    </div>
  );
};
