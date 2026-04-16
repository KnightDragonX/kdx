'use client'

import {
  ImageIcon,
  Layers,
  Type,
  Palette,
  Sparkles,
  Lightbulb,
  AlertTriangle,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const steps = [
  {
    number: 1,
    title: 'Set Canvas Size',
    description: 'Create a 1280×720 canvas with pure black (#0A0A0A) background.',
  },
  {
    number: 2,
    title: 'Add Tool/Topic Icon',
    description:
      'Place a large white icon (64px+) on the left or center. Use Flaticon or Lucide icons.',
  },
  {
    number: 3,
    title: 'Bold Title Text',
    description:
      'Add the video title in white, bold, uppercase. Use Space Mono or Poppins Bold at 48-64px.',
  },
  {
    number: 4,
    title: 'Red Accent Bar',
    description:
      'Add a vertical or horizontal red (#FF2A2A) bar or underline to separate title from subtitle.',
  },
  {
    number: 5,
    title: 'Subtitle / Tagline',
    description:
      'Add a secondary line in gray (#B3B3B3) or red for emphasis — keep it short and punchy.',
  },
  {
    number: 6,
    title: 'Export & Verify',
    description:
      'Export as high-quality PNG. Check readability at small sizes (mobile thumbnail view).',
  },
]

const proTips = [
  'Always use a MAX 3-color palette: Black, White, Red.',
  'Text should be readable at 120px width — mobile thumbnails are tiny.',
  'Use a red glow effect on the accent bar or icon for the "HTB" aesthetic.',
  'Never place text over complex backgrounds — keep it clean.',
  'Add "KDX" watermark in the bottom-right corner for brand consistency.',
]

const colorRules = [
  { rule: 'Primary BG', value: '#0A0A0A', usage: 'Thumbnail background' },
  { rule: 'Text Color', value: '#FFFFFF', usage: 'Main title text' },
  { rule: 'Accent Color', value: '#FF2A2A', usage: 'Bars, underlines, highlights' },
  { rule: 'Secondary Text', value: '#B3B3B3', usage: 'Subtitles, descriptions' },
  { rule: 'Highlight', value: '#DC143C', usage: 'Key words, emphasis' },
]

export function ThumbnailGuide() {
  return (
    <section id="thumbnail" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            DESIGN GUIDE
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Thumbnail <span className="kdx-gradient-text">Blueprint</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Every Knight Dragon X thumbnail follows a strict visual template for
            instant brand recognition across all 6 channels.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Visual Template */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="size-5 text-primary" />
                Thumbnail Template
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Visual mockup */}
              <div className="relative mb-6 overflow-hidden rounded-lg border border-border/50 bg-[#0A0A0A] p-8">
                <div className="flex items-center gap-6">
                  {/* Simulated icon */}
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <span className="text-3xl text-white">🛡️</span>
                  </div>
                  {/* Title area */}
                  <div className="space-y-2">
                    <div className="h-2 w-3 rounded bg-[#FF2A2A]" />
                    <p className="text-xl font-bold uppercase tracking-wide text-white">
                      NMAP ON BLACKARCH
                    </p>
                    <p className="text-sm text-[#B3B3B3]">
                      The ONLY Tutorial You Need
                    </p>
                  </div>
                </div>
                {/* Red accent bar */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FF2A2A]" />
                {/* Watermark */}
                <div className="absolute bottom-2 right-3 text-xs font-mono text-white/30">
                  KDX
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Layout:</strong> Black background → Large
                  icon → Bold white title → Red accent separator → Gray subtitle
                </p>
                <p>
                  <strong className="text-foreground">Aspect Ratio:</strong> 16:9 (1280×720)
                </p>
                <p>
                  <strong className="text-foreground">Style:</strong> Minimalist, high-contrast,
                  hacker aesthetic
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Color Usage Rules */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-5 text-primary" />
                Color Usage Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {colorRules.map((item) => (
                  <div
                    key={item.rule}
                    className="flex items-center gap-3 rounded-lg border border-border/50 p-3"
                  >
                    <div
                      className="size-8 shrink-0 rounded-md border border-border/30 dark:border-white/10"
                      style={{ backgroundColor: item.value }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {item.rule}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.value} — {item.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mt-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
            <Layers className="size-5 text-primary" />
            Step-by-Step Creation Guide
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="border-border/50 bg-card kdx-card-hover"
              >
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {step.number}
                    </div>
                    <Type className="size-4 text-muted-foreground" />
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="size-5 text-primary" />
              Pro Tips
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {proTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 size-3 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-3">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" />
              <p className="text-sm text-destructive">
                <strong>Never use blue or purple.</strong> The brand is strictly
                black, white, and red. Any other accent color breaks the
                cybersecurity aesthetic.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
