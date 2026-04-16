'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Terminal } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type MockupVariant = 'nmap' | 'metasploit' | 'burp'

const mockupData: Record<MockupVariant, { icon: typeof Shield; title: string; subtitle: string; tool: string }> = {
  nmap: {
    icon: Shield,
    title: 'NMAP MASTERY',
    subtitle: 'The ONLY Tutorial You Need',
    tool: 'Nmap',
  },
  metasploit: {
    icon: Terminal,
    title: 'METASPLOIT FIRST EXPLOIT',
    subtitle: 'From Zero to Shell Access',
    tool: 'Metasploit',
  },
  burp: {
    icon: Shield,
    title: 'BURP SUITE HACKING',
    subtitle: 'Intercept & Hack Web Apps',
    tool: 'Burp Suite',
  },
}

export function ThumbnailPreview() {
  const [variant, setVariant] = useState<MockupVariant>('nmap')
  const [hovered, setHovered] = useState(false)
  const data = mockupData[variant]
  const IconComponent = data.icon

  return (
    <Card className="mx-auto max-w-4xl overflow-hidden border-border bg-card">
      <CardContent className="p-6">
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground">Live Thumbnail Preview</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Interactive mockup following the HTB Red style guide
            </p>
          </div>
          <div className="flex gap-2">
            {(Object.keys(mockupData) as MockupVariant[]).map((key) => (
              <button
                key={key}
                onClick={() => setVariant(key)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  variant === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {mockupData[key].tool}
              </button>
            ))}
          </div>
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
            {/* Grid / hex pattern overlay */}
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
          <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8">
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
              className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-primary/50 bg-kdx-dark/80 backdrop-blur-sm sm:h-28 sm:w-28"
            >
              <IconComponent className="h-12 w-12 text-primary sm:h-14 sm:w-14" />
            </motion.div>

            {/* Title */}
            <motion.h2
              animate={{ scale: hovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
              className="kdx-glow-text text-center text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {data.title}
            </motion.h2>

            {/* Subtitle */}
            <p className="text-center text-sm font-medium tracking-wide text-gray-400 sm:text-lg">
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
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-bold tracking-widest text-white/30">
              KDX
            </span>
          </div>

          {/* Top-left "BLACKARCH ARSENAL" tag */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <div className="h-1.5 w-6 rounded-full bg-primary" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              BlackArch Arsenal
            </span>
          </div>

          {/* Duration badge */}
          <div className="absolute right-4 top-4 rounded bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white/70 backdrop-blur-sm">
            8:42
          </div>

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border-2 border-primary/30 rounded-xl pointer-events-none"
          />
        </motion.div>

        {/* Info section below mockup */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-foreground">
                Before &amp; After Preview
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              This thumbnail follows the HTB Red style guide above. Click the tool
              buttons to see different variations.
            </p>
          </div>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="font-mono text-foreground">1280</span>
              <span>width</span>
            </div>
            <div className="text-muted-foreground">x</div>
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
  )
}
