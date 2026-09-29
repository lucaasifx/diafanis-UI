import { z } from 'zod';

export const calendarSearchSchema = z.object({
  month: z.number().int().min(1).max(12).default(9),
  year: z.number().int().min(2020).max(2040).default(2026),
  view: z.enum(['month', 'week', 'day']).default('month'),
  showFatal: z.boolean().default(true),
  showInProgress: z.boolean().default(true),
  showHearings: z.boolean().default(true),
  showHolidays: z.boolean().default(true),
  lawyerIds: z.array(z.string()).default(['me', 'hr', 'pa']),
});

export type CalendarSearchParams = z.infer<typeof calendarSearchSchema>;

export const createEventSchema = z.object({
  title: z.string().min(2, 'O título é obrigatório'),
  type: z.enum(['fatal', 'in_progress', 'hearing', 'holiday']),
  day: z.number().int().min(1).max(31),
  month: z.number().int().min(1).max(12),
  year: z.number().int().min(2020).max(2040),
  time: z.string().optional(),
  processNumber: z.string().optional(),
  court: z.string().optional(),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
