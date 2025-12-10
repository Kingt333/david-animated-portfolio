
import { StarBackground } from "../assets/components/StarBackgrounnd"
import { Navbar } from "../assets/components/Navbar"
import { HeroSection } from "../assets/components/HeroSection"
import { SectionWrapper } from "../assets/components/SectionWrapper"
import { AboutMe } from "../assets/components/AboutMe"
import { Skills } from "../assets/components/Skills"
import { Projects } from "../assets/components/Projects"
import { Contact } from "../assets/components/Contact"
import { Footer } from "../assets/components/Footer"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">

    {/* background effects */}
    <StarBackground />

    {/* Navbar */}
    <Navbar />

    {/* Main content */}
    <main className="flex flex-col">
      <HeroSection id="home" />
      <SectionWrapper id="about">
        <AboutMe />
      </SectionWrapper>
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>

    {/* Footer */}
    <Footer />
  </div>
}