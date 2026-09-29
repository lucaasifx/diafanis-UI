import * as React from 'react';
import { Radio, Clock, Scale, CalendarOff } from 'lucide-react';

export const CalendarLegend: React.FC = () => {
  const legendItems = [
    {
      label: 'Prazo Fatal / Peremptório',
      icon: Radio,
      iconClass: 'text-status-fatal-icon',
    },
    {
      label: 'Atenção / Em Andamento',
      icon: Clock,
      iconClass: 'text-status-warning-icon',
    },
    {
      label: 'Audiência Marcada',
      icon: Scale,
      iconClass: 'text-status-hearing-icon',
    },
    {
      label: 'Feriado / Sem Expediente Forense',
      icon: CalendarOff,
      iconClass: 'text-status-holiday-icon',
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-muted-foreground border-t border-border/20">
      {legendItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-2 font-medium text-foreground">
            <Icon className={`h-4 w-4 shrink-0 ${item.iconClass}`} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};
