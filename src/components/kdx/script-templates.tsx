'use client'

import { Shield, Bot, Flag, Newspaper, Lightbulb, type LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ScriptPhase {
  timestamp: string
  phase: string
  description: string
}

interface ScriptTemplate {
  id: string
  label: string
  icon: LucideIcon
  channels: string
  phases: ScriptPhase[]
  proTip: string
  totalDuration: string
}

const templates: ScriptTemplate[] = [
  {
    id: 'tool-tutorial',
    label: 'Tool Tutorial',
    icon: Shield,
    channels: 'BlackArch Arsenal / Arch Security Lab',
    totalDuration: '~6:30',
    phases: [
      {
        timestamp: '[0:00-0:20]',
        phase: 'HOOK',
        description:
          '"[TOOL] is essential for [PURPOSE]. Today you\'ll master it in under 10 minutes."',
      },
      {
        timestamp: '[0:20-1:00]',
        phase: 'INSTALL',
        description: 'Show installation command. Explain what it does.',
      },
      {
        timestamp: '[1:00-3:00]',
        phase: 'BASIC USAGE',
        description: 'Run the most common command. Explain output.',
      },
      {
        timestamp: '[3:00-5:30]',
        phase: 'ADVANCED DEMO',
        description: 'Real-world scenario. Show practical use case.',
      },
      {
        timestamp: '[5:30-6:00]',
        phase: 'ETHICAL NOTE',
        description: '"Always get permission before testing."',
      },
      {
        timestamp: '[6:00-6:30]',
        phase: 'OUTRO',
        description:
          'Like, Subscribe. "Next time we explore [NEXT TOOL]."',
      },
    ],
    proTip:
      'Record the tool demo in a clean terminal with a dark theme. Zoom in on important output lines during editing to keep viewers focused.',
  },
  {
    id: 'ai-demo',
    label: 'AI Demo',
    icon: Bot,
    channels: 'AI for Hackers / AI Builds',
    totalDuration: '~6:00',
    phases: [
      {
        timestamp: '[0:00-0:20]',
        phase: 'HOOK',
        description:
          '"You don\'t need to be a developer to [DO THING]. Today we use AI to [BUILD/DO]."',
      },
      {
        timestamp: '[0:20-2:00]',
        phase: 'PROMPT',
        description: 'Show exact AI prompt. Scroll through generated response.',
      },
      {
        timestamp: '[2:00-4:00]',
        phase: 'TEST',
        description: 'Copy code to terminal/browser. Run it. Show live result.',
      },
      {
        timestamp: '[4:00-5:00]',
        phase: 'DEBUG',
        description:
          'If errors, show how to ask AI to fix. "The AI just fixed it."',
      },
      {
        timestamp: '[5:00-5:30]',
        phase: 'RESULT',
        description: 'Show working app/tool. Brief summary.',
      },
      {
        timestamp: '[5:30-6:00]',
        phase: 'OUTRO',
        description: 'Subscribe. Full code in description.',
      },
    ],
    proTip:
      'Keep the AI prompt visible on screen for at least 5 seconds so viewers can screenshot it. Highlight changes when you paste generated code into the editor.',
  },
  {
    id: 'ctf-walkthrough',
    label: 'CTF Walkthrough',
    icon: Flag,
    channels: 'CTF Solved',
    totalDuration: '~8:30',
    phases: [
      {
        timestamp: '[0:00-0:20]',
        phase: 'HOOK',
        description:
          '"Welcome back to CTF Solved. Today we conquer [ROOM NAME]."',
      },
      {
        timestamp: '[0:00-0:05]',
        phase: 'SPOILER WARNING',
        description: '"Try this room yourself first!"',
      },
      {
        timestamp: '[0:20-2:00]',
        phase: 'ENUMERATION',
        description: 'Port scan, service detection, directory busting.',
      },
      {
        timestamp: '[2:00-5:00]',
        phase: 'EXPLOITATION',
        description:
          'Found vulnerability → exploit → initial access.',
      },
      {
        timestamp: '[5:00-7:00]',
        phase: 'PRIVILEGE ESCALATION',
        description: 'User → root. Explain technique used.',
      },
      {
        timestamp: '[7:00-8:00]',
        phase: 'FLAGS',
        description:
          'Capture user.txt and root.txt. Summary of lessons learned.',
      },
      {
        timestamp: '[8:00-8:30]',
        phase: 'OUTRO',
        description: 'Like, Subscribe. "Next room preview."',
      },
    ],
    proTip:
      'Use time-lapse for long scans. Speed up repetitive tasks (like LinPEAS output) to 2x-4x and narrate over them. Viewers hate watching terminal scroll for minutes.',
  },
  {
    id: 'cve-explanation',
    label: 'CVE Explanation',
    icon: Newspaper,
    channels: 'CVE Explained',
    totalDuration: '~4:15',
    phases: [
      {
        timestamp: '[0:00-0:15]',
        phase: 'HOOK',
        description: '"Welcome to CVE Explained. Today: CVE-XXXX-XXXXX."',
      },
      {
        timestamp: '[0:15-1:00]',
        phase: 'WHAT IS IT',
        description:
          'Explain vulnerability in plain English. Who made the software?',
      },
      {
        timestamp: '[1:00-2:00]',
        phase: 'HOW IT WORKS',
        description: 'Technical explanation simplified. Visual diagrams.',
      },
      {
        timestamp: '[2:00-3:00]',
        phase: 'IMPACT',
        description:
          'CVSS score, affected systems, potential damage.',
      },
      {
        timestamp: '[3:00-4:00]',
        phase: 'HOW TO PROTECT',
        description: 'Patch version, workaround steps.',
      },
      {
        timestamp: '[4:00-4:15]',
        phase: 'OUTRO',
        description: '"Stay secure. Subscribe for daily CVE breakdowns."',
      },
    ],
    proTip:
      'Use simple diagrams (drawn on screen or animated) to explain complex vulnerabilities. A visual of the attack flow gets 3x more engagement than text-only explanations.',
  },
]

export function ScriptTemplates() {
  return (
    <section id="script-templates" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            SCRIPT LIBRARY
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Video Script{' '}
            <span className="kdx-gradient-text">Templates</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Copy these proven script structures for any channel.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="tool-tutorial" className="w-full">
          <div className="mb-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <TabsList className="inline-flex w-max gap-1">
              {templates.map((template) => {
                const Icon = template.icon
                return (
                  <TabsTrigger
                    key={template.id}
                    value={template.id}
                    className="gap-1.5 text-xs sm:text-sm"
                    aria-label={`View ${template.label} script template`}
                  >
                    <Icon
                      className="size-3.5 sm:size-4"
                      aria-hidden="true"
                    />
                    <span>{template.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {templates.map((template) => {
            const Icon = template.icon
            return (
              <TabsContent key={template.id} value={template.id}>
                <Card className="kdx-card-hover border-border/50 bg-card">
                  <CardContent className="space-y-6 p-4 sm:p-6">
                    {/* Template Meta */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 rounded-lg border border-border/50 px-3 py-1.5">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-foreground">
                          {template.label}
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-mono"
                      >
                        {template.totalDuration}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        for{' '}
                        <span className="font-medium text-foreground">
                          {template.channels}
                        </span>
                      </span>
                    </div>

                    {/* Phase List */}
                    <div className="space-y-1">
                      {template.phases.map((phase, index) => (
                        <div
                          key={index}
                          className="group flex flex-col gap-1 rounded-lg border border-border/30 p-3 transition-colors hover:border-primary/20 hover:bg-primary/[0.02] sm:flex-row sm:items-start sm:gap-4"
                        >
                          {/* Timestamp */}
                          <code
                            className="kdx-code shrink-0 text-xs font-bold text-primary sm:w-28"
                          >
                            {phase.timestamp}
                          </code>

                          {/* Phase + Description */}
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-foreground">
                              {phase.phase}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pro Tip */}
                    <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Lightbulb
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Pro Tip
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {template.proTip}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
