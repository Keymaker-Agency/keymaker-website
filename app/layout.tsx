import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://keymaker.agency"),
  title: { default: "Keymaker - AI agent systems for agencies", template: "%s · Keymaker" },
  description:
    "Keymaker sets up AI agent systems for agencies and service teams: departments, a shared brain, one orchestrator and a workspace for your people - on infrastructure you own.",
};

function Key() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 12h10M18 12v4M21 12v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} ${mono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-line/70 bg-ink/80 backdrop-blur sticky top-0 z-20">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-brass font-display text-lg tracking-tight">
              <Key /> <span className="text-text">Keymaker</span>
            </Link>
            <div className="flex items-center gap-5 text-sm text-muted">
              <Link href="/#offers" className="hover:text-text hidden sm:inline">Offers</Link>
              <Link href="/how-we-work" className="hover:text-text">How we work</Link>
              <Link href="/start" className="rounded-full bg-brass text-ink font-medium px-4 py-2 hover:bg-brass-2">Start a project</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line/70 mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-muted grid gap-6 sm:grid-cols-[1fr_auto]">
            <p className="max-w-2xl">
              Keymaker is a demonstration agency, built in public during the{" "}
              <a className="underline hover:text-text" href="https://www.ability.ai/trinity/workshops/agent-native-agency-workshop">
                Agent-Native Agency workshop
              </a>{" "}
              on the open-source <a className="underline hover:text-text" href="https://github.com/abilityai/trinity">Trinity</a> platform.
              Requests sent here are read by AI agents and reviewed by people. Nothing leaves the agency without a person approving it.
            </p>
            <p>hello@keymaker.agency</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
