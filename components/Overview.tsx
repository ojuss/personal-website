import Contact from "./Contact";
import Link from "next/link";
import Pixelated from "./Pixelated";
import { useState } from "react";
import { FiVolumeX, FiVolume2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Overview() {

  const [isMuted, setIsMuted] = useState(true);
  const handleToggleMute = () => {

    setIsMuted(!isMuted);
  }

  return (
    <div className="relative flex justify-center w-full -mt-28">

      <Pixelated isMuted={isMuted} />

      <div className="relative mt-[200px] space-y-4">
        <h1 className="text-5xl font-bold text-lime-400">[ ojus ]</h1>

        <p className="leading-relaxed text-white">
          Hello world! I'm Ojus, a computer science undergrad{" "}
          <a className="text-lime-200 hover:underline" href="https://ptu.ac.in">
            @Punjab Technical University
          </a>
          . I enjoy coding competitively and building cool things!
        </p>

        <button
          className="group flex items-center justify-center gap-2 py-1.5 text-white transition-colors duration-200 "
          onClick={handleToggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
        ><div className="flex items-center gap-2">
          <span className=" text-lg">[</span>
          
          <div className="relative w-4 h-4 mt-1">
            <AnimatePresence mode="wait" initial={false}>
              {isMuted ? (
                <motion.div
                  key="muted"
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FiVolumeX className="w-6 h-6 text-lime-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="unmuted"
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FiVolume2 className="w-6 h-6 text-lime-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-md">{isMuted ? "unmute" : "mute"}</span>
          
          <span className=" text-lg">]</span></div>
        </button>

        <Contact />

        <div className="space-y-1 text-white">
          <p>On this page:</p>
          <nav className="space-y-1">
            {["Overview!","Projects!", "Work!", "About!"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace("!", "")}`}
                className="block text-gray-400 hover:text-lime-400 hover:bg-gray-800 relative group w-fit duration-200"
              >
                <span className="relative z-10">[{item}]</span>
                <span className="absolute inset-0 bg-violet-100 scale-x-0 rounded-sm" />
              </Link>
            ))}
          </nav>
        </div>

        <p className="leading-relaxed text-white">
          I am currently a software engineer at{" "}
          <Link
            href="https://hammerai.com"
            className="text-lime-200 relative underline group"
          >
            Hammer AI
          </Link>
          . Having worked with multiple startups in the past, I have gained
          significant experience in web development and design.
        </p>
      </div>
    </div>
  );
}
