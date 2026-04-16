'use client'

import {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ChannelCard {
  id: number
  name: string
  icon: LucideIcon
  description: string
  focus: string
  rpm: string
  contentType: string
}

const channels: ChannelCard[] = [
  {
    id: 1,
    name: 'AI for Hackers',
    icon: Bot,
    description:
      'Exploring how free AI chat tools can assist in ethical hacking.',
    focus: 'AI Prompts + Hacking',
    rpm: '$9-$25 RPM',
    contentType: 'Screen Only',
  },
  {
    id: 2,
    name: 'BlackArch Arsenal',
    icon: Shield,
    description: 'Master the 2,800+ tools inside BlackArch Linux.',
    focus: 'Tool Tutorials',
    rpm: '$9-$28 RPM',
    contentType: 'Terminal',
  },
  {
    id: 3,
    name: 'CTF Solved',
    icon: Flag,
    description:
      'Step-by-step walkthroughs of TryHackMe rooms and HackTheBox machines.',
    focus: 'Room Solutions',
    rpm: '$7-$18 RPM',
    contentType: 'Screen Record',
  },
  {
    id: 4,
    name: 'CVE Explained',
    icon: Newspaper,
    description: 'Daily breakdowns of critical newly discovered vulnerabilities.',
    focus: 'News/Education',
    rpm: '$5-$14 RPM',
    contentType: 'Stock Footage',
  },
  {
    id: 5,
    name: 'AI Builds',
    icon: Wrench,
    description: 'Building real apps and automations using ONLY free AI chat.',
    focus: 'Project Builds',
    rpm: '$6-$18 RPM',
    contentType: 'Screen Record',
  },
  {
    id: 6,
    name: 'Arch Security Lab',
    icon: Terminal,
    description:
      'Turn your Arch-based system into a professional pentest environment.',
    focus: 'Security Config',
    rpm: '$5-$14 RPM',
    contentType: 'Terminal',
  },
]

export function ChannelsOverview() {
  return (
    <section id="overview" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            6 CHANNELS
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The <span className="kdx-gradient-text">Knight Dragon X</span> Network
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Six interconnected YouTube channels covering every angle of
            cybersecurity content — from AI-powered hacking to hands-on
            BlackArch tutorials.
          </p>
        </div>

        {/* Channel Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <Card
                key={channel.id}
                className="kdx-card-hover group border-border/50 bg-card"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {channel.name}
                        </h3>
                      </div>
                    </div>
                    <Badge
                      variant="destructive"
                      className="text-[10px] font-bold"
                    >
                      #{String(channel.id).padStart(2, '0')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {channel.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {channel.focus}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {channel.rpm}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {channel.contentType}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
