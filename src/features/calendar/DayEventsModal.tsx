import * as React from 'react';
import { X, MapPin, Plus } from 'lucide-react';
import { StatusBadge } from '@/features/ui/status-badge';
import { Button } from '@/features/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/features/ui/avatar';
import { CalendarEvent, TeamMember } from './types';

interface DayEventsModalProps {
  isOpen: boolean;
  day: number;
  monthName?: string;
  year?: number;
  events: CalendarEvent[];
  teamMembers: TeamMember[];
  onClose: () => void;
  onSelectEvent: (event: CalendarEvent) => void;
  onAddNewEvent?: (day: number) => void;
}

export const DayEventsModal: React.FC<DayEventsModalProps> = ({
  isOpen,
  day,
  monthName = 'Setembro',
  year = 2026,
  events,
  teamMembers,
  onClose,
  onSelectEvent,
  onAddNewEvent,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div
        className="bg-card border border-border/50 rounded-2xl w-full max-w-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="day-events-title"
      >
        {/* Header: Pure typographic restraint, no widgets or badges */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-border/30 bg-muted/10">
          <div className="flex flex-col gap-0.5">
            <h2 id="day-events-title" className="text-base font-semibold text-foreground tracking-tight">
              {day} de {monthName} de {year}
            </h2>
            <p className="text-xs text-muted-foreground">
              {events.length} {events.length === 1 ? 'compromisso agendado' : 'compromissos agendados'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            title="Fechar"
            aria-label="Fechar"
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Events List: Anti-card continuous integrated rows */}
        <div className="flex-1 overflow-y-auto divide-y divide-border/20 px-2 py-1 max-h-[60vh]">
          {events.length === 0 ? (
            <div className="py-12 text-center text-xs text-muted-foreground">
              Nenhum compromisso agendado para este dia.
            </div>
          ) : (
            events.map((evt) => {
              const lawyer = teamMembers.find((m) => m.id === evt.lawyerId) || teamMembers[0];

              return (
                <div
                  key={evt.id}
                  onClick={() => onSelectEvent(evt)}
                  className="group flex items-start gap-4 p-3.5 sm:p-4 rounded-xl hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  {/* Time Column */}
                  <div className="w-14 shrink-0 flex flex-col pt-0.5">
                    <span className="font-mono text-xs font-semibold text-foreground">
                      {evt.time || '—'}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {evt.time ? 'Horário' : 'Dia todo'}
                    </span>
                  </div>

                  {/* Event Info Column */}
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <StatusBadge status={evt.type} label={evt.title} />
                      {evt.isToday && (
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                          Hoje
                        </span>
                      )}
                    </div>

                    {evt.processNumber && (
                      <span className="font-mono text-xs text-foreground/90 font-medium truncate">
                        {evt.processNumber}
                      </span>
                    )}

                    {evt.court && (
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground truncate">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate">{evt.court}</span>
                      </div>
                    )}
                  </div>

                  {/* Responsible Lawyer Column */}
                  {evt.type !== 'holiday' && lawyer && (
                    <div className="shrink-0 flex items-center gap-2.5 pl-2 text-right">
                      <div className="hidden sm:flex flex-col items-end">
                        <span className="text-xs font-medium text-foreground truncate max-w-[130px]">
                          {lawyer.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate max-w-[130px]">
                          {lawyer.role || 'Responsável'}
                        </span>
                      </div>
                      <Avatar className="h-7 w-7 border border-border/40 shrink-0">
                        {lawyer.avatar && <AvatarImage src={lawyer.avatar} alt={lawyer.name} />}
                        <AvatarFallback className="text-[10px]">{lawyer.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer: Quiet actions, no neon accents */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-border/30 bg-muted/10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAddNewEvent?.(day)}
            className="gap-2 text-xs font-medium rounded-lg"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Novo compromisso</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-xs font-medium rounded-lg"
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};
