import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RiverFlow AI - Automate Your Workflow with AI',
  description:
    'Build intelligent automation pipelines that learn and adapt. Connect your tools, define your workflows, and let AI handle the rest.',
  keywords: ['automation', 'AI', 'workflow', 'integration', 'productivity'],
  openGraph: {
    title: 'RiverFlow AI - Automate Your Workflow with AI',
    description: 'Build intelligent automation pipelines that learn and adapt.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-950 text-white antialiased">{children}</body>
    </html>
  );
}
