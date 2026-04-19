import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  const variants = {
    primary: 'bg-brand-navy text-white hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/10',
    yellow: 'bg-brand-yellow text-brand-navy hover:bg-brand-accent shadow-lg shadow-brand-yellow/10',
    outline: 'border-2 border-brand-navy/10 text-brand-navy hover:bg-brand-navy hover:text-white',
    ghost: 'text-brand-navy hover:bg-brand-navy/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
