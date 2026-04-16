'use client'

import { Navbar } from '@/components/kdx/navbar'
import { Hero } from '@/components/kdx/hero'
import { ChannelsOverview } from '@/components/kdx/channels-overview'
import { BrandGuidelines } from '@/components/kdx/brand-guidelines'
import { ThumbnailGuide } from '@/components/kdx/thumbnail-guide'
import { ThumbnailPreview } from '@/components/kdx/thumbnail-preview'
import { VideoSearch } from '@/components/kdx/video-search'
import { ChannelsSection } from '@/components/kdx/channels-section'
import { ScriptTemplates } from '@/components/kdx/script-templates'
import { RecordingSetup } from '@/components/kdx/recording-setup'
import { StockFootage } from '@/components/kdx/stock-footage'
import { ToolsSection } from '@/components/kdx/tools-section'
import { KdenliveReference } from '@/components/kdx/kdenlive-reference'
import { SummarySection } from '@/components/kdx/summary-section'
import { Footer } from '@/components/kdx/footer'
import { BackToTop } from '@/components/kdx/back-to-top'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <ChannelsOverview />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <BrandGuidelines />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <ThumbnailGuide />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <ThumbnailPreview />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <VideoSearch />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <ChannelsSection />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <ScriptTemplates />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <RecordingSetup />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <StockFootage />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <ToolsSection />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <KdenliveReference />
        <Separator className="mx-auto max-w-7xl opacity-20" />
        <SummarySection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
