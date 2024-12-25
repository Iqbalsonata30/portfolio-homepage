import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ModeButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    }
    return false;
  });

  const [isRotating, setIsRotating] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setIsRotating(true);
    setDarkMode(!darkMode);
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700
      transition-all duration-500 transform-gpu
      -mr-2 md:-mr-0
      ${isRotating ? "rotate-[360deg] scale-110" : "rotate-0 scale-100"}
      group 
      `}
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6 ">
        <Sun
          className={`
                  w-6 h-6 
                  absolute 
                  transition-all duration-500
                  text-gray-800 dark:text-yellow-300
                  ${darkMode ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"}
                `}
        />
        <Moon
          className={`
                  w-6 h-6 
                  absolute 
                  transition-all duration-500
                  text-gray-800 dark:text-gray-200
                  ${darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"}
                `}
        />
      </div>
    </button>
  );
};

export default ModeButton;
