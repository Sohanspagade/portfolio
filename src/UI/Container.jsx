import { cn } from './Button';

export const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24", className)}>
      {children}
    </div>
  );
};
