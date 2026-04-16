'use client'

import {
  Bot,
  Shield,
  Flag,
  Newspaper,
  Wrench,
  Terminal,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ChannelDetail, type ChannelData } from './channel-detail'

const channelsData: ChannelData[] = [
  {
    name: 'AI for Hackers',
    icon: Bot,
    description: 'Exploring how free AI chat tools can assist in ethical hacking.',
    workflow: [
      { step: '1', tool: 'DeepSeek', action: 'Script & plan the video with AI chat' },
      { step: '2', tool: 'Phone', action: 'Voice record narration' },
      { step: '3', tool: 'OBS', action: 'Screen record demonstration' },
      { step: '4', tool: 'Pexels', action: 'Add B-roll footage' },
      { step: '5', tool: 'Kdenlive', action: 'Edit & composite' },
      { step: '6', tool: 'Kdenlive', action: 'Export final video' },
    ],
    videos: [
      { number: 1, title: 'I Asked AI to Write an Nmap Script – Here\'s What Happened', tools: 'AI Chat, Python, Nmap', keyLearning: 'AI-assisted scripting with Nmap' },
      { number: 2, title: 'AI Explained This CVE in 60 Seconds', tools: 'AI Chat, Terminal', keyLearning: 'Rapid CVE explanation via AI' },
      { number: 3, title: 'Can AI Write a Keylogger? (Ethical Hacking Use Only)', tools: 'AI Chat, Python', keyLearning: 'AI code generation ethics' },
      { number: 4, title: 'AI Helped Me Solve a TryHackMe Room in 10 Minutes', tools: 'AI Chat, TryHackMe', keyLearning: 'AI-guided CTF solving' },
      { number: 5, title: 'Generate Metasploit Commands with AI (Zero Memorization)', tools: 'AI Chat, Metasploit', keyLearning: 'AI for framework mastery' },
      { number: 6, title: 'AI Log Analysis: Find the Hacker in 5 Minutes', tools: 'AI Chat, Log Files', keyLearning: 'Automated log analysis' },
      { number: 7, title: 'Build a Port Scanner with AI (No Coding Experience)', tools: 'AI Chat, Bash', keyLearning: 'AI-assisted tool building' },
      { number: 8, title: 'AI Wrote My Reverse Shell – Let\'s Test It (In My Lab)', tools: 'AI Chat, Python, Netcat', keyLearning: 'AI & reverse engineering' },
      { number: 9, title: 'Deep Dive: AI Explains the MITRE ATT&CK Framework', tools: 'AI Chat, Linux', keyLearning: 'MITRE ATT&CK via AI' },
      { number: 10, title: 'AI vs. Hacker: Can AI Spot a Phishing Email?', tools: 'AI Chat, Email Analysis', keyLearning: 'AI-powered phishing detection' },
    ],
  },
  {
    name: 'BlackArch Arsenal',
    icon: Shield,
    description: 'Master the 2,800+ tools inside BlackArch Linux.',
    workflow: [
      { step: '1', tool: 'Research', action: 'Tool selection & documentation review' },
      { step: '2', tool: 'Editor', action: 'Script the tutorial steps' },
      { step: '3', tool: 'Phone', action: 'Voice record narration' },
      { step: '4', tool: 'Terminal', action: 'Record terminal session' },
      { step: '5', tool: 'Kdenlive', action: 'Edit & add annotations' },
      { step: '6', tool: 'Kdenlive', action: 'Export final video' },
    ],
    videos: [
      { number: 1, title: 'Nmap on BlackArch: The ONLY Tutorial You\'ll Ever Need', tools: 'Nmap, -sV -sC -O', keyLearning: 'Comprehensive Nmap scanning' },
      { number: 2, title: 'Metasploit on BlackArch: First Exploit', tools: 'Metasploit Framework', keyLearning: 'MSF basics & first exploit' },
      { number: 3, title: 'Burp Suite on BlackArch: Intercept & Hack Web Apps', tools: 'Burp Suite', keyLearning: 'Web app proxy & hacking' },
      { number: 4, title: 'Nikto: Find Web Server Vulnerabilities in Seconds', tools: 'Nikto', keyLearning: 'Automated web scanning' },
      { number: 5, title: 'Wireshark on BlackArch: Analyze Network Traffic Like a Pro', tools: 'Wireshark', keyLearning: 'Packet analysis mastery' },
      { number: 6, title: 'John the Ripper: Crack Passwords on BlackArch', tools: 'John the Ripper', keyLearning: 'Password cracking techniques' },
      { number: 7, title: 'Hydra: Brute-Force Login Pages (Ethical Lab Demo)', tools: 'Hydra', keyLearning: 'Brute-force attack methods' },
      { number: 8, title: 'Gobuster: Find Hidden Directories & Files FAST', tools: 'Gobuster', keyLearning: 'Directory enumeration' },
      { number: 9, title: 'SQLmap: Automatic SQL Injection on BlackArch', tools: 'SQLmap', keyLearning: 'Automated SQL injection' },
      { number: 10, title: 'BlackArch Basics: How to Search & Install ANY Tool', tools: 'pacman', keyLearning: 'BlackArch package management' },
    ],
  },
  {
    name: 'CTF Solved',
    icon: Flag,
    description: 'Step-by-step walkthroughs of TryHackMe rooms and HackTheBox machines.',
    workflow: [
      { step: '1', tool: 'THM/HTB', action: 'Solve the room/box first and take notes' },
      { step: '2', tool: 'Editor', action: 'Write walkthrough script outline' },
      { step: '3', tool: 'Phone', action: 'Voice record narration' },
      { step: '4', tool: 'OBS', action: 'Full desktop screen record walkthrough' },
      { step: '5', tool: 'Kdenlive', action: 'Blur sensitive info, speed up repetitive parts' },
      { step: '6', tool: 'Kdenlive', action: 'Export final video' },
    ],
    videos: [
      { number: 1, title: 'TryHackMe \'OhSINT\': OSINT Walkthrough for Beginners', tools: 'OSINT basics', keyLearning: 'Open-source intelligence' },
      { number: 2, title: 'TryHackMe \'Simple CTF\': Your First Real Hack', tools: 'Basic enumeration', keyLearning: 'Fundamental CTF methodology' },
      { number: 3, title: 'TryHackMe \'Kenobi\': Samba Share to Root', tools: 'SMB, ProFTPD', keyLearning: 'SMB exploitation' },
      { number: 4, title: 'TryHackMe \'Steel Mountain\': Windows Exploitation', tools: 'Metasploit', keyLearning: 'Windows privilege escalation' },
      { number: 5, title: 'TryHackMe \'Alfred\': Jenkins CI/CD to SYSTEM', tools: 'Jenkins', keyLearning: 'CI/CD pipeline exploitation' },
      { number: 6, title: 'TryHackMe \'HackPark\': BlogEngine.NET RCE Walkthrough', tools: 'CMS exploit', keyLearning: 'CMS remote code execution' },
      { number: 7, title: 'TryHackMe \'Mr. Robot CTF\': Based on the TV Show', tools: 'WordPress', keyLearning: 'WordPress exploitation' },
      { number: 8, title: 'TryHackMe \'Daily Bugle\': Joomla SQL Injection to Root', tools: 'SQL injection', keyLearning: 'Joomla SQL injection chains' },
      { number: 9, title: 'HackTheBox \'Lame\': First HTB Machine for Beginners', tools: 'Samba exploit', keyLearning: 'HTB methodology & first blood' },
      { number: 10, title: 'HackTheBox \'Legacy\': EternalBlue (MS17-010) Exploit', tools: 'Metasploit', keyLearning: 'EternalBlue exploitation' },
    ],
  },
  {
    name: 'CVE Explained',
    icon: Newspaper,
    description: 'Daily breakdowns of critical newly discovered vulnerabilities.',
    workflow: [
      { step: '1', tool: 'NVD/CISA', action: 'Research latest CVEs' },
      { step: '2', tool: 'Script', action: 'Write explanation & script' },
      { step: '3', tool: 'OBS', action: 'Screen record analysis' },
      { step: '4', tool: 'Pexels', action: 'Add stock footage' },
      { step: '5', tool: 'Kdenlive', action: 'Edit & add graphics' },
      { step: '6', tool: 'Kdenlive', action: 'Export final video' },
    ],
    videos: [
      { number: 1, title: 'CVE-2025-XXXXX Explained: The Latest Critical Zero-Day', tools: 'NVD, Exploit DB', keyLearning: 'Zero-day analysis methodology' },
      { number: 2, title: 'Log4Shell (CVE-2021-44228) Explained: The Vulnerability That Broke the Internet', tools: 'Java, Log4j', keyLearning: 'Log4j RCE deep dive' },
      { number: 3, title: 'CVE-2023-23397: Microsoft Outlook\'s Silent Killer', tools: 'Outlook, Windows', keyLearning: 'Privilege escalation via Outlook' },
      { number: 4, title: 'CVE-2024-6387: The Return of RegreSSHion', tools: 'OpenSSH, Linux', keyLearning: 'SSH daemon race condition' },
      { number: 5, title: 'CVE-2025-XXXXX: AI/LLM Prompt Injection Attack', tools: 'AI/LLM, Web Apps', keyLearning: 'Prompt injection vectors' },
      { number: 6, title: 'EternalBlue (CVE-2017-0144) Explained: The NSA Exploit That Shook the World', tools: 'SMB, Windows', keyLearning: 'SMB remote code execution' },
      { number: 7, title: 'CVE-2022-22965: Spring4Shell – The Java Ecosystem Panic', tools: 'Spring, Java', keyLearning: 'Spring Framework RCE' },
      { number: 8, title: 'CVE-2023-4863: The WebP Zero-Day Affecting EVERY Browser', tools: 'WebP, Browsers', keyLearning: 'Image parsing vulnerabilities' },
      { number: 9, title: 'CVE-2025-XXXXX: The Fortinet / VPN Gateway Exploit', tools: 'Fortinet, VPN', keyLearning: 'VPN gateway exploitation' },
      { number: 10, title: 'CVE of the Week: Your 5-Minute Cybersecurity News Roundup', tools: 'Various', keyLearning: 'Weekly threat landscape overview' },
    ],
    notes: 'Some video titles contain placeholder CVE IDs (XXXXX) that should be updated with real CVEs as they are discovered. The "CVE of the Week" series is recurring.',
  },
  {
    name: 'AI Builds',
    icon: Wrench,
    description: 'Building real apps and automations using ONLY free AI chat.',
    workflow: [
      { step: '1', tool: 'Brainstorm', action: 'Choose a simple app or project idea' },
      { step: '2', tool: 'DeepSeek', action: 'Prepare and refine the AI prompt' },
      { step: '3', tool: 'Phone', action: 'Voice record narration' },
      { step: '4', tool: 'OBS', action: 'Screen record AI chat + browser testing' },
      { step: '5', tool: 'Kdenlive', action: 'Edit prompt→response→test→debug loop' },
      { step: '6', tool: 'Kdenlive', action: 'Export final video' },
    ],
    videos: [
      { number: 1, title: 'I Built a To-Do App in 10 Minutes Using ONLY AI', tools: 'AI Chat, Web Tech', keyLearning: 'Rapid app prototyping with AI' },
      { number: 2, title: 'Build a Personal Portfolio Website with AI (No Coding)', tools: 'AI Chat, HTML/CSS', keyLearning: 'AI-generated web design' },
      { number: 3, title: 'AI Made Me a Password Generator (and It\'s Actually Good)', tools: 'AI Chat, Python', keyLearning: 'Security tool creation with AI' },
      { number: 4, title: 'Create a Weather App with AI (Free API Included)', tools: 'AI Chat, REST API', keyLearning: 'API integration via AI' },
      { number: 5, title: 'AI Helped Me Clone the Google Homepage (In 20 Minutes)', tools: 'AI Chat, HTML/CSS', keyLearning: 'UI cloning with AI' },
      { number: 6, title: 'Build a Simple Calculator with Dark Mode using AI', tools: 'AI Chat, JavaScript', keyLearning: 'Interactive UI with AI' },
      { number: 7, title: 'I Built a YouTube Thumbnail Mockup Tool with AI', tools: 'AI Chat, Canvas', keyLearning: 'Canvas API & image tools' },
      { number: 8, title: 'AI Wrote a QR Code Generator for Me (Free & Instant)', tools: 'AI Chat, Libraries', keyLearning: 'QR code generation' },
      { number: 9, title: 'Build an AI Prompt Library for Hackers (Save Your Best Prompts)', tools: 'AI Chat, Storage', keyLearning: 'Prompt management system' },
      { number: 10, title: 'Full Project: Build a Cybersecurity Resource Hub with AI', tools: 'AI Chat, Full Stack', keyLearning: 'End-to-end AI project build' },
    ],
  },
  {
    name: 'Arch Security Lab',
    icon: Terminal,
    description: 'Turn your Arch-based system into a professional pentest environment.',
    workflow: [
      { step: '1', tool: 'Research', action: 'Security topic selection' },
      { step: '2', tool: 'Editor', action: 'Write configuration steps' },
      { step: '3', tool: 'Phone', action: 'Voice record narration' },
      { step: '4', tool: 'Terminal', action: 'Record terminal commands' },
      { step: '5', tool: 'Kdenlive', action: 'Edit & add annotations' },
      { step: '6', tool: 'Kdenlive', action: 'Export final video' },
    ],
    videos: [
      { number: 1, title: 'Add the BlackArch Repo to Your Arch System (Step-by-Step)', tools: 'pacman, BlackArch', keyLearning: 'Repository integration' },
      { number: 2, title: 'Kernel Hardening on Arch: sysctl.conf Security Tweaks', tools: 'sysctl, Kernel', keyLearning: 'Kernel security hardening' },
      { number: 3, title: 'UFW Firewall on Arch: Simple Rules, Maximum Protection', tools: 'UFW, iptables', keyLearning: 'Firewall configuration' },
      { number: 4, title: 'iptables/nftables on Arch: The REAL Firewall Deep Dive', tools: 'iptables, nftables', keyLearning: 'Advanced firewall rules' },
      { number: 5, title: 'SSH Hardening: Secure Your Remote Access on Arch', tools: 'sshd_config, Keys', keyLearning: 'SSH security best practices' },
      { number: 6, title: 'Fail2ban on Arch: Automatically Ban Attackers', tools: 'Fail2ban, systemd', keyLearning: 'Intrusion prevention' },
      { number: 7, title: 'AppArmor on Arch: Mandatory Access Control Setup', tools: 'AppArmor, Profiles', keyLearning: 'MAC policy enforcement' },
      { number: 8, title: 'Install and Configure Snort IDS on Arch', tools: 'Snort, Rules', keyLearning: 'Network intrusion detection' },
      { number: 9, title: 'Full Disk Encryption with LUKS on Arch', tools: 'LUKS, cryptsetup', keyLearning: 'Disk encryption setup' },
      { number: 10, title: 'Security Audit Checklist: 10 Commands to Harden Arch in 10 Minutes', tools: 'Various CLI tools', keyLearning: 'Rapid security hardening' },
    ],
  },
]

export function ChannelsSection() {
  return (
    <section id="channels" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="destructive" className="mb-4">
            FULL BLUEPRINT
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Channel <span className="kdx-gradient-text">Deep Dives</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Complete workflows, video plans, and production details for every
            channel. Click each tab to explore.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ai-for-hackers" className="w-full">
          <div className="mb-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <TabsList className="inline-flex w-max gap-1">
              {channelsData.map((channel) => {
                const Icon = channel.icon
                return (
                  <TabsTrigger
                    key={channel.name.toLowerCase().replace(/\s+/g, '-')}
                    value={channel.name.toLowerCase().replace(/\s+/g, '-')}
                    className="gap-1.5 text-xs sm:text-sm"
                  >
                    <Icon className="size-3.5 sm:size-4" />
                    <span className="hidden sm:inline">{channel.name}</span>
                    <span className="sm:hidden">{channel.name.split(' ')[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {channelsData.map((channel) => (
            <TabsContent
              key={channel.name.toLowerCase().replace(/\s+/g, '-')}
              value={channel.name.toLowerCase().replace(/\s+/g, '-')}
            >
              <ChannelDetail channel={channel} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
