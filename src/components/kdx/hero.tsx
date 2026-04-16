'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const terminalText = '> initializing_knight_dragon_x_'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < terminalText.length) {
        setDisplayText(terminalText.slice(0, indexRef.current + 1))
        indexRef.current++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const scrollToChannels = () => {
    const el = document.querySelector('#channels')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 kdx-grid-bg">
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,42,42,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Terminal cursor effect */}
        <div className="mb-8 font-mono text-sm text-muted-foreground">
          <span className="kdx-code">{displayText}</span>
          {showCursor && <span className="kdx-cursor text-primary">▋</span>}
        </div>

        {/* Main Title */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="kdx-gradient-text kdx-glow-text">Knight Dragon X</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-2xl text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl">
          Complete Blueprint for Viral Cybersecurity YouTube Channels
        </p>

        {/* Tagline */}
        <p className="mb-10 text-base text-muted-foreground sm:text-lg">
          6 Niche Channels &bull; 60 Video Plans &bull; 100% Free Tools
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToChannels}
          size="lg"
          className="kdx-glow rounded-full px-8 py-6 text-base font-semibold"
        >
          Explore the Blueprint
          <ChevronDown className="ml-1 size-5" />
        </Button>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
