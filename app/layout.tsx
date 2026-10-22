import type { Metadata } from "next";
import { Newsreader, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const serif = Newsreader({ variable: "--font-serif", subsets: ["latin"], weight: ["300", "400"], style: ["normal"] });
const body = Work_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://keymaker.agency"),
  title: { default: "Keymaker - AI agent systems for recruiting firms", template: "%s · Keymaker" },
  description:
    "Keymaker sets up AI agent systems for specialist recruiting firms: agents that source, summarise and shortlist, a shared brain of your placements, and a workspace for every recruiter - on infrastructure you own.",
  openGraph: { images: ["/img/hero.jpg"] },
};

function Key() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12h10M18 12v4M21 12v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${body.variable} ${mono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="fixed top-4 inset-x-0 z-30 px-4">
          <nav className="mx-auto max-w-6xl h-14 pl-5 pr-2 flex items-center justify-between rounded-[30px] border border-line bg-forest/70 backdrop-blur-md">
            <Link href="/" className="flex items-center gap-2 text-text">
              <span className="text-peach"><Key /></span>
              <span className="display text-xl">Keymaker</span>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2 text-sm">
              <Link href="/#offers" className="hidden sm:inline px-3 py-2 text-muted hover:text-text">Offers</Link>
              <Link href="/how-we-work" className="hidden sm:inline px-3 py-2 text-muted hover:text-text">How we work</Link>
              <Link href="/start" className="btn-primary !py-2.5 !px-5 text-sm"><span className="sm:hidden">Start</span><span className="hidden sm:inline">Start a project</span></Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="display text-2xl">Keymaker</p>
              <p className="text-muted text-sm mt-4 max-w-xl leading-relaxed">
                A demonstration agency built in public during the{" "}
                <a className="underline decoration-line underline-offset-4 hover:text-text" href="https://www.ability.ai/trinity/workshops/agent-native-agency-workshop">
                  Agent-Native Agency workshop
                </a>{" "}
                on the open-source <a className="underline decoration-line underline-offset-4 hover:text-text" href="https://github.com/abilityai/trinity">Trinity</a> platform.
                Requests sent here are read by AI agents and reviewed by people. Nothing leaves the agency without a person approving it.
              </p>
            </div>
            <div className="md:justify-self-end text-sm space-y-2">
              <p className="eyebrow text-peach">Contact</p>
              <p><a href="mailto:hello@keymaker.agency" className="hover:text-peach">hello@keymaker.agency</a></p>
              <p className="text-muted">Photography is illustrative.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
