import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
  ArrowLeft,
  type LucideIcon,
} from 'lucide-react'
import { Navbar } from '@/components/kdx/navbar'
import { Footer } from '@/components/kdx/footer'
import { BackToTop } from '@/components/kdx/back-to-top'
import { ChannelDetail, type ChannelData } from '@/components/kdx/channel-detail'
import { channelsDetail } from '@/lib/channels'
import { Button } from '@/components/ui/button'
import { ScriptGenerator } from '@/components/kdx/script-generator'

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
}

export async function generateStaticParams() {
  return channelsDetail.map((channel) => ({
    slug: channel.slug,
  }))
}

interface ChannelPageProps {
  params: Promise<{ slug: string }>
}

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { slug } = await params
  const detail = channelsDetail.find((c) => c.slug === slug)

  if (!detail) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="gap-2 text-muted-foreground hover:text-primary">
              <Link href="/#channels">
                <ArrowLeft className="size-4" />
                Back to Blueprint
              </Link>
            </Button>
          </div>

          <div className="space-y-12">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 md:p-8">
              <ChannelDetail channel={detail} />
            </div>
            
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
              <div className="mb-6 text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-tight">
                  AI <span className="kdx-gradient-text">Script Assistant</span>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Select a video from the blueprint above to generate a high-converting script using Large Language Models.
                </p>
              </div>
              <ScriptGenerator channelSlug={slug} videos={detail.videos} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
