"use client"

import { useEffect, useRef } from "react"
import WorkExperience from "./work-experience"

export default function Experience() {
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-[#f0f7f7] section-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Work Experience Section */}
        <WorkExperience />
      </div>
    </section>
  )
}

