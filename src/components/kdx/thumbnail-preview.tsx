'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot, Shield, Flag, Newspaper, Wrench, Terminal,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type MockupVariant = 'ai-hackers' | 'blackarch' | 'ctf-solved' | 'cve-explained' | 'ai-builds' | 'arch-security'

interface MockupData {
  key: MockupVariant
  label: string
  icon: LucideIcon
  title: string
  subtitle: string
  channelTag: string
  duration: string
}

const mockups: MockupData[] = [
  {
    key: 'ai-hackers',
    label: 'AI for Hackers',
    icon: Bot,
    title: 'AI WROTE MY NMAP SCRIPT',
    subtitle: "Here's What Happened",
    channelTag: 'AI for Hackers',
    duration: '7:24',
  },
  {
    key: 'blackarch',
    label: 'BlackArch Arsenal',
    icon: Shield,
    title: 'NMAP ON BLACKARCH',
    subtitle: 'The ONLY Tutorial You Need',
    channelTag: 'BlackArch Arsenal',
    duration: '8:42',
  },
  {
    key: 'ctf-solved',
    label: 'CTF Solved',
    icon: Flag,
    title: 'OHSINT WALKTHROUGH',
    subtitle: 'OSINT for Beginners',
    channelTag: 'CTF Solved',
    duration: '9:15',
  },
  {
    key: 'cve-explained',
    label: 'CVE Explained',
    icon: Newspaper,
    title: 'CVE-2024-6387',
    subtitle: 'The Return of RegreSSHion',
    channelTag: 'CVE Explained',
    duration: '4:33',
  },
  {
    key: 'ai-builds',
    label: 'AI Builds',
    icon: Wrench,
    title: 'I BUILT A TO-DO APP',
    subtitle: 'In 10 Minutes Using ONLY AI',
    channelTag: 'AI Builds',
    duration: '6:18',
  },
  {
    key: 'arch-security',
    label: 'Arch Security Lab',
    icon: Terminal,
    title: 'KERNEL HARDENING',
    subtitle: 'sysctl Security Tweaks',
    channelTag: 'Arch Security Lab',
    duration: '6:55',
  },
]

export function ThumbnailPreview() {
  const [variant, setVariant] = useState<MockupVariant>('blackarch')
  const [hovered, setHovered] = useState(false)
  const data = mockups.find((m) => m.key === variant) || mockups[1]
  const IconComponent = data.icon

  return (
    <section id="preview" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
            LIVE PREVIEW
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Thumbnail <span className="kdx-gradient-text">Mockup</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Interactive thumbnail preview following the HTB Red style guide.
            Click each channel to see a different variation.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl overflow-hidden border-border bg-card">
          <CardContent className="p-6">
            {/* Channel Selector */}
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {mockups.map((m) => {
                const MIcon = m.icon
                return (
                  <button
                    key={m.key}
                    onClick={() => setVariant(m.key)}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                      variant === m.key
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                        : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                    }`}
                    aria-label={`View ${m.label} thumbnail`}
                  >
                    <MIcon className="size-3.5" />
                    <span className="hidden sm:inline">{m.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Thumbnail Mockup */}
            <motion.div
              key={variant}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative mx-auto cursor-pointer overflow-hidden rounded-xl"
              style={{ aspectRatio: '16 / 9' }}
            >
              {/* Base background */}
              <div className="absolute inset-0 bg-[#0A0A0A]">
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,42,42,0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,42,42,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,42,42,0.15)_0%,transparent_70%)]" />
                {/* Diagonal accent lines */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 30px,
                      rgba(255,42,42,0.5) 30px,
                      rgba(255,42,42,0.5) 31px
                    )`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center gap-3 px-8 sm:gap-4">
                {/* Icon with glow ring */}
                <motion.div
                  animate={{
                    boxShadow: hovered
                      ? '0 0 40px rgba(255,42,42,0.6), 0 0 80px rgba(255,42,42,0.2), inset 0 0 20px rgba(255,42,42,0.1)'
                      : '0 0 20px rgba(255,42,42,0.4), 0 0 40px rgba(255,42,42,0.1)',
                    borderColor: hovered
                      ? 'rgba(255,42,42,0.8)'
                      : 'rgba(255,42,42,0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex size-16 items-center justify-center rounded-xl border-2 border-primary/50 bg-kdx-dark/80 backdrop-blur-sm sm:size-24 sm:rounded-2xl"
                >
                  <IconComponent className="size-8 text-primary sm:size-12" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  animate={{ scale: hovered ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="kdx-glow-text text-center text-xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
                >
                  {data.title}
                </motion.h2>

                {/* Subtitle */}
                <p className="text-center text-xs font-medium tracking-wide text-gray-400 sm:text-base lg:text-lg">
                  {data.subtitle}
                </p>
              </div>

              {/* Red accent bar at bottom */}
              <motion.div
                animate={{ scaleY: hovered ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1.5 origin-bottom bg-[#FF2A2A]"
                style={{
                  boxShadow: hovered
                    ? '0 -4px 30px rgba(255,42,42,0.5)'
                    : '0 -2px 15px rgba(255,42,42,0.3)',
                }}
              />

              {/* KDX watermark */}
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
                <div className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold tracking-widest text-white/30">
                  KDX
                </span>
              </div>

              {/* Top-left channel tag */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <div className="h-1.5 w-6 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                  {data.channelTag}
                </span>
              </div>

              {/* Duration badge */}
              <div className="absolute right-4 top-4 rounded bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white/70 backdrop-blur-sm">
                {data.duration}
              </div>

              {/* Hover overlay */}
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 rounded-xl border-2 border-primary/30"
              />
            </motion.div>

            {/* Info section below mockup */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-foreground">
                    Before &amp; After Preview
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  This thumbnail follows the HTB Red style guide. Click the channel
                  buttons to see different variations for all 6 channels.
                </p>
              </div>
              <div className="flex gap-3 text-xs text-muted-foreground">
                <div className="flex flex-col items-center">
                  <span className="font-mono text-foreground">1280</span>
                  <span>width</span>
                </div>
                <div className="text-muted-foreground">×</div>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-foreground">720</span>
                  <span>height</span>
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <span className="font-mono text-foreground">16:9</span>
                  <span>ratio</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
