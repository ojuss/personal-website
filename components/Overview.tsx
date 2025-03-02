import Contact from "./Contact";
import Link from "next/link";

export default function Overview() {
  return (
    <div id="overview" className="space-y-4">
      <p className="text-4xl font-bold text-lime-400">[ ojus ]</p>

      <p className="leading-relaxed text-white">
        Hello world! I'm Ojus, a computer science undergrad{" "}
        <a className="text-lime-200 hover:underline" href="https://ptu.ac.in">
          @Punjab Technical University
        </a>
        . I enjoy coding competitively and building cool things!
      </p>

      <Contact />

      <div className="space-y-1 text-white">
        <p>On this page:</p>
        <nav className="space-y-1">
          {["Projects!", "Work!", "About!", "Overview!"].map((item) => (
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
          className="text-lime-200 relative hover:underline duration-200 group"
        >
          Hammer AI
        </Link>
        . Having worked with multiple startups in the past, I have gained
        significant experience in web development and design.
      </p>
    </div>
  );
}
