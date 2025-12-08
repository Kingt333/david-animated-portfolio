import { cn } from "./lib/utils";

export const SectionWrapper = ({ children, id, className }) => {
  return (
    <section id={id} className={cn("py-20 md:py-32 min-h-screen flex items-center justify-center relative z-10", className)}>
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};
