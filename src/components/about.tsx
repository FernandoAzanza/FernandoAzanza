"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Code, Lightbulb, Cpu, Layout, PenTool, MessageSquare, Presentation } from "lucide-react"
import Image from "next/image"

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden section-transition">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* About Me Section */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">About Me</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I am an international student from Ecuador studying Computer Science at Florida International
                  University. I&#39;m excited to make the most of my time here, which is why I&#39;m constantly seeking to
                  improve my abilities through hands-on experience.
                </p>
                <p className="text-muted-foreground">
                  I&#39;m an enthusiastic learner; I enjoy creating things that have an impact, and most of all, I love
                  helping others with my work.
                </p>

                <div className="flex flex-wrap gap-6 mt-4">
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-primary mr-2" />
                    <span className="text-muted-foreground">Software Dev</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-primary mr-2" />
                    <span className="text-muted-foreground">Product Management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-24 h-24 relative rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/FIULogo.png"
                      alt="Florida International University"
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Florida International University</h4>
                    <p className="text-muted-foreground">Bachelor of Science Computer Science | Honors College</p>
                    <p className="text-muted-foreground mt-2">2022 - 2026</p>
                    <div className="w-full h-1 bg-primary/20 rounded-full mt-4">
                      <div className="h-full bg-primary rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-secondary/10 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Cpu className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">Skills</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground flex items-center">
                  <Code className="w-5 h-5 text-primary mr-2" />
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "HTML", "CSS", "JavaScript"].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-primary/10 text-foreground rounded-full border border-primary/20"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground flex items-center">
                  <Layout className="w-5 h-5 text-primary mr-2" />
                  Product and UX
                </h4>
                <p className="text-muted-foreground">Define problem statements, value propositions, and user needs.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground flex items-center">
                  <PenTool className="w-5 h-5 text-primary mr-2" />
                  Design Thinking
                </h4>
                <p className="text-muted-foreground">
                  Experience applying human-centered design principles to solve complex problems.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-2" />
                  User Interviews &amp; Journey Mapping
                </h4>
                <p className="text-muted-foreground">
                  Skilled in conducting user research and creating journey maps to identify pain points and
                  opportunities.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground flex items-center">
                  <Presentation className="w-5 h-5 text-primary mr-2" />
                  Pitching
                </h4>
                <p className="text-muted-foreground">
                  Experienced in crafting and delivering compelling pitches for products and ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
