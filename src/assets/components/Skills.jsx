import { SectionWrapper } from "./SectionWrapper"
import { Monitor, Server, Database, Container, Code2, PenTool } from "lucide-react"

const skillsData = [
  {
    category: "Frontend",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-green-400" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    category: "Tools & DevOps",
    icon: <Container className="w-8 h-8 text-orange-400" />,
    skills: ["Docker", "Git", "AWS", "CI/CD", "Figma"],
  },
]

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-background/50 backdrop-blur-3xl">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 text-glow">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of technologies I've mastered to build full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-fade-in-delay-1"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-background shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.category}</h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between group/skill">
                  <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                    {skill}
                  </span>
                  <div className="w-full max-w-[50%] h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 group-hover:w-[100%]"
                      style={{ width: '0%' }}
                    />
                    {/* Note: In a real app, width would be based on proficiency. 
                        Here using a hover effect to 'fill' the bar for interactivity. 
                        For static initial state, we could set specific widths. */}
                    <style jsx>{`
                        .group:hover .bg-primary {
                            width: ${Math.floor(Math.random() * (100 - 70) + 70)}%; 
                        }
                     `}</style>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
