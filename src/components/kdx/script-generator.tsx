'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Video {
  number: number
  title: string
}

interface ScriptGeneratorProps {
  channelSlug: string
  videos: Video[]
}

export function ScriptGenerator({ channelSlug, videos }: ScriptGeneratorProps) {
  const [selectedVideo, setSelectedVideo] = useState<string>('')
  const [script, setScript] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateScript = async () => {
    if (!selectedVideo) return

    setLoading(true)
    setScript('')
    try {
      const response = await fetch('/api/ai/script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ channelSlug, videoNumber: selectedVideo }),
      })

      const data = await response.json()
      if (data.success) {
        setScript(data.script)
      }
    } catch (error) {
      console.error('Error generating script:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(script)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1 space-y-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Select Video Plan
          </label>
          <Select onValueChange={setSelectedVideo} value={selectedVideo}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Choose a video..." />
            </SelectTrigger>
            <SelectContent>
              {videos.map((v) => (
                <SelectItem key={v.number} value={v.number.toString()}>
                  #{String(v.number).padStart(2, '0')} - {v.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={generateScript}
          disabled={!selectedVideo || loading}
          className="gap-2 kdx-glow"
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Sparkles className="size-4" />
          )}
          Generate Script
        </Button>
      </div>

      {script && (
        <div className="relative animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="absolute right-4 top-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              className="size-8 bg-background/50 backdrop-blur"
            >
              {copied ? (
                <Check className="size-4 text-green-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </Button>
          </div>
          <div className="prose prose-invert max-w-none rounded-lg border border-primary/20 bg-background/50 p-6 text-sm leading-relaxed text-muted-foreground">
            <ReactMarkdown>
              {script}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}
