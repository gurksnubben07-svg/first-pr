'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import AnimatedGradient from '../ui/AnimatedGradient';

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '50M+', label: 'Tasks Automated' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'User Rating' },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <AnimatedGradient />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Floating Elements */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-60"
        style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-slow opacity-40"
        style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float opacity-50"
        style={{ transform: `translate(${mousePosition.x * 1}px, ${mousePosition.y * 1}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="primary" className="px-4 py-1.5 gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Now with GPT-4 Integration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-slide-up">
          <span className="block text-white">Automate Your</span>
          <span className="block gradient-text mt-2">Workflow with AI</span>
        </h1>

        {/* Subheading */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-dark-400 mb-12 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          Build intelligent automation pipelines that learn and adapt. Connect your tools,
          define your workflows, and let AI handle the rest.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Button variant="primary" size="xl" icon={<ArrowRight className="w-5 h-5" />} glow>
            Start Building Free
          </Button>
          <Button
            variant="secondary"
            size="xl"
            icon={<Play className="w-5 h-5" />}
            iconPosition="left"
          >
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div
          className="flex items-center justify-center gap-2 mb-12 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-dark-950 bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 ml-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-dark-400 ml-2">from 2,000+ reviews</span>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl border border-dark-800/50 bg-dark-900/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary-500/5">
            {/* Window Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800/50 bg-dark-900/80">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-lg bg-dark-800/50 text-xs text-dark-500">
                  app.riverflow.ai/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Active Workflows', value: '247', change: '+12%' },
                  { label: 'Tasks Completed', value: '18.5K', change: '+28%' },
                  { label: 'Time Saved', value: '340h', change: '+45%' },
                ].map((stat, i) => (
                  <div key={i} className="bg-dark-800/40 rounded-xl p-4 border border-dark-700/30">
                    <p className="text-xs text-dark-400 mb-1">{stat.label}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-emerald-400 mb-1">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Workflow Visual */}
              <div className="bg-dark-800/30 rounded-xl p-6 border border-dark-700/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-dark-300">AI Workflow Running</span>
                </div>
                <div className="flex items-center gap-3 overflow-hidden">
                  {['Trigger', 'Process', 'Analyze', 'Transform', 'Deploy'].map((step, i) => (
                    <React.Fragment key={step}>
                      <div
                        className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-medium ${
                          i < 3
                            ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                            : 'bg-dark-700/50 text-dark-400 border border-dark-700/30'
                        }`}
                      >
                        {step}
                      </div>
                      {i < 4 && (
                        <div
                          className={`flex-shrink-0 w-8 h-0.5 ${
                            i < 2 ? 'bg-primary-500/50' : 'bg-dark-700/50'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect Behind Dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 via-purple-500/5 to-primary-500/10 rounded-3xl blur-2xl -z-10" />
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-dark-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
