'use client'

import {
  PenTool,
  Camera,
  Scissors,
  Mic,
  ExternalLink,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Tool {
  name: string
  icon: LucideIcon
  purpose: string
  link: string
}

interface ToolCategory {
  category: string
  icon: LucideIcon
  tools: Tool[]
}

import type { LucideIcon } from 'lucide-react'

const categories: ToolCategory[] = [
  {
    category: 'Design',
    icon: PenTool,
    tools: [
      {
        name: 'Inkscape',
        icon: PenTool,
        purpose: 'Logo design, vector graphics, channel branding',
        link: 'https://inkscape.org',
      },
      {
        name: 'Canva',
        icon: PenTool,
        purpose: 'Thumbnail creation, social media graphics (free tier)',
        link: 'https://canva.com',
      },
      {
        name: 'GIMP',
        icon: PenTool,
        purpose: 'Advanced image editing, thumbnail retouching',
        link: 'https://gimp.org',
      },
    ],
  },
  {
    category: 'Recording',
    icon: Camera,
    tools: [
      {
        name: 'OBS Studio',
        icon: Camera,
        purpose: 'Screen recording, live streaming, webcam capture',
        link: 'https://obsproject.com',
      },
      {
        name: 'Smartphone',
        icon: Mic,
        purpose: 'Voice recording for narration (free & high quality)',
        link: '',
      },
    ],
  },
  {
    category: 'Editing',
    icon: Scissors,
    tools: [
      {
        name: 'Kdenlive',
        icon: Scissors,
        purpose: 'Video editing, transitions, effects, compositing',
        link: 'https://kdenlive.org',
      },
    ],
  },
  {
    category: 'Audio',
    icon: Mic,
    tools: [
      {
        name: 'Audacity',
        icon: Mic,
        purpose: 'Audio cleanup, noise removal, voice enhancement',
        link: 'https://audacityteam.org',
      },
    ],
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            FREE TOOLS
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Production <span className="kdx-gradient-text">Toolkit</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Every tool you need to produce professional cybersecurity content —
            all completely free and open-source.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const CatIcon = cat.icon
            return (
              <Card
                key={cat.category}
                className="border-border/50 bg-card kdx-card-hover"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <CatIcon className="size-4 text-primary" />
                    {cat.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cat.tools.map((tool) => {
                    const ToolIcon = tool.icon
                    return (
                      <div
                        key={tool.name}
                        className="rounded-lg border border-border/50 p-3 transition-colors hover:border-primary/30"
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <ToolIcon className="size-3.5 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {tool.name}
                          </span>
                        </div>
                        <p className="mb-2 text-xs text-muted-foreground">
                          {tool.purpose}
                        </p>
                        {tool.link && (
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            Visit site
                            <ExternalLink className="size-3" />
                          </a>
                        )}
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Cost Summary */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">
                  Total Cost: $0.00
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every single tool listed above is 100% free and open-source. No
                  subscriptions, no trials, no hidden fees.
                </p>
              </div>
              <Badge variant="destructive" className="shrink-0 px-4 py-1.5 text-sm">
                100% FREE STACK
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
