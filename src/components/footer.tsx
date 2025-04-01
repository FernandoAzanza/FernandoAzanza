import Link from "next/link"
import { Linkedin, Github, ArrowUp, Palmtree } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold text-primary flex items-center">
              <Palmtree className="w-5 h-5 mr-2" />
              Fernando Azanza
            </Link>
            <p className="text-white/70 mt-2">Made with passion and innovation</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/fernando-azanza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/FernandoAzanza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Fernando Azanza. All rights reserved.
          </p>

          <Link
            href="#home"
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

