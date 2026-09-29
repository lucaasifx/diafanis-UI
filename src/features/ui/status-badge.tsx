import * as React from 'react';
import { Radio, Clock, Scale, CalendarOff } from 'lucide-react';
import { cn } from '@/shared/cn';

export type EventStatus = 'fatal' | 'in_progress' | 'hearing' | 'holiday';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: EventStatus;
  label: string;
  onClick?: () => void;
  className?: string;
  iconOnly?: boolean;
  variant?: 'pill' | 'subtle' | 'dot';
  size?: 'sm' | 'md';
}

const statusConfig = {
  fatal: {
    classes: 'bg-status-fatal-bg border-status-fatal-border text-status-fatal-text',
    icon: Radio,
    iconColor: 'text-status-fatal-icon',
    dotColor: 'bg-status-fatal-icon',
  },
  in_progress: {
    classes: 'bg-status-warning-bg border-status-warning-border text-status-warning-text',
    icon: Clock,
    iconColor: 'text-status-warning-icon',
    dotColor: 'bg-status-warning-icon',
  },
  hearing: {
    classes: 'bg-status-hearing-bg border-status-hearing-border text-status-hearing-text',
    icon: Scale,
    iconColor: 'text-status-hearing-icon',
    dotColor: 'bg-status-hearing-icon',
  },
  holiday: {
    classes: 'bg-status-holiday-bg border-status-holiday-border text-status-holiday-text',
    icon: CalendarOff,
    iconColor: 'text-status-holiday-icon',
    dotColor: 'bg-status-holiday-icon',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  onClick,
  className,
  iconOnly = false,
  variant = 'pill',
  size = 'md',
  ...props
}) => {
  const config = statusConfig[status];
  const IconComponent = config.icon;

  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5 gap-1',
    md: 'text-[11px] px-2 py-0.5 gap-1.5',
  };

  const variantClasses = {
    pill: 'rounded-full border backdrop-blur-xs',
    subtle: 'rounded-md border backdrop-blur-xs',
    dot: 'rounded-full border backdrop-blur-xs',
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        'inline-flex items-center font-medium leading-none select-none transition-colors duration-150',
        sizeClasses[size],
        variantClasses[variant],
        config.classes,
        onClick && 'cursor-pointer hover:brightness-95 dark:hover:brightness-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        className
      )}
      {...props}
    >
      {variant === 'dot' ? (
        <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', config.dotColor)} />
      ) : (
        <IconComponent className={cn('w-3 h-3 shrink-0', config.iconColor)} strokeWidth={2} />
      )}
      {!iconOnly && <span className="truncate">{label}</span>}
    </div>
  );
};
