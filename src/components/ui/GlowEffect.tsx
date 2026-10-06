'use client';

import React from 'react';

interface GlowEffectProps {
  color?: 'primary' | 'purple' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  position?: 'center' | 'top' | 'bottom';
}

export default function GlowEffect({
  color = 'primary',
  size = 'md',
  position = 'center',
}: GlowEffectProps) {
  const sizes = {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[400px] h-[400px]',
    lg: 'w-[600px] h-[600px]',
  };

  const positions = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  };

  const colors: Record<string, string> = {
    primary: 'bg-primary-500/20',
    purple: 'bg-purple-500/20',
    blue: 'bg-blue-500/20',
  };

  return (
    <div
      className={`absolute ${sizes[size]} ${positions[position]} ${colors[color]} rounded-full blur-[120px] pointer-events-none`}
    />
  );
}
