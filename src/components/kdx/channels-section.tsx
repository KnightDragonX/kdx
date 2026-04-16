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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ChannelDetail, type ChannelData } from './channel-detail'

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
}

interface ChannelsSectionProps {
  channels: any[]
}

export function ChannelsSection({ channels }: ChannelsSectionProps) {
  // Map string icon names to actual Lucide components
  const mappedData: ChannelData[] = channels.map((detail) => ({
    ...detail,
    icon: iconMap[detail.icon] || Bot,
    workflow: typeof detail.workflow === 'string' ? JSON.parse(detail.workflow) : detail.workflow,
  }))

  return (
    <section id="channels" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            FULL BLUEPRINT
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Channel <span className="kdx-gradient-text">Deep Dives</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Complete workflows, video plans, and production details for every
            channel. Click each tab to explore.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ai-for-hackers" className="w-full">
          <div className="mb-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <TabsList className="inline-flex w-max gap-1">
              {mappedData.map((channel) => {
                const Icon = iconMap[channel.icon] || Bot
                return (
                  <TabsTrigger
                    key={channel.slug}
                    value={channel.slug}
                    className="gap-1.5 text-xs sm:text-sm"
                    aria-label={`View ${channel.name} channel details`}
                  >
                    <Icon className="size-3.5 sm:size-4" aria-hidden="true" />
                    <span className="hidden sm:inline">{channel.name}</span>
                    <span className="sm:hidden">{channel.name.split(' ')[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {mappedData.map((channel) => (
            <TabsContent
              key={channel.slug}
              value={channel.slug}
            >
              <ChannelDetail channel={channel} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
