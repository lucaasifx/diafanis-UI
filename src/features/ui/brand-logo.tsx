import * as React from 'react';
import { cn } from '@/shared/cn';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  collapsed?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  collapsed = false,
  className,
}) => {
  const sizeMap = {
    sm: { icon: 'h-6 w-6', text: 'text-sm', dot: 'h-1.5 w-1.5' },
    md: { icon: 'h-8 w-8', text: 'text-lg', dot: 'h-2 w-2' },
    lg: { icon: 'h-10 w-10', text: 'text-xl', dot: 'h-2.5 w-2.5' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn('flex items-center gap-2.5 select-none', className)}>
      {/* Faceted Glass Prism Icon (Diafanís) */}
      <div className={cn('relative shrink-0 flex items-center justify-center', currentSize.icon)}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Gradient Facet 1: Deep Indigo / Cobalt */}
            <linearGradient id="facet-primary" x1="6" y1="6" x2="22" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Gradient Facet 2: Luminous Azure / Cyan */}
            <linearGradient id="facet-secondary" x1="18" y1="4" x2="32" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Gradient Facet 3: Refraction Highlight */}
            <linearGradient id="facet-tertiary" x1="14" y1="14" x2="28" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
            </linearGradient>

            {/* Specular White Rim */}
            <linearGradient id="specular-rim" x1="8" y1="4" x2="28" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Facet Left: Base Triangle */}
          <path
            d="M18 4L6 24L18 32V4Z"
            fill="url(#facet-primary)"
            className="transition-colors"
          />

          {/* Facet Right: Angular Projection */}
          <path
            d="M18 4L30 18L18 32V4Z"
            fill="url(#facet-secondary)"
            className="transition-colors"
          />

          {/* Facet Internal Diamond: Translucent Refraction Glass */}
          <path
            d="M18 9L25 18L18 27L11 18L18 9Z"
            fill="url(#facet-tertiary)"
            fillOpacity="0.75"
          />

          {/* Specular Reflection Rim */}
          <path
            d="M18 4L30 18M18 4L6 24"
            stroke="url(#specular-rim)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Center Precision Node */}
          <circle cx="18" cy="18" r="1.75" fill="#ffffff" fillOpacity="0.95" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {!collapsed && (
        <span
          className={cn(
            'font-headline font-bold tracking-tight text-foreground truncate',
            currentSize.text
          )}
        >
          Diafanís
        </span>
      )}
    </div>
  );
};
