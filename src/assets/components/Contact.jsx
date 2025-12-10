import { SectionWrapper } from "./SectionWrapper"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-background to-background/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8 animate-fade-in-delay-1">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-glow">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email Me</h4>
                <p className="text-sm text-muted-foreground">oluwatosinjohn316@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground">lagos ikorodu, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="https://github.com/oluwatosinjohn316"
                className="p-3 rounded-full bg-card border border-border/50 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative animate-fade-in-delay-2">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
          <form className="relative bg-card p-8 rounded-2xl border border-border/50 shadow-xl space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="button"
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </SectionWrapper>
  )
}
