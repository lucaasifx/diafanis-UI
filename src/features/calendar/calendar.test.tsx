import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalendarCell } from './CalendarCell';
import { StatusBadge } from '@/features/ui/status-badge';
import { DayEventsModal } from './DayEventsModal';
import { CalendarEvent } from './types';
import { initialTeamMembers } from './mock-data';

describe('CalendarCell & StatusBadge', () => {
  it('deve renderizar o badge de Prazo Fatal com estilo e texto corretos', () => {
    render(<StatusBadge status="fatal" label="Fatal" />);
    expect(screen.getByText('Fatal')).toBeInTheDocument();
  });

  it('deve renderizar a célula com destaque visual para o dia de Hoje', () => {
    const todayEvents: CalendarEvent[] = [
      { id: '1', day: 15, month: 9, year: 2026, title: 'Audiência', type: 'hearing' },
      { id: '2', day: 15, month: 9, year: 2026, title: 'Fatal', type: 'fatal' },
    ];

    render(
      <CalendarCell
        dayNumber={15}
        isCurrentMonth={true}
        isToday={true}
        events={todayEvents}
      />
    );

    expect(screen.getByText('Hoje')).toBeInTheDocument();
    expect(screen.getByText('Audiência')).toBeInTheDocument();
    expect(screen.getByText('Fatal')).toBeInTheDocument();
  });

  it('deve renderizar o indicador de feriado local / sem expediente forense', () => {
    const holidayEvent: CalendarEvent[] = [
      { id: '3', day: 21, month: 9, year: 2026, title: 'Feriado Local', type: 'holiday' },
    ];

    render(
      <CalendarCell
        dayNumber={21}
        isCurrentMonth={true}
        events={holidayEvent}
      />
    );

    expect(screen.getByText('Feriado Local')).toBeInTheDocument();
  });

  it('deve colapsar eventos excedentes exibindo o indicador +X mais', () => {
    const multipleEvents: CalendarEvent[] = [
      { id: '1', day: 24, month: 9, year: 2026, title: 'Atenção', type: 'in_progress' },
      { id: '2', day: 24, month: 9, year: 2026, title: 'Audiência', type: 'hearing' },
      { id: '3', day: 24, month: 9, year: 2026, title: 'Contrarrazões', type: 'fatal' },
      { id: '4', day: 24, month: 9, year: 2026, title: 'Oitiva', type: 'hearing' },
    ];

    render(
      <CalendarCell
        dayNumber={24}
        isCurrentMonth={true}
        events={multipleEvents}
      />
    );

    // Initial render displays 2 events and "+2 mais" button
    expect(screen.getByText('+2 mais')).toBeInTheDocument();

    // Clicking "+2 mais" expands all events
    fireEvent.click(screen.getByText('+2 mais'));
    expect(screen.getByText('Contrarrazões')).toBeInTheDocument();
    expect(screen.getByText('Oitiva')).toBeInTheDocument();
    expect(screen.getByText('Recolher')).toBeInTheDocument();
  });

  it('deve chamar onOpenDayEvents ao clicar no indicador de eventos excedentes', () => {
    const multipleEvents: CalendarEvent[] = [
      { id: '1', day: 24, month: 9, year: 2026, title: 'Atenção', type: 'in_progress' },
      { id: '2', day: 24, month: 9, year: 2026, title: 'Audiência', type: 'hearing' },
      { id: '3', day: 24, month: 9, year: 2026, title: 'Contrarrazões', type: 'fatal' },
      { id: '4', day: 24, month: 9, year: 2026, title: 'Oitiva', type: 'hearing' },
    ];

    const onOpenMock = vi.fn();
    render(
      <CalendarCell
        dayNumber={24}
        isCurrentMonth={true}
        events={multipleEvents}
        onOpenDayEvents={onOpenMock}
      />
    );

    const overflowBtn = screen.getByText('+2 mais');
    expect(overflowBtn).toBeInTheDocument();

    fireEvent.click(overflowBtn);
    expect(onOpenMock).toHaveBeenCalledWith(24, multipleEvents);
  });

  it('deve renderizar dias de meses adjacentes com menor opacidade', () => {
    render(<CalendarCell dayNumber={30} isCurrentMonth={false} />);
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});

describe('DayEventsModal (Escalabilidade e Responsável)', () => {
  const tenEvents: CalendarEvent[] = Array.from({ length: 10 }, (_, i) => ({
    id: `evt-${i + 1}`,
    day: 15,
    month: 9,
    year: 2026,
    title: `Compromisso Forense #${i + 1}`,
    type: (i % 3 === 0 ? 'fatal' : i % 3 === 1 ? 'hearing' : 'in_progress') as CalendarEvent['type'],
    time: `1${i}:00`,
    processNumber: `000${i + 1}000-12.2026.8.17.0001`,
    court: '1ª Vara Cível - Petrolina/PE',
    lawyerId: i % 2 === 0 ? 'me' : 'hr',
  }));

  it('deve renderizar uma lista escalável de 10 eventos no modal sem distorção', () => {
    render(
      <DayEventsModal
        isOpen={true}
        day={15}
        events={tenEvents}
        teamMembers={initialTeamMembers}
        onClose={vi.fn()}
        onSelectEvent={vi.fn()}
      />
    );

    expect(screen.getByText('15 de Setembro de 2026')).toBeInTheDocument();
    expect(screen.getByText('10 compromissos agendados')).toBeInTheDocument();
    expect(screen.getByText('Compromisso Forense #1')).toBeInTheDocument();
    expect(screen.getByText('Compromisso Forense #10')).toBeInTheDocument();
  });

  it('deve exibir o advogado responsável atribuído ao compromisso', () => {
    render(
      <DayEventsModal
        isOpen={true}
        day={15}
        events={tenEvents.slice(0, 2)}
        teamMembers={initialTeamMembers}
        onClose={vi.fn()}
        onSelectEvent={vi.fn()}
      />
    );

    // Dr. Alberto Queiroz (lawyerId: 'me')
    expect(screen.getByText('Dr. Alberto Queiroz')).toBeInTheDocument();
    // Dr. Himmad Rocha (lawyerId: 'hr')
    expect(screen.getByText('Dr. Himmad Rocha')).toBeInTheDocument();
  });

  it('deve disparar onSelectEvent ao clicar em um evento da lista', () => {
    const onSelectMock = vi.fn();
    render(
      <DayEventsModal
        isOpen={true}
        day={15}
        events={tenEvents.slice(0, 1)}
        teamMembers={initialTeamMembers}
        onClose={vi.fn()}
        onSelectEvent={onSelectMock}
      />
    );

    fireEvent.click(screen.getByText('Compromisso Forense #1'));
    expect(onSelectMock).toHaveBeenCalledWith(tenEvents[0]);
  });

  it('deve transicionar isOpen de false para true sem violar as regras de hooks do React', () => {
    const { rerender } = render(
      <DayEventsModal
        isOpen={false}
        day={15}
        events={tenEvents}
        teamMembers={initialTeamMembers}
        onClose={vi.fn()}
        onSelectEvent={vi.fn()}
      />
    );

    expect(screen.queryByText('15 de Setembro de 2026')).not.toBeInTheDocument();

    // Rerender with isOpen = true: must not throw "Rendered more hooks than during previous render"
    rerender(
      <DayEventsModal
        isOpen={true}
        day={15}
        events={tenEvents}
        teamMembers={initialTeamMembers}
        onClose={vi.fn()}
        onSelectEvent={vi.fn()}
      />
    );

    expect(screen.getByText('15 de Setembro de 2026')).toBeInTheDocument();
  });
});
