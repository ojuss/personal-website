"use client";

import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="min-h-screen p-8 pt-44 md:p-16 transition-colors duration-500 bg-[#282725] md:pt-44">
      <div className="max-w-2xl mx-auto space-y-8 font-mono">
        <Overview />
        <Projects />
        <Work />
      </div>
    </main>
  );
}
