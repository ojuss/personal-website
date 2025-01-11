'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Twitter, Linkedin, FileText } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  const [rainbowMode, setRainbowMode] = useState(false)

  return (
    <main className={`min-h-screen p-8 md:p-16 transition-colors duration-500 ${
      rainbowMode ? 'animate-rainbow' : 'bg-zinc-50 dark:bg-zinc-950'
    }`}>
      <div className="max-w-2xl mx-auto space-y-8 font-mono">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Kognise
        </h1>

        <p className="leading-relaxed text-zinc-800 dark:text-zinc-200">
          Hello! I usually go by the moniker Kognise{' '}
          <span className="text-orange-600 dark:text-orange-400">/kəɡnaɪz/</span> on the Internet. Many things capture my interest, 
          and this site features some of them. You may enjoy reading one of{' '}
          <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
            the articles I&apos;ve written
            <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
          </Link>.
        </p>

        <div className="space-y-2 text-zinc-800 dark:text-zinc-200">
          <p>
            Reach out:{' '}
            <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
              hi@kognise.dev
              <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
            </Link>{' '}
            or @kognise on Discord
          </p>
          
          <p className="flex items-center gap-4">
            Find me:{' '}
            <span className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: FileText, label: 'Resume' }
              ].map(({ icon: Icon, label }) => (
                <Link 
                  key={label}
                  href="#" 
                  className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </span>
          </p>
        </div>

        <div className="space-y-1 text-zinc-800 dark:text-zinc-200">
          <p>On this page:</p>
          <nav className="space-y-1">
            {['Computers!', 'Airplanes!', 'Music!', 'Other things!', 'Projects!'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace('!', '')}`}
                className="block text-violet-600 dark:text-violet-400 relative group w-fit"
              >
                <span className="relative z-10">[{item}]</span>
                <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-sm" />
              </Link>
            ))}
          </nav>
        </div>

        <p className="leading-relaxed text-zinc-800 dark:text-zinc-200">
          I am currently an engineer at{' '}
          <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
            Neuralink
            <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
          </Link>
          . In the past, I&apos;ve worked at{' '}
          <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
            Hack Club
            <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
          </Link>
          ,{' '}
          <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
            Replit
            <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
          </Link>
          , and{' '}
          <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
            Redwood Research
            <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
          </Link>
          .
        </p>

        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
          <Checkbox 
            id="rainbow" 
            checked={rainbowMode}
            onCheckedChange={(checked) => setRainbowMode(checked as boolean)}
            className="border-violet-600 data-[state=checked]:bg-violet-600"
          />
          <label htmlFor="rainbow" className="text-sm cursor-pointer select-none">
            Activate background rainbow mode 🌈
          </label>
        </div>

        <section id="computers" className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Computers!
          </h2>
          <p className="leading-relaxed text-zinc-800 dark:text-zinc-200">
            I spend a significant portion of my time writing code and creating with technology. 
            I believe in having passion for your craft and attention to detail. Since I just 
            adore building things, I have a huge amount of side projects that I don&apos;t really 
            know what to do with! You can{' '}
            <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
              see an abridged list of stuff I&apos;ve done
              <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
            </Link>{' '}
            if you&apos;re interested.
          </p>
          <p className="leading-relaxed text-zinc-800 dark:text-zinc-200">
            I use TypeScript, Rust, and Next.js on a daily basis and love them. I used to daily 
            drive NixOS with KDE Plasma (you can{' '}
            <Link href="#" className="text-violet-600 dark:text-violet-400 relative group">
              check out my dotfiles
              <span className="absolute inset-0 bg-violet-100 dark:bg-violet-900/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 rounded-sm" />
            </Link>
            , they&apos;re not half bad) but now just use macOS and reserve NixOS for my desktop 
            at home. I design everything for myself and for others using Figma.
          </p>
        </section>
      </div>
    </main>
  )
}

