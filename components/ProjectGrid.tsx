import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  projectTitle: string;
  description: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  url: string;
}

function BookCard({
  projectTitle,
  description,
  cover,
  coverWidth,
  coverHeight,
  url,
}: BookCardProps) {
  return (
    <article role="listitem" className="h-[120px]">
      {" "}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-start p-2.5 border bg-white  h-full no-underline text-inherit hover:bg-gray-400  transition-colors"
      >
        <Image
          src={cover || "/placeholder.svg"}
          alt={`${projectTitle} cover`}
          width={coverWidth}
          height={coverHeight}
          className="w-20 h-[100px] object-cover mr-5"
          priority={true}
        />

        <div className="flex-1 min-w-0">
          {" "}
          {/* Added min-width to handle text overflow */}
          <h3 className="text-base font-normal text-gray-900 dark:text-gray-100 m-0 mb-1 truncate">
            {projectTitle}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 m-0 truncate">
            by {description}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function BookGrid() {
  return (
    <div className="container mx-auto max-w-4xl">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <BookCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    projectTitle: "I, Robot",
    description: "Isaac Asimov",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sf3MedlKHYHkb2xTiszDW43lQuDksj.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://example.com/i-robot",
  },
  {
    projectTitle: "Never Use Futura",
    description: "Douglas Thomas",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sf3MedlKHYHkb2xTiszDW43lQuDksj.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://example.com/never-use-futura",
  },
  {
    projectTitle: "Tomorrow, and Tomorrow, and Tomorrow",
    description: "Gabrielle Zevin",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sf3MedlKHYHkb2xTiszDW43lQuDksj.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://example.com/tomorrow",
  },
  {
    projectTitle: "Red Team Blues",
    description: "Cory Doctorow",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sf3MedlKHYHkb2xTiszDW43lQuDksj.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://example.com/red-team-blues",
  },
  {
    projectTitle: "Harry Potter and the Methods of Rationality",
    description: "Eliezer Yudkowsky",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sf3MedlKHYHkb2xTiszDW43lQuDksj.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://example.com/hpmor",
  },
  {
    projectTitle: "Game Engine Black Book: Wolfenstein 3D",
    description: "Fabien Sanglard",
    cover:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sf3MedlKHYHkb2xTiszDW43lQuDksj.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://example.com/game-engine-black-book",
  },
];
