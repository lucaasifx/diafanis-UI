import * as React from 'react';
import { cn } from '@/shared/cn';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'standard' | 'high';
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, intensity = 'standard', ...props }, ref) => {
    const intensityClasses = {
      subtle: 'bg-card/60 backdrop-blur-md border-border/30',
      standard: 'bg-card/80 backdrop-blur-xl border-border/40 shadow-sm',
      high: 'bg-card/95 backdrop-blur-2xl border-border/50 shadow-md',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border transition-all duration-200',
          intensityClasses[intensity],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';
