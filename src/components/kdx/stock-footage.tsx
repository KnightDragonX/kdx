'use client'

import {
  Film,
  ImageIcon,
  AlertTriangle,
  Palette,
  ExternalLink,
  MonitorSmartphone,
  Code2,
  Terminal,
  Monitor,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface StockSource {
  name: string
  url: string
  description: string
  license: string
  licenseVariant: 'default' | 'secondary' | 'outline'
  bestFor: string[]
  icon: LucideIcon
}

const stockSources: StockSource[] = [
  {
    name: 'Pexels',
    url: 'https://pexels.com',
    description: 'Thousands of free HD and 4K stock videos',
    license: 'Free Commercial',
    licenseVariant: 'secondary',
    bestFor: ['hacker', 'cybersecurity', 'code', 'server', 'technology'],
    icon: Film,
  },
  {
    name: 'Pixabay',
    url: 'https://pixabay.com',
    description: 'Over 2.8 million free stock videos and images',
    license: 'Free Commercial',
    licenseVariant: 'secondary',
    bestFor: ['hacking', 'matrix', 'data', 'network', 'security'],
    icon: ImageIcon,
  },
  {
    name: 'Mixkit',
    url: 'https://mixkit.co',
    description: 'High-quality free video clips and templates',
    license: 'Royalty-Free',
    licenseVariant: 'outline',
    bestFor: ['tech backgrounds', 'code scrolling', 'abstract digital'],
    icon: Film,
  },
  {
    name: 'Coverr',
    url: 'https://coverr.co',
    description: 'Beautiful free stock video footage',
    license: 'Free Commercial',
    licenseVariant: 'secondary',
    bestFor: ['nature backgrounds', 'aerial shots', 'abstract'],
    icon: Film,
  },
  {
    name: 'video-ac.com',
    url: 'https://video-ac.com',
    description: 'Rough security breach screens and tech footage',
    license: 'CC0',
    licenseVariant: 'default',
    bestFor: ['security breach', 'warning screens', 'glitch effects'],
    icon: AlertTriangle,
  },
  {
    name: 'Canva Free',
    url: 'https://canva.com',
    description: 'Design tool with free stock footage library',
    license: 'Free Tier',
    licenseVariant: 'outline',
    bestFor: ['title cards', 'lower thirds', 'graphics', 'thumbnails'],
    icon: Palette,
  },
]

const searchKeywords = [
  'hacker',
  'cybersecurity',
  'code',
  'server room',
  'alert',
  'warning',
  'firewall',
  'data breach',
  'glitch',
  'matrix',
  'terminal',
  'typing',
  'network',
  'lock',
  'shield',
  'virus',
  'malware',
  'dark web',
  'binary code',
  'circuit board',
  'futuristic',
]

const codeTestingOptions = [
  {
    name: 'Browser Console',
    description: 'HTML/CSS/JS direct test',
    icon: Monitor,
  },
  {
    name: 'CodePen (free)',
    description: 'Online editor with live preview',
    icon: Code2,
  },
  {
    name: 'JSFiddle (free)',
    description: 'Quick code testing',
    icon: Terminal,
  },
  {
    name: 'VS Code (free)',
    description: 'Local development environment',
    icon: MonitorSmartphone,
  },
]

export function StockFootage() {
  return (
    <section id="footage" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            FREE RESOURCES
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Stock Footage{' '}
            <span className="kdx-gradient-text">Sources</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Free commercial-use video footage and images for your cybersecurity
            content.
          </p>
        </div>

        {/* Sources Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stockSources.map((source) => {
            const SourceIcon = source.icon
            return (
              <Card
                key={source.name}
                className="border-border/50 bg-card kdx-card-hover"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <SourceIcon
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      {source.name}
                    </CardTitle>
                    <Badge variant={source.licenseVariant} className="text-[10px]">
                      {source.license}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {source.description}
                  </p>

                  {/* Best For */}
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Best for
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {source.bestFor.map((keyword) => (
                        <span
                          key={keyword}
                          className="kdx-code inline-block rounded px-1.5 py-0.5 text-[10px]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Link */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-1.5 text-xs"
                    asChild
                  >
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${source.name} website`}
                    >
                      Visit {source.name}
                      <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recommended Search Keywords */}
        <Card
          className="mt-8 border-primary/20 bg-primary/5"
          aria-label="Recommended search keywords for stock footage"
        >
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              Recommended Search Keywords
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Copy and paste these keywords into any stock footage site to find
              the perfect clips for your cybersecurity videos.
            </p>
            <div className="flex flex-wrap gap-2">
              {searchKeywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="cursor-default border-primary/20 bg-background text-xs text-foreground hover:bg-primary/10"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Free Code Testing Options */}
        <Card
          className="mt-6 border-primary/20 bg-primary/5"
          aria-label="Free code testing options for the AI Builds channel"
        >
          <CardContent className="p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">
              Free Code Testing Options
            </h3>
            <p className="mb-5 text-sm text-muted-foreground">
              For the <span className="font-semibold text-foreground">AI Builds</span>{' '}
              channel specifically — test and showcase code without spending a
              dime.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {codeTestingOptions.map((option) => {
                const OptionIcon = option.icon
                return (
                  <div
                    key={option.name}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4 transition-colors hover:border-primary/30"
                  >
                    <OptionIcon
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {option.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
