import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { CalendarContainer } from '@/features/calendar/CalendarContainer';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/calendar',
  component: CalendarContainer,
});
