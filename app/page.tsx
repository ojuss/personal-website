"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="min-h-screen p-8 pt-44 md:p-16 transition-colors duration-500 bg-[#282725] md:pt-44">
      <div className="max-w-2xl mx-auto space-y-8 font-mono">
        <h1 className="text-5xl font-bold text-lime-500">[ ojus ]</h1>

        <p className="leading-relaxed text-white">
          Hello world! I'm Ojus, a computer science undergrad @ Punjab Technical
          University. I enjoy coding competitively and building cool things!
        </p>

        <Contact />
        

        <div className="space-y-1 text-white">
          <p>On this page:</p>
          <nav className="space-y-1">
            {[
              "Projects!",
              "Work!",
              "Music!",
              "Other things!",
              "Projects!",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace("!", "")}`}
                className="block text-gray-400 hover:text-lime-400 hover:bg-gray-800 relative group w-fit"
              >
                <span className="relative z-10">[{item}]</span>
                <span className="absolute inset-0 bg-violet-100 scale-x-0 rounded-sm" />
              </Link>
            ))}
          </nav>
        </div>

        <p className="leading-relaxed text-white">
          I am currently a frontend engineer at{" "}
          <Link
            href="https://flib.store"
            className="text-lime-200 relative underline group"
          >
            FLIB
          </Link>
          . Having worked with multiple startups in the past, I have a good
          gained significant experience in frontend development and design.
        </p>
        <Projects />
        <Work />
      </div>
    </main>
  );
}
