'use client';

import React from 'react';

export default function AnimatedGradient() {
  return (
    <>
      {/* Top gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[100px] animate-float-slow pointer-events-none" />

      {/* Bottom gradient orbs */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-600/8 rounded-full blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute -bottom-20 right-20 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[80px] animate-float pointer-events-none" />
    </>
  );
}
