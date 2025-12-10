import { Moon, Sun } from "lucide-react";
import { cn } from "./lib/utils";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = useTheme();

  // Determine if we are effectively dark (for icon display)
  // If theme is system, we might want to check preference, but for the toggle button state
  // usually it's cleaner to just show "Light" icon if current resolved is dark, etc.
  // But here, let's keep it simple: if theme is 'dark', show Sun (to switch to light), else Moon.
  // However, with 'system' it can be tricky. 
  // Let's simplify: Toggle cycles Light -> Dark -> Light. (Ignoring system for explicit toggle for now, or just handling basic bool)
  // The Context handles system logic. Let's just check if resolved class contains 'dark' on html?
  // Context exposes `theme` state ('dark', 'light', 'system').

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-none hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-all hover:text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-500 transition-all hover:text-blue-400" />
      )}
    </button>
  );
};
