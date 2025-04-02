"use client"

import { useMemo, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false)

  const roles = useMemo(() => ["Product Manager", "Software Engineer", "CS Student"], [])

  useEffect(() => {
    const handleTyping = () => {
      if (!initialAnimationComplete) {
        setInitialAnimationComplete(true)
        setTypingSpeed(1000)
        return
      }

      const i = loopNum % roles.length
      const roleText = roles[i]

      if (!isDeleting) {
        setDisplayText(roleText.substring(0, displayText.length + 1))
        setTypingSpeed(100)

        if (displayText === roleText) {
          setIsDeleting(true)
          setTypingSpeed(1500)
        }
      } else {
        setDisplayText(roleText.substring(0, displayText.length - 1))
        setTypingSpeed(50)

        if (displayText === "") {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
          setTypingSpeed(500)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, initialAnimationComplete, roles])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-white via-[#f0f7f7] to-[#e6f0ea] pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-tropical-pattern opacity-50"></div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-slideInLeft">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
            <div className="mb-2">Hi, I&#39;m Fernando Azanza</div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-primary">
              I&#39;m a{" "}
              <span className="inline-block">
                {initialAnimationComplete ? displayText.replace("and I'm a ", "") : ""}
                <span className="inline-block w-1 h-8 bg-primary/50 ml-1 animate-blink"></span>
              </span>
            </div>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
            Building innovative solutions at the intersection of technology and user experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#about"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-primary text-foreground font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end animate-slideInRight">
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <Image
              src="/FA_Headshot.png"
              alt="Fernando Azanza"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-primary" />
      </a>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-40 bg-accent/10 rotate-45 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-20 bg-secondary/20 -rotate-45 rounded-full blur-3xl"></div>
    </section>
  )
}
