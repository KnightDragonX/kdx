'use client'

import { useState } from 'react'
import { Github, Twitter, Youtube, Mail, Zap } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const sectionLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Brand Guide', href: '#brand' },
  { label: 'Thumbnail Guide', href: '#thumbnail' },
  { label: 'Channels', href: '#channels' },
  { label: 'Tools', href: '#tools' },
  { label: 'Summary', href: '#summary' },
]

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="mt-auto border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="Dragon">
                🐉
              </span>
              <span className="text-lg font-bold kdx-gradient-text">
                Knight Dragon X
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Complete blueprint for building viral cybersecurity YouTube
              channels. 6 niche channels, 60 video plans, 100% free tools.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for the hacking community
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get CTF Tips
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Join the newsletter for exclusive cybersecurity tips, tool reviews, and early video releases.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 p-3">
                <Zap className="size-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">
                  You&apos;re in! Welcome aboard.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hacker@example.com"
                  required
                  className="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-9 shrink-0 kdx-glow"
                >
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Knight Dragon X. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="font-mono kdx-code text-primary/60">
              $ echo &quot;Stay curious. Stay dangerous.&quot;
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
