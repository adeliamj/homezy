import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  mobileSize: 'xl' | 'lg' | 'md' | 'sm';
  desktopSize: 'xl' | 'lg' | 'md' | 'sm';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  trailingIconClassName?: string;
  leadingIconClassName?: string;
  text?: string;
  textClassName?: string;
  className?: string;
}

const Button = ({
  className,
  variant,
  mobileSize,
  desktopSize,
  leadingIcon,
  trailingIcon,
  trailingIconClassName,
  leadingIconClassName,
  textClassName,
  text,
  ...props
}: ButtonProps) => {
  const baseClass =
    'flex h-fit w-fit items-center justify-center gap-8 rounded-xl transition-all duration-500 ease-in-out';

  const variantClass =
    variant === 'primary'
      ? 'border border-secondary-dark-100 bg-transparent text-secondary-dark-100'
      : 'border-transparent bg-secondary-dark-100 text-secondary-white';

  const sizeClassMap: Record<string, string> = {
    xl: 'px-32 py-16 text-normal-bold',
    lg: 'px-32 py-16 text-normal-bold',
    md: 'px-24 py-12 text-xs-medium',
    sm: 'px-24 py-12 text-xxs-medium',
  };

  const mobileClass = sizeClassMap[mobileSize];
  const desktopClass = `md:${sizeClassMap[desktopSize]}`;

  return (
    <button
      className={`${baseClass} ${variantClass} ${mobileClass} ${desktopClass} ${className || ''}`}
      {...props}
    >
      {leadingIcon && (
        <ButtonIcon className={leadingIconClassName}>
          {leadingIcon}
        </ButtonIcon>
      )}

      {text && (
        <span className="whitespace-nowrap text-normal-bold">
          <ButtonText className={textClassName}>{text}</ButtonText>
        </span>
      )}

      {trailingIcon && (
        <ButtonIcon className={trailingIconClassName}>
          {trailingIcon}
        </ButtonIcon>
      )}
    </button>
  );
};

export type ButtonTextProps = React.HTMLAttributes<HTMLParagraphElement>;

const ButtonText: React.FC<ButtonTextProps> = ({ className, children }) => (
  <p className={`text-inherit ${className || ''}`}>{children}</p>
);

interface ButtonIconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ className, children, ...props }) => (
  <div className={`flex items-center justify-center ${className || ''}`} {...props}>
    {children}
  </div>
);

export default Button;
