import { useState, useRef, useEffect, ReactNode } from "react";
import { TextInput } from "./InputField";
import ArrowDown from "assets/icons/arrow-down.svg";
import { cn } from "@/app/lib/utils";

interface CustomSelectProps {
  options: OptionType[];
  defaultValue?: null | string | number;
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

type OptionType = {
  value: string | number;
  label: string;
  image?: ReactNode;
  icon?: ReactNode;
};

const Select: React.FC<CustomSelectProps> = ({
  options,
  defaultValue = null,
  placeholder,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<null | OptionType>(null);
  const selectRef = useRef<HTMLDivElement | null>(null); // Specify the type here

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: OptionType) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("relative", className)} ref={selectRef}>
      <TextInput
        className="w-full"
        rightIcon={<ArrowDown className="w-20 h-20 text-secondary-dark-100" />}
        leftIcon={
          !selected
            ? null
            : selected.image
            ? selected.image
            : selected.icon
            ? selected.icon
            : null
        }
        placeholder="Masukkan nama lengkap"
        onClick={toggleDropdown}
        value={!selected ? placeholder ?? "" : selected.label}
        readOnly
      />

      {isOpen && (
        <div className="mt-10 py-16 absolute top-48 z-10 w-full overflow-hidden rounded-15 bg-secondary-white shadow transition-all">
          {options.map((option, index) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={cn(
                "text-normal-regularpy-8 px-16 bg-secondary-white flex items-center",
                {
                  "bg-secondary-dark-100 text-secondary-white":
                    selected?.value === option.value,
                  "hover:bg-secondary-dark-100 hover:text-secondary-white":
                    selected?.value !== option.value,
                }
              )}
            >
              <p className="text-normal-regular flex h-36 items-center">
                {" "}
                {option.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
