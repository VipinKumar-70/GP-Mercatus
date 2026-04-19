import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const SectionTitle = ({ 
  badge, 
  title, 
  description, 
  align = 'center',
  light = false
}) => {
  return (
    <div className={cn(
      'max-w-3xl mb-16 space-y-4',
      align === 'center' ? 'mx-auto text-center' : 'text-left'
    )}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            'inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]',
            light ? 'bg-white/10 text-brand-yellow' : 'bg-brand-navy/5 text-brand-navy'
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95]',
          light ? 'text-white' : 'text-brand-navy'
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            'text-lg font-medium leading-relaxed max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-white/60' : 'text-brand-navy/60'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
