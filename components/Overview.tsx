import Contact from "./Contact";
import Link from "next/link";

export default function Overview() {
  return (
    <>
      <h1 className="text-5xl font-bold text-lime-400">[ ojus ]</h1>

      <p className="leading-relaxed text-white">
        Hello world! I'm Ojus, a computer science undergrad @ Punjab Technical
        University. I enjoy coding competitively and building cool things!
      </p>

      <Contact />

      <div className="space-y-1 text-white">
        <p>On this page:</p>
        <nav className="space-y-1">
          {["Projects!", "Work!", "Music!", "Other things!"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace("!", "")}`}
                className="block text-gray-400 hover:text-lime-400 hover:bg-gray-800 relative group w-fit"
              >
                <span className="relative z-10">[{item}]</span>
                <span className="absolute inset-0 bg-violet-100 scale-x-0 rounded-sm" />
              </Link>
            )
          )}
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
        . Having worked with multiple startups in the past, I have gained
        significant experience in web development and design.
      </p>
    </>
  );
}
