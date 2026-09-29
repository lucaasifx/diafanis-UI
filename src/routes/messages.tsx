import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { FeatureInProgress } from '@/features/ui/feature-in-progress';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/messages',
  component: () => <FeatureInProgress modulePath="/messages" />,
});
