import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SegmentedControl } from '@/features/ui/segmented-control';

interface CalendarHeaderProps {
  currentMonth: string;
  currentView: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onViewChange: (view: string) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  currentView,
  onPrevMonth,
  onNextMonth,
  onToday,
  onViewChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
      {/* Month Navigator & Today Button */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrevMonth}
            aria-label="Mês anterior"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <h2 className="font-headline text-lg sm:text-xl font-semibold text-foreground min-w-40 text-center">
            {currentMonth}
          </h2>
          <button
            type="button"
            onClick={onNextMonth}
            aria-label="Próximo mês"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={onToday}
          className="px-3.5 py-1 rounded-full bg-muted/80 text-foreground hover:bg-muted text-xs font-semibold transition-colors shadow-sm"
        >
          Hoje
        </button>
      </div>

      {/* View Switcher: Mês | Semana | Dia */}
      <SegmentedControl
        options={[
          { label: 'Mês', value: 'month' },
          { label: 'Semana', value: 'week' },
          { label: 'Dia', value: 'day' },
        ]}
        value={currentView}
        onChange={onViewChange}
      />
    </div>
  );
};
