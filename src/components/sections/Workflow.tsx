'use client';

import React, { useState } from 'react';
import { Code2, MousePointer, Bot, Sparkles, ArrowRight, Terminal, Blocks } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const codeSample = `import { RiverFlow } from '@riverflow/sdk'

const flow = new RiverFlow({
  name: 'Customer Onboarding',
  trigger: 'webhook',
})

flow.step('validate', async (data) => {
  const result = await ai.analyze(data)
  return result.isValid
})

flow.step('enrich', async (data) => {
  const enriched = await api.enrich(data)
  return { ...data, ...enriched }
})

flow.step('notify', async (data) => {
  await slack.send('#onboarding', {
    text: \`New user: \${data.name}\`,
  })
})

flow.deploy()`;

function getLineClass(line: string): string {
  if (line.includes('import')) return 'text-purple-400';
  if (line.includes('const')) return 'text-blue-400';
  if (line.includes('flow.')) return 'text-emerald-400';
  if (line.includes('await')) return 'text-yellow-300';
  if (line.includes('async')) return 'text-cyan-400';
  return 'text-dark-300';
}

const tabs = [
  {
    id: 'visual',
    label: 'Visual Builder',
    icon: MousePointer,
    title: 'Build visually with drag & drop',
    description:
      'Create complex workflows with our intuitive visual builder. Connect nodes, configure triggers, and deploy — all without writing a single line of code.',
  },
  {
    id: 'code',
    label: 'Code Editor',
    icon: Code2,
    title: 'Full control with code',
    description:
      'For developers who prefer code, our TypeScript SDK gives you full control over your workflows with type safety and auto-completion.',
  },
  {
    id: 'ai',
    label: 'AI Assistant',
    icon: Bot,
    title: 'Let AI build it for you',
    description:
      "Describe what you want in plain English and our AI assistant will generate the complete workflow for you.",
  },
] as const;

const visualNodes = [
  { label: 'Webhook Trigger', type: 'trigger', status: 'active' },
  { label: 'Data Validation', type: 'process', status: 'active' },
  { label: 'AI Analysis', type: 'ai', status: 'active' },
  { label: 'Route Decision', type: 'condition', status: 'pending' },
  { label: 'Send Notification', type: 'action', status: 'pending' },
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState<'visual' | 'code' | 'ai'>('visual');
  const { ref, isVisible } = useScrollAnimation();
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="workflow" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Badge variant="primary" className="mb-6">
            <Blocks className="w-3.5 h-3.5" />
            Workflow Builder
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Build your way, <span className="gradient-text">your choice</span>
          </h2>
          <p className="text-lg text-dark-400">
            Whether you prefer visual building, writing code, or letting AI do the work —
            we&apos;ve got you covered.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-dark-900/50 border border-dark-800/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
                  activeTab === tab.id
                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                    : 'text-dark-400 hover:text-white hover:bg-dark-800/50 border border-transparent'
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div
            className={cn(
              'transition-all duration-500',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{activeContent.title}</h3>
            <p className="text-dark-400 text-lg leading-relaxed mb-8">
              {activeContent.description}
            </p>
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Try it now
            </Button>
          </div>

          {/* Right - Visual */}
          <div
            className={cn(
              'transition-all duration-500',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <div className="rounded-2xl border border-dark-800/50 bg-dark-900/50 overflow-hidden shadow-2xl">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800/50 bg-dark-900/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-dark-800/50 text-xs text-dark-500">
                    <Terminal className="w-3 h-3" />
                    {activeTab === 'code' ? 'workflow.ts' : activeTab === 'ai' ? 'AI Assistant' : 'Visual Builder'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 min-h-[400px]">
                {activeTab === 'code' && (
                  <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                    <code>
                      {codeSample.split('\n').map((line, i) => (
                        <div key={i} className="flex">
                          <span className="text-dark-600 w-8 flex-shrink-0 text-right mr-4 select-none">
                            {i + 1}
                          </span>
                          <span className={getLineClass(line)}>
                            {line === '' ? '\u00A0' : line}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                )}

                {activeTab === 'visual' && (
                  <div className="space-y-6">
                    {visualNodes.map((node, i) => (
                      <div key={node.label} className="relative">
                        <div
                          className={cn(
                            'px-4 py-3 rounded-xl border text-sm font-medium transition-all',
                            node.status === 'active'
                              ? 'bg-primary-500/10 border-primary-500/30 text-primary-300'
                              : 'bg-dark-800/40 border-dark-700/30 text-dark-400'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2.5">
                              <span
                                className={cn(
                                  'w-2 h-2 rounded-full',
                                  node.status === 'active'
                                    ? 'bg-emerald-400 animate-pulse'
                                    : 'bg-dark-600'
                                )}
                              />
                              {node.label}
                            </span>
                            <span className="text-xs opacity-60">{node.type}</span>
                          </div>
                        </div>
                        {i < visualNodes.length - 1 && (
                          <div className="absolute left-1/2 -translate-x-1/2 top-full h-6 w-0.5 bg-dark-700/70" />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-4">
                    {/* AI Chat Interface */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-dark-800/40 rounded-xl rounded-tl-sm p-4 text-sm text-dark-300 leading-relaxed">
                          I&apos;ll help you create a workflow! Describe what you want to automate
                          and I&apos;ll build it for you.
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="flex-1 max-w-md">
                        <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl rounded-tr-sm p-4 text-sm text-primary-200 leading-relaxed">
                          Create a workflow that monitors GitHub PRs, runs code analysis with AI,
                          and posts results to Slack.
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-dark-800/40 rounded-xl rounded-tl-sm p-4 text-sm text-dark-300 leading-relaxed">
                          <p className="mb-3">I&apos;ll create that workflow for you. Here&apos;s the plan:</p>
                          <div className="space-y-2">
                            {[
                              '1. GitHub PR webhook trigger',
                              '2. Fetch code changes via GitHub API',
                              '3. Run AI code analysis',
                              '4. Format results as Slack message',
                              '5. Post to #code-reviews channel',
                            ].map((step, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-dark-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                {step}
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center gap-2 text-xs text-primary-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                            Generating workflow...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
