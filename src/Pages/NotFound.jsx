import { StarBackground } from "../assets/components/StarBackgrounnd"

export const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <StarBackground />

      <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
        <h1 className="text-9xl font-bold text-primary opacity-20 select-none blur-sm animate-pulse-subtle">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Page Not Found
          </h2>
        </div>

        <p className="text-xl text-muted-foreground max-w-md mx-auto mt-20">
          Oops! The galaxy you are looking for seems to have drifted into a black hole.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 mt-8 bg-primary rounded-full text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}