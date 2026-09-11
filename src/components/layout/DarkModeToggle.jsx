import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#12372A] transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

export default DarkModeToggle;