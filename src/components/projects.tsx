"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  readMore?: string
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: "ShellHacks 2023",
      description:
        "Developed a Chrome plugin for professor selection, integrating RateMyProfessor and FIU data. Used Python for web scraping and sentiment analysis (OpenAI API). Built a JavaScript frontend for the extension. 2nd place out of 200+ projects & 3rd place in Google Challenge.",
      image: "/shellhacks2023.png",
      tags: ["Chrome Extension", "Python", "JavaScript", "OpenAI API"],
      github: "https://github.com/FernandoAzanza",
      readMore: "https://github.com/FernandoAzanza",
    },
    {
      id: 2,
      title: "ClickBait News Detector",
      description:
        "Developed a machine learning model to detect clickbait using logistic regression. Preprocessed Kaggle dataset, applying text normalization, punctuation removal, and stopword filtering. Used TF-IDF vectorization to transform textual data into numerical features.",
      image: "/clickbait-detector.png",
      tags: ["Python", "Machine Learning", "NLP", "Data Science"],
      github: "https://github.com/FernandoAzanza",
      readMore: "https://github.com/FernandoAzanza",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white section-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex items-center space-x-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span>Code</span>
                    </Link>
                  )}

                  {project.readMore && (
                    <Link
                      href={project.readMore}
                      target="_blank"
                      className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      <span>Read More</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

