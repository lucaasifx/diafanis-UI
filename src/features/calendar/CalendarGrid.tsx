import * as React from 'react';
import { CalendarCell } from './CalendarCell';
import { CalendarEvent } from './types';

interface CalendarGridProps {
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
  onSelectDate?: (day: number) => void;
  onOpenDayEvents?: (day: number, events: CalendarEvent[]) => void;
}

const weekDays = [
  { label: 'Dom', isWeekend: true },
  { label: 'Seg', isWeekend: false },
  { label: 'Ter', isWeekend: false },
  { label: 'Qua', isWeekend: false },
  { label: 'Qui', isWeekend: false },
  { label: 'Sex', isWeekend: false },
  { label: 'Sáb', isWeekend: true },
];

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  events,
  onEventClick,
  onSelectDate,
  onOpenDayEvents,
}) => {
  // Mapping events by day for fast lookup
  const eventsByDay = React.useMemo(() => {
    const map = new Map<number, CalendarEvent[]>();
    events.forEach((evt) => {
      const list = map.get(evt.day) || [];
      list.push(evt);
      map.set(evt.day, list);
    });
    return map;
  }, [events]);

  return (
    <div className="flex flex-col w-full overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm">
      {/* Weekday Column Headers */}
      <div className="grid grid-cols-7 border-b border-border/30 bg-muted/30">
        {weekDays.map((day, i) => (
          <div
            key={day.label}
            className={`py-2 px-3 text-xs font-semibold ${
              i < 6 ? 'border-r border-border/20' : ''
            } ${day.isWeekend ? 'text-muted-foreground' : 'text-foreground'}`}
          >
            {day.label}
          </div>
        ))}
      </div>

      {/* Days Grid: 5 weeks x 7 columns */}
      <div className="grid grid-cols-7 bg-muted/10">
        {/* Preceding August days */}
        <CalendarCell dayNumber={30} isCurrentMonth={false} />
        <CalendarCell dayNumber={31} isCurrentMonth={false} />

        {/* September 1 to 30 */}
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          const dayEvents = eventsByDay.get(day) || [];
          const isToday = day === 15;

          return (
            <CalendarCell
              key={`sep-${day}`}
              dayNumber={day}
              isCurrentMonth={true}
              isToday={isToday}
              events={dayEvents}
              onEventClick={onEventClick}
              onSelectDate={onSelectDate}
              onOpenDayEvents={onOpenDayEvents}
            />
          );
        })}

        {/* Following October days */}
        <CalendarCell dayNumber={1} isCurrentMonth={false} />
        <CalendarCell dayNumber={2} isCurrentMonth={false} />
        <CalendarCell dayNumber={3} isCurrentMonth={false} />
      </div>
    </div>
  );
};
