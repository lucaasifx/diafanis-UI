import * as React from 'react';
import { Filter } from 'lucide-react';
import { Checkbox } from '@/features/ui/checkbox';
import { cn } from '@/shared/cn';

interface CalendarFiltersProps {
  showFatal: boolean;
  showInProgress: boolean;
  showHearings: boolean;
  showHolidays: boolean;
  onChange: (filters: {
    showFatal: boolean;
    showInProgress: boolean;
    showHearings: boolean;
    showHolidays: boolean;
  }) => void;
}

export const CalendarFilters: React.FC<CalendarFiltersProps> = ({
  showFatal,
  showInProgress,
  showHearings,
  showHolidays,
  onChange,
}) => {
  const filterOptions = [
    {
      id: 'fatal',
      label: 'Prazos Fatais',
      checked: showFatal,
      dotClass: 'bg-status-fatal-icon',
      toggle: () => onChange({ showFatal: !showFatal, showInProgress, showHearings, showHolidays }),
    },
    {
      id: 'in_progress',
      label: 'Prazos em Andamento',
      checked: showInProgress,
      dotClass: 'bg-status-warning-icon',
      toggle: () => onChange({ showFatal, showInProgress: !showInProgress, showHearings, showHolidays }),
    },
    {
      id: 'hearings',
      label: 'Audiências Marcadas',
      checked: showHearings,
      dotClass: 'bg-status-hearing-icon',
      toggle: () => onChange({ showFatal, showInProgress, showHearings: !showHearings, showHolidays }),
    },
    {
      id: 'holidays',
      label: 'Sem Expediente Forense',
      checked: showHolidays,
      dotClass: 'bg-status-holiday-icon',
      toggle: () => onChange({ showFatal, showInProgress, showHearings, showHolidays: !showHolidays }),
    },
  ];

  return (
    <div className="flex flex-col gap-1.5">
      {/* Title */}
      <div className="flex items-center gap-1.5 pb-1.5 mb-1 border-b border-border/20">
        <Filter className="h-3.5 w-3.5 text-primary" />
        <span className="font-headline text-[11px] font-bold text-foreground uppercase tracking-wider">
          Filtros de Exibição
        </span>
      </div>

      {/* Checkbox list */}
      <div className="flex flex-col gap-1">
        {filterOptions.map((opt) => (
          <label
            key={opt.id}
            className="flex items-center gap-2 py-1 px-1.5 rounded-lg hover:bg-muted/60 cursor-pointer transition-colors text-xs text-foreground select-none"
          >
            <Checkbox
              checked={opt.checked}
              onCheckedChange={opt.toggle}
            />
            <span className={cn('h-2 w-2 rounded-full shrink-0', opt.dotClass)} />
            <span className="font-medium text-[13px]">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
