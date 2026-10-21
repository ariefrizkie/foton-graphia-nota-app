import { useEffect, useState } from "react";
import { MoonIcon, Sun } from "lucide-react";
import { color } from "../../utils/dataColorLight";

function DarkMode() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`flex gap-2 p-3 rounded-full  ${color.navHover}`}>
      <button
        onClick={toggleTheme}
        className="text-light-nav-active-text cursor-pointer dark:text-dark-nav-active-text"
        data-mode-btn="light"
      >
        {theme === "light" ? <MoonIcon /> : <Sun />}
      </button>
    </div>
  );
}

export default DarkMode;
