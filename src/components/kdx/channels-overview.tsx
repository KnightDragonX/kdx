'use client'

import {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
}

interface ChannelOverviewData {
  id: number
  name: string
  slug: string
  icon: string
  description: string
  focus: string
  rpm: string
  contentType: string
}

interface ChannelsOverviewProps {
  channels: ChannelOverviewData[]
}

export function ChannelsOverview({ channels }: ChannelsOverviewProps) {
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
            const Icon = iconMap[channel.icon] || Bot
            return (
              <Link
                key={channel.id}
                href={`/channels/${channel.slug}`}
                className="group block h-full focus-visible:outline-none"
              >
                <Card
                  className="kdx-card-hover group h-full border-border/50 bg-card"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
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
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      View Details
                      <ArrowRight className="size-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
