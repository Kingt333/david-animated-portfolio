import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from './lib/utils';

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",

      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 z-50 group">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 bg-300% animate-gradient group-hover:animate-pulse">
            DAVID
          </span>
          <span className="text-foreground font-medium size-4xl">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm px-4 py-1.5 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/5 rounded-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="border-l border-border/50 pl-6 ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-foreground/90 hover:text-primary transition-colors focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background/98 backdrop-blur-xl transition-all duration-300 md:hidden f",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          {/* Close Button inside Overlay */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-foreground/80 hover:text-primary transition-colors"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-10 left-0 right-0 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} David's Portfolio
          </div>
        </div>
      </div>
    </nav>
  );
};
