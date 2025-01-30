import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className="pt-16 space-y-4">
      <h2 className="text-2xl font-bold text-lime-500 text-transparent hover:bg-gray-800 inline-block">
        [ Projects ]
      </h2>

      <p className="leading-relaxed text-gray-200">
        I use TypeScript, Go and Javascript TechStack primarily Next.js on a daily basis. Here's a showcase of my projects.
      </p>
      <ProjectGrid />
    </section>
  );
}
