import { motion } from 'framer-motion';
import { cn } from './Button';

export const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-4 mb-16", className)}
    >
      {subtitle && (
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-textPrimary">
        {title}
      </h2>
    </motion.div>
  );
};
