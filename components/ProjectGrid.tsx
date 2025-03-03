"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { MdOutlineClose } from "react-icons/md"
import { LuLink2 } from "react-icons/lu"

interface ProjectCardProps {
  projectTitle: string
  description: string
  cover: string
  coverWidth: number
  coverHeight: number
  url: string
  technologies?: string[]
  longDescription?: string
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectCardProps
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  useEffect(() => {
    const originalFocus = document.activeElement

    if (modalRef.current) {
      modalRef.current.focus()
    }

    document.body.style.overflow = "hidden"

    return () => {
      if (originalFocus instanceof HTMLElement) {
        originalFocus.focus()
      }
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-[#1e1e1e] p-5 rounded-sm w-full max-w-md relative my-auto border border-[#333333]"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-white p-1.5 transition-colors"
          aria-label="Close modal"
        >
          <MdOutlineClose size={18} />
        </button>

        <div className="space-y-4">
          <h2 id="modal-title" className="text-xl font-medium text-[#a6e22e] pr-8">
            {project.projectTitle}
          </h2>

          <div className="relative w-full aspect-video rounded-sm overflow-hidden">
            <Image
              src={project.cover || "/placeholder.svg"}
              alt={project.projectTitle}
              fill
              className="object-cover"
              priority={true}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">{project.longDescription || project.description}</p>

          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 text-sm bg-[#333333] rounded-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#a6e22e] transition-colors group"
          >
            Visit project
            <LuLink2
              className="text-lime-200 hover:text-lime-400"
              size={14}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

function ProjectCard(props: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        className="cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#a6e22e]"
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setIsModalOpen(true)
          }
        }}
        aria-label={`View details of ${props.projectTitle}`}
      >
        <div className="relative h-[140px] border border-[#333333] bg-[#1e1e1e] hover:border-[#444444] transition-colors overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src={props.cover || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e] via-[#1e1e1e]/95 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full p-4 flex flex-col justify-between z-10">
            <div>
              <h3 className="text-base font-normal text-white mb-1 truncate">{props.projectTitle}</h3>
              <p className="text-gray-300 text-sm line-clamp-2">{props.description}</p>
            </div>

            {props.technologies && props.technologies.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="text-xs text-[#a6e22e]">{props.technologies[0]}</span>
                {props.technologies.length > 1 && (
                  <span className="text-xs text-gray-400">+{props.technologies.length - 1}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      {isModalOpen && <ProjectModal project={props} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

const projects = [
  {
    projectTitle: "Gomini",
    description: "A Go backend API with Gemini 1.5 to generate response based on users prompt.",
    longDescription:
      "Gomini is a powerful backend API built with Go that leverages Google's Gemini 1.5 AI model to generate intelligent responses based on user prompts. The API handles natural language processing tasks efficiently and provides accurate, context-aware responses.",
    cover: "/go-geminii.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://github.com/ojuss/gemini-go",
    technologies: ["Go", "Gemini 1.5", "REST API"],
  },
  {
    projectTitle: "Stripe Payment Intent",
    description: "Demonstration of how to integrate Stripe Payment API with a Go backend.",
    longDescription:
      "A comprehensive implementation of Stripe's Payment Intent API integrated with a Go backend. This project showcases secure payment processing, webhook handling, and best practices for implementing payment flows in web applications.",
    cover: "/stripe.png",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://github.com/ojuss/stripe-payment-intent",
    technologies: ["Go", "Stripe API", "REST API"],
  },
  {
    projectTitle: "Collabdoor",
    description: "Helping students with course relevant resources.",
    longDescription:
      "Collabdoor is an educational platform designed to help students find and share course-relevant resources. It features a collaborative environment where students can upload, discover, and discuss learning materials specific to their courses.",
    cover: "/colabdoor.webp",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://collabdoor.github.io/dumbAF/",
    technologies: ["Web", "PWAs", "JavaScript"],
  },
  {
    projectTitle: "Scientific Illustrator Portfolio",
    description: "A modern portfolio website for a scientific illustrator.",
    longDescription:
      "A professionally designed portfolio website for a scientific illustrator, showcasing their work with a clean, modern interface. The site features a responsive gallery, detailed project pages, and contact information.",
    cover: "/illustrations.webp",
    coverWidth: 320,
    coverHeight: 780,
    url: "https://oshgupta.com",
    technologies: ["Next.js", "CMS", "Tailwind CSS"],
  },
]

export default function ProjectGrid() {
  return (
    <section className="py-6">
      <div className="container mx-auto max-w-4xl ">
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

