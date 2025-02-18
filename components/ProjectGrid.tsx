"use client"

import Image from "next/image"
import { useState } from "react"
import AI from "@/public/gomini.png"
import Collabdoor from "@/public/Collabdoor.png"
import Stripe from "@/public/stripe-gateway.png"
import Illustration from "@/public/illustrations.png"

import type { StaticImageData } from "next/image"


interface ProjectCardProps {
  projectTitle: string
  description: string
  cover: string | StaticImageData
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
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-neutral-700 p-6 rounded-sm max-w-2xl w-[90%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4  text-gray-400 hover:text-white"
        >
          close
        </button>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-lime-400 ">[ {project.projectTitle} ]</h2>

          <div className="relative w-full aspect-video">
            <Image
              src={project.cover || "/placeholder.svg"}
              alt={project.projectTitle}
              fill
              className="object-cover rounded-lg"
              priority={true}
            />
          </div>

          <p className="text-gray-200">{project.longDescription || project.description}</p>

          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-400 duration-150 rounded-full text-gray-700 "
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lime-500 hover:underline"
          >
            
            Visit Project
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
      <article role="listitem" className="h-[140px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <div className="flex flex-row items-start p-2.5 border bg-white  h-full hover:bg-gray-300 transition-colors">
          <Image
            src={props.cover || "/placeholder.svg"}
            alt={`${props.projectTitle} cover`}
            width={props.coverWidth}
            height={props.coverHeight}
            className="w-20 h-[120px] object-cover mr-5"
            priority={true}
          />

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-normal text-gray-900 dark:text-gray-100 m-0 mb-1 truncate">
              {props.projectTitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 m-0 text-sm">{props.description}</p>
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
    cover: AI,
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
    cover: Stripe,
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
    cover: Collabdoor,
    coverWidth: 320,
    coverHeight: 780,
    url: "https://collabdoor.github.io/dumbAF/",
    technologies: ["Web", "PWAs", "JavaScript"],
  },
  {
    projectTitle: "Scientific Illustrator Portfolio",
    description: "A modern portfolio website for a scientific illustrator.",
    longDescription:
      "A comprehensive implementation of Stripe's Payment Intent API integrated with a Go backend. This project showcases secure payment processing, webhook handling, and best practices for implementing payment flows in web applications.",
    cover: Illustration,
    coverWidth: 320,
    coverHeight: 780,
    url: "https://oshgupta.com",
    technologies: ["Next.js", "CMS", "Tailwind CSS"],
  },
  // ... add your other projects here
]

export default function ProjectGrid() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

