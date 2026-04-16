'use client'

import { Palette, Type, Film, Sparkles, Zap, Clapperboard } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const colors = [
  { name: 'Primary Background', dark: '#0A0A0A', light: '#fafafa' },
  { name: 'Secondary Background', dark: '#1A1A1A', light: '#f5f5f5' },
  { name: 'Accent (Red)', dark: '#FF2A2A', light: '#FF2A2A', glow: true },
  { name: 'Deep Red', dark: '#DC143C', light: '#DC143C' },
  { name: 'Text Primary', dark: '#FFFFFF', light: '#0a0a0a' },
  { name: 'Text Secondary', dark: '#B3B3B3', light: '#737373' },
]

const editingStyles = [
  {
    icon: Zap,
    title: 'Glitch Transitions',
    description:
      'Quick digital glitch effects between cuts to reinforce the hacker aesthetic.',
  },
  {
    icon: Film,
    title: 'Matrix Terminal Overlays',
    description:
      'Subtle falling code overlays in the background during key explanations.',
  },
  {
    icon: Sparkles,
    title: 'Red Neon CTAs',
    description:
      'Glowing red call-to-action buttons and subscribe prompts with neon glow effect.',
  },
  {
    icon: Clapperboard,
    title: 'Consistent Intro/Outro',
    description:
      'Standardized 3-second intro with dragon logo animation and outro with channel links.',
  },
]

export function BrandGuidelines() {
  return (
    <section id="brand" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            BRAND IDENTITY
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Brand <span className="kdx-gradient-text">Guidelines</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The visual DNA of Knight Dragon X. Every channel follows this
            consistent identity for brand recognition and audience trust.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Color Palette */}
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-5 text-primary" />
                Color Palette
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className="flex items-center gap-3 rounded-lg border border-border/50 p-3"
                >
                  <div className="flex gap-2">
                    <div
                      className="size-8 rounded-md border border-border/30 dark:border-white/10"
                      style={{ backgroundColor: color.dark }}
                    />
                    <div
                      className="size-8 rounded-md border border-border/30 dark:border-white/10"
                      style={{ backgroundColor: color.light }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {color.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Dark: <code className="kdx-code text-primary">{color.dark}</code> / Light:{' '}
                      <code className="kdx-code text-primary">{color.light}</code>
                    </p>
                  </div>
                  {color.glow && (
                    <Badge variant="destructive" className="text-[10px] shrink-0">
                      GLOW
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Typography */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="size-5 text-primary" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Heading / Brand Font
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    Space Mono Bold
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Used for titles, watermarks, and branding elements
                  </p>
                </div>
                <div className="h-px bg-border/50" />
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Body / UI Font
                  </p>
                  <p className="text-2xl font-semibold text-foreground">
                    Poppins Bold
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Used for subtitles, descriptions, and body text in thumbnails
                  </p>
                </div>
                <div className="h-px bg-border/50" />
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Terminal / Code Font
                  </p>
                  <p className="font-mono text-lg text-foreground">
                    Geist Mono / Fira Code
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Used for code blocks, terminal commands, and technical content
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Editing Style */}
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Film className="size-5 text-primary" />
                  Editing Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {editingStyles.map((style) => {
                    const Icon = style.icon
                    return (
                      <div
                        key={style.title}
                        className="rounded-lg border border-border/50 p-3 transition-colors hover:border-primary/30"
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <Icon className="size-4 text-primary" />
                          <p className="text-sm font-medium text-foreground">
                            {style.title}
                          </p>
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {style.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
