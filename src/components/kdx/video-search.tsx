'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getAllVideoPlans } from '@/lib/channels'

export function VideoSearch() {
  const [query, setQuery] = useState('')

  const allVideos = useMemo(() => getAllVideoPlans(), [])

  const filtered = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allVideos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.tools.toLowerCase().includes(q) ||
        v.keyLearning.toLowerCase().includes(q) ||
        v.channelName.toLowerCase().includes(q)
    )
  }, [query, allVideos])

  const uniqueChannels = useMemo(
    () => new Set(filtered.map((v) => v.channelName)),
    [filtered]
  )

  return (
    <section id="search" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <Badge variant="destructive" className="mb-4">
            SMART SEARCH
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Find <span className="kdx-gradient-text">Video Ideas</span> Fast
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Search across all 60 video plans by title, tool, or topic.
            Find the perfect idea for your next upload.
          </p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <label htmlFor="video-search-input" className="sr-only">
            Search video ideas
          </label>
          <input
            id="video-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search videos... try "Nmap", "AI", "CVE", "SQL", "SSH"'
            className="w-full rounded-lg border border-border bg-card py-3.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

      {query.trim() && (
        <p className="mb-6 text-sm text-muted-foreground">
          Found{' '}
          <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
          video{filtered.length !== 1 ? 's' : ''} across{' '}
          <span className="font-semibold text-foreground">
            {uniqueChannels.size}
          </span>{' '}
          channel{uniqueChannels.size !== 1 ? 's' : ''}
        </p>
      )}

      {filtered.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video) => (
            <div
              key={`${video.channelSlug}-${video.number}`}
              className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge
                  variant="destructive"
                  className="text-[11px] font-semibold uppercase tracking-wide"
                >
                  {video.channelName}
                </Badge>
                <span className="kdx-code text-xs text-muted-foreground">
                  #{String(video.number).padStart(2, '0')}
                </span>
              </div>
              <h4 className="mb-2 text-sm font-bold leading-snug text-foreground">
                {video.title}
              </h4>
              <div className="mb-2">
                <Badge
                  variant="outline"
                  className="text-[11px] font-normal"
                >
                  {video.tools}
                </Badge>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {video.keyLearning}
              </p>
            </div>
          ))}
        </div>
      )}

      {query.trim() && filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg font-semibold text-foreground">
            No videos found
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search term like &ldquo;Nmap&rdquo;,
            &ldquo;AI&rdquo;, or &ldquo;CVE&rdquo;
          </p>
        </div>
      )}
      </div>
    </section>
  )
}
