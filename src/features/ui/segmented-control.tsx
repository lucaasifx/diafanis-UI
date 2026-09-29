import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/cn';

export interface SegmentedControlProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div
      role="tablist"
      className={cn('inline-flex items-center p-1 bg-muted/70 rounded-xl', className)}
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative px-3 py-1 text-xs font-semibold rounded-lg transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="segmented-active-pill"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                className="absolute inset-0 bg-background rounded-lg shadow-sm"
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};
