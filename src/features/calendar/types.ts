import { EventStatus } from '@/features/ui/status-badge';

export interface CalendarEvent {
  id: string;
  day: number;
  month: number;
  year: number;
  title: string;
  type: EventStatus;
  time?: string;
  processNumber?: string;
  court?: string;
  lawyerId?: string;
  isToday?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role?: string;
  badge?: string;
  oab?: string;
  avatar?: string;
  selected: boolean;
}

export interface CalendarFilterState {
  showFatal: boolean;
  showInProgress: boolean;
  showHearings: boolean;
  showHolidays: boolean;
  selectedLawyerIds: string[];
}
