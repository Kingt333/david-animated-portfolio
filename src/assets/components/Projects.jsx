import { SectionWrapper } from "./SectionWrapper"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80", // Placeholder
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool for teams to organize tasks and track progress.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80", // Placeholder
    github: "#",
    live: "#"
  },
  {
    title: "AI Content Generator",
    description: "SaaS application leveraging OpenAI to help marketers generate blog posts and social media copy.",
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", // Placeholder
    github: "#",
    live: "#"
  },
{
  title: "Clean energy website",
  description: "A website for a clean energy company.",
  tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
  image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80", // Placeholder
  github: "#",
  live: "#"
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
