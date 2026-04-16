'use client'

import {
  Camera,
  Mic,
  TerminalSquare,
  Lightbulb,
  Sparkles,
  CircleCheck,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { LucideIcon } from 'lucide-react'

interface RecordingTip {
  label: string
  description: string
}

interface RecordingCard {
  title: string
  icon: LucideIcon
  tips: RecordingTip[]
}

const recordingCards: RecordingCard[] = [
  {
    title: 'OBS Studio Setup',
    icon: Camera,
    tips: [
      {
        label: 'Scene Setup',
        description:
          'Create a scene with Window Capture or Display Capture for your recording target.',
      },
      {
        label: 'System Audio',
        description:
          'Mute system audio — voiceover is recorded separately and synced in post.',
      },
      {
        label: 'Resolution',
        description:
          'Set output to 1080p at 30fps. Confirm in Settings → Video → Output (Scaled) Resolution.',
      },
      {
        label: 'Font Size',
        description:
          'Zoom in your terminal font so it\'s easily readable on mobile devices.',
      },
      {
        label: 'Window Decorations',
        description:
          'Hide the title bar and window borders for a cleaner, more professional look.',
      },
      {
        label: 'Recording Format',
        description:
          'Use MKV format (auto-remux to MP4) to prevent file corruption if OBS crashes.',
      },
    ],
  },
  {
    title: 'Voice Recording',
    icon: Mic,
    tips: [
      {
        label: 'Hardware',
        description:
          'Use your phone\'s voice recorder app — modern phone mics are surprisingly good.',
      },
      {
        label: 'Language & Accent',
        description:
          'Record your script in Sinhala-accent English. Own your accent — it\'s part of the brand.',
      },
      {
        label: 'Processing Pipeline',
        description:
          'Import into Audacity → Noise Reduction → Normalize → Export as WAV.',
      },
      {
        label: 'Pacing',
        description:
          'Keep your pace slow and clear. Pauses between sentences help viewers follow along.',
      },
      {
        label: 'Multiple Takes',
        description:
          'Don\'t settle for one take. Record 2–3 versions and pick the best segments.',
      },
      {
        label: 'Acoustic Tip',
        description:
          'Record in a closet or blanket fort for natural acoustic dampening — no echo.',
      },
    ],
  },
  {
    title: 'Terminal Capture Tips',
    icon: TerminalSquare,
    tips: [
      {
        label: 'Window Capture',
        description:
          'Use Window Capture (not Display Capture) to isolate the terminal window precisely.',
      },
      {
        label: 'Font Size',
        description:
          'Zoom the terminal font to 16–18pt. Viewers on phones need to read every character.',
      },
      {
        label: 'Color Scheme',
        description:
          'Use a black background with green or red text for high contrast and the hacker aesthetic.',
      },
      {
        label: 'Hide Decorations',
        description:
          'Remove window title bars and borders for a clean, full-screen terminal look.',
      },
      {
        label: 'Test Recording',
        description:
          'Always record a 10-second test clip and review it before starting the full session.',
      },
      {
        label: 'Consistent Width',
        description:
          'Set your terminal width once and never resize mid-recording — it causes visual jumps.',
      },
    ],
  },
]

const bonusTips: string[] = [
  'Always test both audio and video together for 10 seconds before starting the real recording.',
  'Record 2–3 seconds of silence at the start and end of every clip — makes trimming much easier.',
  'Close all unnecessary apps to free up CPU and RAM. OBS needs resources to encode smoothly.',
  'Disable all notifications (OS, browser, messaging apps) before hitting record.',
  'Keep a glass of water nearby. Hydration prevents mouth clicks and voice cracks during long sessions.',
]

export function RecordingSetup() {
  return (
    <section id="recording-setup" className="py-16 md:py-24" aria-labelledby="recording-setup-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            PRODUCTION GUIDE
          </Badge>
          <h2
            id="recording-setup-heading"
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Recording <span className="kdx-gradient-text">Setup</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Detailed tips for recording high-quality faceless cybersecurity
            content — from screen capture to professional voiceover.
          </p>
        </div>

        {/* Recording Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {recordingCards.map((card) => {
            const CardIcon = card.icon
            return (
              <Card
                key={card.title}
                className="border-border/50 bg-card kdx-card-hover"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CardIcon className="size-5 text-primary" />
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" role="list" aria-label={`${card.title} tips`}>
                    {card.tips.map((tip) => (
                      <li key={tip.label} className="flex items-start gap-3">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {tip.label}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {tip.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bonus Tips Card */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="size-5 text-primary" aria-hidden="true" />
              Bonus Tips
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Bonus recording tips">
              {bonusTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2" role="listitem">
                  <Sparkles className="mt-0.5 size-3 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
