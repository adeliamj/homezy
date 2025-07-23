'use client';

import { cn } from '@/app/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
import Featured from '@/assets/icons/featured.svg';

const ribbonVariants = cva('', {
  variants: {
    variant: {
      featured: 'text-secondary-white', // warna teks saja, bg pakai SVG
    },
  },
});

interface RibbonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'featured';
  text: string;
}

const Ribbon = ({ variant, text, className, ...props }: RibbonProps) => {
  return (
    <div className={cn('relative w-fit h-fit', className)} {...props}>
      <svg
        width="114"
        height="40"
        viewBox="0 0 114 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path d="M8.8335 40L0.833496 32H8.8335V40Z" fill="#B7B8C1" />
        <path
          d="M0.833496 8C0.833496 3.58172 4.41522 0 8.8335 0H105.833C110.252 0 113.833 3.58172 113.833 8V24C113.833 28.4183 110.252 32 105.833 32H0.833496V8Z"
          fill="#191A23"
        />

        <foreignObject x="0" y="0" width="114" height="32">
          <div className="w-full h-full flex items-center pl-16 pr-10 gap-4">
            <Featured className="w-16 h-16 text-secondary-white" />
            <div
              className={cn(
                'text-sm-regular font-hanken md:text-sm-medium xxxl:text-sm-medium-fluid uppercase',
                ribbonVariants({ variant })
              )}
            >
              {text}
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Ribbon;
