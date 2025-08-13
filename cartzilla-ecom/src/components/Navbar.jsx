import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = stored ? stored === "dark" : systemPrefersDark;

    setDarkMode(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        Cartzilla
      </div>
      <button
        onClick={toggleTheme}
        className="flex items-center px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.22a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zM18 9a1 1 0 100 2h-2a1 1 0 100-2h2zm-2.22 6.78a1 1 0 01-1.42 1.42l-1.42-1.42a1 1 0 011.42-1.42l1.42 1.42zM10 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-6.78-2.22a1 1 0 01-1.42-1.42l1.42-1.42a1 1 0 011.42 1.42l-1.42 1.42zM2 11a1 1 0 100-2h2a1 1 0 100 2H2zm2.22-6.78a1 1 0 011.42-1.42l1.42 1.42a1 1 0 01-1.42 1.42L4.22 4.22z" />
          </svg>
        )}
      </button>
    </nav>
  );
};
export default Navbar;
