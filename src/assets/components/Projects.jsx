import { SectionWrapper } from "./SectionWrapper"
import { ExternalLink, Github } from "lucide-react"

import img1 from "../images/Screenshot 2025-09-10 104523.jpg"
import img2 from "../images/Screenshot 2025-09-10 104800.jpg"
import img3 from "../images/Screenshot 2025-09-10 105023.jpg"
import img4 from "../images/Screenshot 2025-09-10 105410.jpg"
import img5 from "../images/Screenshot 2025-09-10 105636.jpg"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: img2,
    github: "https://github.com/kingt333/Davshop",
    live: "https://davshop.vercel.app/"
  },
  {
    title: "Login page",
    description: "A login page for a website.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: img3,
    github: "https://github.com/kingt333/Login-page",
    live: "https://loginpage.vercel.app/"
  },
  {
    title: "Todo app",
    description: "A simple todo app with add, delete, and update functionality.",
    tags: ["React", "Python", "FastAPI", "Supabase"],
    image: img1,
    github: "https://github.com/kingt333/Todo-app",
    live: "https://todoapp.vercel.app/"
  },
  {
    title: "Clean energy website",
    description: "A website for a clean energy company.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    image: img4,
    github: "https://github.com/kingt333/Clean-energy",
    live: "https://cleanenergy-xi.vercel.app/"
  },

  {
    title: "Youtube clone",
    description: "A clone of the popular video sharing platform.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    image: img5,
    github: "https://github.com/kingt333/Youtube-clone",
    live: "https://youtubeclone.vercel.app/"
  }
]

export const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-4xl font-bold text-center mb-16 text-glow animate-fade-in">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-delay-2"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Image Overlay */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
