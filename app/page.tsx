"use client";

import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Overview from "@/components/Overview";
import About from "@/components/About";


export default function Home() {
  return (
    <main className="p-8 pt-44 md:p-16 bg-[#29292B] md:pt-44">
      <div className="max-w-2xl mx-auto space-y-8">
        <Overview />
        <Projects />
        <Work />
        <About />
      </div>
    </main>
  );
}
