import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({ children, variant = 'primary', className, href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium transition-all duration-300 gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-accentSecondary text-white shadow-[0_4px_20px_rgba(255,107,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.6)] hover:scale-[1.02]",
    secondary: "bg-transparent border border-glassBorder text-textPrimary hover:bg-glassBorder backdrop-blur-md"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component 
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
