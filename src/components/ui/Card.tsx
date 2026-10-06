'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
  gradient = false,
  style,
}: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        'relative rounded-2xl bg-dark-900/50 border border-dark-800/50 p-6 backdrop-blur-sm',
        hover && 'hover-lift hover:border-primary-500/20',
        glow && 'glow-sm',
        gradient && 'bg-gradient-to-br from-dark-900/80 to-dark-800/50',
        className
      )}
    >
      {children}
    </div>
  );
}
