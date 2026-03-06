import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  { className = '', variant = 'primary', size = 'md', children, ...props },
  ref) =>
  {
    const baseStyles =
    'inline-flex items-center justify-center font-heading font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
      accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
      outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
      ghost: 'text-primary hover:bg-primary/10 focus:ring-primary'
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: 1.02
        }}
        whileTap={{
          scale: 0.98
        }}
        className={`${`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} bg-[#6BCB78]`}
        {...props}>

        {children}
      </motion.button>);

  }
);
Button.displayName = 'Button';