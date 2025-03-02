import Link from "next/link";
import { LuLink2 } from "react-icons/lu";

interface TimelineEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description?: string;
  link: string;
  isCurrent?: boolean;
}

export default function Timeline() {

  return (
    <div id="work" className="pt-12 space-y-4">
      <h2 className="text-2xl font-bold text-lime-400 hover:bg-gray-800 inline-block">
        [ Work ]
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gray-700" />

        {/* Timeline entries */}
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full border-2 mt-1.5 z-10 
                    ${experience.isCurrent
                    ? "border-lime-500 bg-lime-600"
                    : "border-gray-600 bg-gray-900"
                  }`}
              />

              {/* Content */}
              <div className="flex-1 flex justify-between items-start min-w-0">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    {experience.company}
                    <Link
                      href={experience.link}
                      target="_blank"
                      className="text-lime-200 hover:text-lime-400 "
                    >
                      <LuLink2 height={2} width={2}/>
                    </Link>
                  </h3>
                  <p className="text-gray-400 mt-1 italic">{experience.role}</p>
                  <p className="text-gray-300 md:hidden">
                    {" "}
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <br />
                  {/* <p className="text-gray-300 mt-1 hidden md:block">
                    {experience.description}
                  </p> */}
                </div>
                <div className="hidden md:flex flex-col md:text-right whitespace-nowrap">
                  <p className="text-gray-300 ml-4 md:ml-0">
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const experiences: TimelineEntry[] = [
  {
    company: "Hammer AI",
    role: "Software Engineer",
    // description:
    //   "As a frontend engineer, I am working to implement new features, UI components, DB management and refactoring codebase for better SEO and SERPs.",
    startDate: "Feb 2024",
    endDate: "Present",
    isCurrent: true,
    link: "https://hammerai.com",
  },
  {
    company: "FLIB",
    role: "Frontend Engineer",
    // description:
    //   "As a frontend engineer, I am working to implement new features, UI components, DB management and refactoring codebase for better SEO and SERPs.",
    startDate: "Oct 2024",
    endDate: "Feb 2024",
    link: "https://flib.store",
  },
  {
    company: "Noviga Automation",
    role: "Frontend Developer",
    // description:
    //   "Understanding client's requirements to develop an internal asset management system.",
    startDate: "Sept 2024",
    endDate: "Oct 2024",
    link: "https://www.noviga.tech/",
  },
  {
    company: "Meta CraftLab",
    role: "Full Stack Developer Intern",
    // description:
    //   "Collaborated in building a physical Meta CraftLab product </devstar> a developer toolkit.",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    link: "https://craftlab.ai/",
  },
  {
    company: "Google Developer Student Club IKGPTU",
    role: "Core Team Member",
    // description:
    //   "During my time in GDSC, I had a chance to collaborate with my team on front-end projects and also help in organizing as well as participating in workshops/ events.",
    startDate: "Aug 2023",
    endDate: "Aug 2024",
    link: "https://www.linkedin.com/company/gdsc-ikgptu/",
  },
];
