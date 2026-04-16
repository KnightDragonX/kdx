'use client'

import { Table2 } from 'lucide-react'
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

interface SummaryRow {
  channel: string
  primaryVisual: string
  recordingFocus: string
  bRollNeeded: string
  videoLength: string
}

const summaryData: SummaryRow[] = [
  {
    channel: 'AI for Hackers',
    primaryVisual: 'AI Chat Screen',
    recordingFocus: 'Prompt → Response → Terminal Test',
    bRollNeeded: 'Light cybersecurity (Pexels/Pixabay)',
    videoLength: '5-8 min',
  },
  {
    channel: 'BlackArch Arsenal',
    primaryVisual: 'Terminal',
    recordingFocus: 'Commands + Output (tool demo)',
    bRollNeeded: 'Minimal',
    videoLength: '6-10 min',
  },
  {
    channel: 'CTF Solved',
    primaryVisual: 'Full Desktop',
    recordingFocus: 'Walkthrough (Enum → Exploit → Privesc → Flag)',
    bRollNeeded: 'None',
    videoLength: '8-15 min',
  },
  {
    channel: 'CVE Explained',
    primaryVisual: 'Stock Footage',
    recordingFocus: 'Voiceover + Diagrams + Graphics',
    bRollNeeded: 'Heavy (Pexels/Pixabay/Mixkit)',
    videoLength: '3-5 min',
  },
  {
    channel: 'AI Builds',
    primaryVisual: 'AI Chat + Browser',
    recordingFocus: 'Code generation + Live testing',
    bRollNeeded: 'Minimal',
    videoLength: '6-10 min',
  },
  {
    channel: 'Arch Security Lab',
    primaryVisual: 'Terminal',
    recordingFocus: 'Commands + Config + Verification',
    bRollNeeded: 'None',
    videoLength: '5-8 min',
  },
]

export function SummarySection() {
  return (
    <section id="summary" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            AT A GLANCE
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Complete <span className="kdx-gradient-text">Summary</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Quick reference for all 6 channels — visual style, recording focus,
            B-roll requirements, and recommended video lengths.
          </p>
        </div>

        <Card className="border-border/50 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Table2 className="size-5 text-primary" />
              Channel Summary Table
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="w-[160px]">Channel Name</TableHead>
                    <TableHead className="w-[200px]">Primary Visual</TableHead>
                    <TableHead>Recording Focus</TableHead>
                    <TableHead className="w-[180px]">B-Roll Needed</TableHead>
                    <TableHead className="w-[100px]">Video Length</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summaryData.map((row) => (
                    <TableRow key={row.channel} className="border-border/50">
                      <TableCell className="font-medium text-foreground">
                        {row.channel}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {row.primaryVisual}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {row.recordingFocus}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {row.bRollNeeded}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {row.videoLength}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 p-4 md:hidden">
              {summaryData.map((row) => (
                <div
                  key={row.channel}
                  className="rounded-lg border border-border/50 p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">
                      {row.channel}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {row.videoLength}
                    </Badge>
                  </div>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground/70">Visual: </span>
                      {row.primaryVisual}
                    </p>
                    <p>
                      <span className="font-medium text-foreground/70">Focus: </span>
                      {row.recordingFocus}
                    </p>
                    <p>
                      <span className="font-medium text-foreground/70">B-Roll: </span>
                      {row.bRollNeeded}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
