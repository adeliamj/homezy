import { useState, useRef, useEffect, ReactNode } from "react";
import { TextInput } from "./InputField";
import { cn } from "@/app/lib/utils";

interface OptionType {
  value: string | number;
  label: string;
  image?: ReactNode;
  icon?: ReactNode;
}

interface CustomSelectProps {
  options: OptionType[];
  value: string | number;
  placeholder?: string;
  className?: string;
  onChange?: (value: string | number) => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Select: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder,
  className,
  onChange,
  iconLeft,
  iconRight,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const selected = options.find((opt) => opt.value === value) || null;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: OptionType) => {
    if (onChange) {
      onChange(option.value); // pass value directly
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative", className)} ref={selectRef}>
      <TextInput
        className="w-full"
        iconLeft={iconLeft ?? selected?.icon}
        iconRight={iconRight ?? <span className="ml-auto" />}
        placeholder={placeholder}
        onClick={toggleDropdown}
        value={selected?.label ?? ""}
        readOnly
      />

      {isOpen && (
        <div className="mt-10 py-16 absolute top-48 z-10 w-full overflow-hidden rounded-15 bg-secondary-white shadow transition-all">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={cn(
                "text-normal-regular py-8 px-16 flex items-center gap-2 cursor-pointer",
                {
                  "bg-secondary-dark-100 text-secondary-white":
                    selected?.value === option.value,
                  "hover:bg-secondary-dark-100 hover:text-secondary-white":
                    selected?.value !== option.value,
                }
              )}
            >
              {option.icon && <span className="mr-8">{option.icon}</span>}
              <p className="flex h-36 items-center">{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
