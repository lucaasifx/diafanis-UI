import * as React from 'react';
import { CalendarEvent } from './types';
import { StatusBadge } from '@/features/ui/status-badge';
import { cn } from '@/shared/cn';

interface CalendarCellProps {
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday?: boolean;
  events?: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
  onSelectDate?: (day: number) => void;
  onOpenDayEvents?: (day: number, events: CalendarEvent[]) => void;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({
  dayNumber,
  isCurrentMonth,
  isToday = false,
  events = [],
  onEventClick,
  onSelectDate,
  onOpenDayEvents,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  if (!isCurrentMonth) {
    return (
      <div className="flex flex-col p-2 min-h-[115px] bg-transparent opacity-40 select-none">
        <span className="text-xs font-semibold text-muted-foreground">{dayNumber}</span>
      </div>
    );
  }

  const maxVisibleEvents = 2;
  const hasOverflow = events.length > maxVisibleEvents;
  const visibleEvents = showAll ? events : events.slice(0, maxVisibleEvents);
  const overflowCount = events.length - maxVisibleEvents;

  return (
    <div
      onClick={() => onSelectDate?.(dayNumber)}
      className={cn(
        'group flex flex-col p-2 min-h-[115px] transition-all gap-1.5 relative border-b border-r border-border/20',
        isToday
          ? 'bg-primary/[0.04] ring-2 ring-inset ring-primary/40'
          : 'bg-card/70 hover:bg-card'
      )}
    >
      {/* Header: Day Number & Today Badge */}
      <div className="flex items-center justify-between">
        {isToday ? (
          <div className="flex items-center gap-1.5">
            <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shadow-sm">
              {dayNumber}
            </span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
              Hoje
            </span>
          </div>
        ) : (
          <span className="text-xs font-semibold text-foreground">{dayNumber}</span>
        )}
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-1 flex-1">
        {visibleEvents.map((evt) => (
          <StatusBadge
            key={evt.id}
            status={evt.type}
            label={evt.title}
            onClick={() => onEventClick?.(evt)}
            className="w-fit max-w-full"
          />
        ))}

        {/* Overflow indicator */}
        {hasOverflow && !showAll && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenDayEvents) {
                onOpenDayEvents(dayNumber, events);
              } else {
                setShowAll(true);
              }
            }}
            className="text-[10px] font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted px-2 py-0.5 rounded-full cursor-pointer text-center w-fit mt-auto border border-border/40 transition-colors"
          >
            +{overflowCount} mais
          </button>
        )}

        {hasOverflow && showAll && !onOpenDayEvents && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowAll(false);
            }}
            className="text-[10px] font-medium text-muted-foreground hover:text-primary text-center w-full mt-auto"
          >
            Recolher
          </button>
        )}
      </div>
    </div>
  );
};
