import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knight Dragon X | AI + Hacking Content Creator Blueprint",
  description: "Complete blueprint for building viral cybersecurity YouTube channels. 6 niche channels, video workflows, thumbnail guides, and brand guidelines for Knight Dragon X.",
  keywords: [
    "Knight Dragon X",
    "cybersecurity",
    "ethical hacking",
    "AI for Hackers",
    "BlackArch Arsenal",
    "CTF Solved",
    "CVE Explained",
    "AI Builds",
    "Arch Security Lab",
    "YouTube content creator",
    "HTB style",
  ],
  authors: [{ name: "K.D.Sithara Nimsara" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐉</text></svg>",
  },
  openGraph: {
    title: "Knight Dragon X | AI + Hacking Content Creator Blueprint",
    description: "Complete blueprint for building viral cybersecurity YouTube channels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col kdx-grid-bg">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
