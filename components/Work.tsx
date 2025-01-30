import Link from "next/link";

interface TimelineEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
}

export default function Timeline() {
  const experiences: TimelineEntry[] = [
    {
      company: "FLIB",
      role: "Frontend Engineer",
      startDate: "Oct 2025",
      endDate: "Present",
      isCurrent: true,
    },
    {
      company: "Noviga Automation",
      role: "Frontend Developer Intern",
      startDate: "Sept 2024",
      endDate: "Oct 2024",
    },
    {
      company: "Meta Craftlabs",
      role: "Full Stack Developer Intern",
      startDate: "Jun 2024",
      endDate: "Jul 2024",
    },
    {
      company: "Google Developer Student Club IKGPTU",
      role: "Core Team Member",
      startDate: "Aug 2023",
      endDate: "Aug 2024",
    },
  ];

  return (
    <div id="work" className="pt-16 space-y-4">
      <h2 className="text-2xl font-bold text-lime-500 text-transparent hover:bg-gray-800 inline-block">
        [ Work ]
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gray-700" />

        {/* Timeline entries */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full border-2 mt-1.5 z-10 
                    ${
                      experience.isCurrent
                        ? "border-lime-400 bg-lime-500"
                        : "border-gray-600 bg-gray-900"
                    }`}
              />

              {/* Content */}
              <div className="flex-1 flex justify-between items-start min-w-0">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.company}
                  </h3>
                  <p className="text-gray-400 mt-1">{experience.role}</p>
                </div>
                <p className="text-gray-500 text-right ml-4">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
