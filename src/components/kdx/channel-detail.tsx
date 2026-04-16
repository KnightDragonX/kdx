'use client'

import type { LucideIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface WorkflowStep {
  step: string
  tool: string
  action: string
}

export interface VideoPlan {
  number: number
  title: string
  tools: string
  keyLearning: string
}

export interface ChannelData {
  name: string
  icon: LucideIcon
  description: string
  workflow?: WorkflowStep[]
  videos: VideoPlan[]
  notes?: string
}

interface ChannelDetailProps {
  channel: ChannelData
}

export function ChannelDetail({ channel }: ChannelDetailProps) {
  const Icon = channel.icon

  return (
    <div className="space-y-6">
      {/* Channel Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {channel.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {channel.description}
            </p>
          </div>
        </div>
      </div>

      {/* Notes */}
      {channel.notes && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Note: </span>
            {channel.notes}
          </p>
        </div>
      )}

      {/* Workflow */}
      {channel.workflow && channel.workflow.length > 0 && (
        <Card className="border-border/50 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Video Workflow</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="w-[80px]">Step</TableHead>
                  <TableHead className="w-[140px]">Tool</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {channel.workflow.map((w, i) => (
                  <TableRow key={i} className="border-border/50">
                    <TableCell className="font-mono text-xs text-primary">
                      {w.step}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {w.tool}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {w.action}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Video Plans */}
      <Card className="border-border/50 bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Video Plans ({channel.videos.length} Videos)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-[500px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead className="min-w-[250px]">Title</TableHead>
                  <TableHead className="min-w-[140px]">Tools / Prompt</TableHead>
                  <TableHead className="min-w-[160px] hidden lg:table-cell">Key Learning</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {channel.videos.map((video) => (
                  <TableRow key={video.number} className="border-border/50">
                    <TableCell className="font-mono text-xs text-primary">
                      {String(video.number).padStart(2, '0')}
                    </TableCell>
                    <TableCell className="text-sm font-medium text-foreground">
                      {video.title}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs whitespace-normal">
                        {video.tools}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                      {video.keyLearning}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
