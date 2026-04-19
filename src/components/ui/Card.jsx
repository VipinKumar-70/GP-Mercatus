import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className, hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={cn(
        'bg-white rounded-[2.5rem] p-8 lg:p-12 border border-brand-navy/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500',
        hover ? 'hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]' : '',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
