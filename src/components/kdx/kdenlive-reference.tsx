'use client'

import { Film } from 'lucide-react'
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

interface KdenliveTask {
  task: string
  shortcut: string
  notes: string
}

const kdenliveTasks: KdenliveTask[] = [
  { task: 'Import Media', shortcut: 'Ctrl + I', notes: 'Add video, audio, and image files to the project bin' },
  { task: 'Razor / Cut Clip', shortcut: 'Ctrl + B', notes: 'Split a clip at the playhead position' },
  { task: 'Delete Clip', shortcut: 'Delete', notes: 'Remove selected clip from the timeline' },
  { task: 'Add Transition', shortcut: 'Drag from Effects panel', notes: 'Apply fade, dissolve, or glitch transitions' },
  { task: 'Add Title', shortcut: 'Ctrl + T', notes: 'Create text overlays and lower thirds' },
  { task: 'Export Video', shortcut: 'Ctrl + Enter', notes: 'Render project using H.264/AAC for YouTube' },
  { task: 'Undo / Redo', shortcut: 'Ctrl + Z / Ctrl + Shift + Z', notes: 'Step backward/forward in edit history' },
  { task: 'Snap to Grid', shortcut: 'S', notes: 'Toggle clip snapping for precise alignment' },
  { task: 'Group Clips', shortcut: 'Ctrl + G', notes: 'Group multiple clips to move them together' },
  { task: 'Zoom Timeline', shortcut: 'Ctrl + Mouse Wheel', notes: 'Zoom in/out on the timeline for precision editing' },
  { task: 'Speed Up / Slow Down', shortcut: 'Right-click → Change Speed', notes: 'Adjust clip playback speed (0.1x to 10x)' },
  { task: 'Add Audio Track', shortcut: 'Click "+" on timeline header', notes: 'Add additional audio tracks for narration and music' },
  { task: 'Keyframe Animation', shortcut: 'Click diamond icon on clip', notes: 'Animate opacity, position, and scale over time' },
  { task: 'Crop / Transform', shortcut: 'Shift + Click clip', notes: 'Adjust clip size, position, and rotation' },
  { task: 'Noise Reduction', shortcut: 'Effects → Audio → Normalize', notes: 'Reduce background noise from narration recordings' },
]

export function KdenliveReference() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            QUICK REFERENCE
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Kdenlive{' '}
            <span className="kdx-gradient-text">Cheat Sheet</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Essential shortcuts and tasks for editing cybersecurity content with
            Kdenlive — the free, open-source video editor.
          </p>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Film className="size-5 text-primary" />
              Common Editing Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[600px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="w-[180px]">Task</TableHead>
                    <TableHead className="w-[220px]">Shortcut / Method</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kdenliveTasks.map((item, i) => (
                    <TableRow key={i} className="border-border/50">
                      <TableCell className="font-medium text-foreground">
                        {item.task}
                      </TableCell>
                      <TableCell>
                        <code className="rounded bg-secondary px-1.5 py-0.5 text-xs kdx-code text-primary">
                          {item.shortcut}
                        </code>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {item.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
