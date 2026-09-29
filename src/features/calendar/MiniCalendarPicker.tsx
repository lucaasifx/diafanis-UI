import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/shared/cn';

interface MiniCalendarPickerProps {
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
}

export const MiniCalendarPicker: React.FC<MiniCalendarPickerProps> = ({
  selectedDay = 15,
  onSelectDay,
}) => {
  // Dots data corresponding to the reference calendar
  const dayIndicators: Record<number, string> = {
    1: 'bg-status-hearing-icon',
    3: 'bg-status-fatal-icon',
    9: 'bg-status-warning-icon',
    16: 'bg-status-hearing-icon',
    18: 'bg-status-fatal-icon',
    21: 'bg-status-holiday-icon',
    24: 'bg-status-warning-icon',
    28: 'bg-status-fatal-icon',
  };

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      {/* Month Navigator Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/20">
        <span className="font-headline text-xs font-semibold text-foreground">
          Setembro 2026
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Mês anterior"
            className="flex h-6 w-6 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            aria-label="Próximo mês"
            className="flex h-6 w-6 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center mb-1">
        {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, i) => (
          <span key={i} className="text-[10px] font-semibold text-muted-foreground/80 py-0.5">
            {day}
          </span>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
        {/* Previous month trailing day */}
        <span className="py-1 text-muted-foreground/40 text-[11px]">31</span>

        {/* September days */}
        {daysInMonth.map((day) => {
          const isSelected = selectedDay === day;
          const indicatorColor = dayIndicators[day];
          const isHoliday = day === 21;

          return (
            <button
              key={day}
              type="button"
              onClick={() => onSelectDay?.(day)}
              className={cn(
                'group relative flex flex-col items-center justify-center h-7 w-7 mx-auto rounded-full text-[11px] font-medium transition-all select-none',
                isSelected
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : isHoliday
                  ? 'bg-muted text-foreground'
                  : 'text-foreground hover:bg-muted'
              )}
            >
              <span>{day}</span>
              {indicatorColor && !isSelected && (
                <span className={cn('h-1 w-1 rounded-full absolute bottom-0.5', indicatorColor)} />
              )}
            </button>
          );
        })}

        {/* Next month leading days */}
        {[1, 2, 3, 4].map((day) => (
          <span key={`next-${day}`} className="py-1 text-muted-foreground/40 text-[11px]">
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};
