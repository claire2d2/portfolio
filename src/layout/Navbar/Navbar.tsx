import useSettings from "../../context/useSettings";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// style
import "./Navbar.css";
import useScrollListener from "../../context/useScrollListener";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const { darkMode, setDarkMode, setLanguage } = useSettings();
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();

  // make navbar disappear when scrolling down and reappear when scrolling up
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 50 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  // handle dark mode
  // function to set a given theme/color-scheme
  function setTheme(themeName: string) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setDarkMode(false);
    } else {
      setTheme("theme-dark");
      setDarkMode(true);
    }
  }

  // Immediately invoked function to set the theme on initial load
  (function () {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  })();

  function handleDarkMode() {
    setDarkMode(!darkMode);
    toggleTheme();
  }

  // display correct icon depending on dark mode
  useEffect(() => {
    toggleTheme();
  }, []);

  // handle language change
  function changeLanguage(lang: string) {
    setLanguage(lang);
  }

  //TODO make navbar appear and disappear en fonction du scroll
  return (
    <nav className={navClassList.join(" ")}>
      <div className="nav-title">Claire Song</div>
      <div className="pages">
        <ul>
          <li>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#experiences">
              Experiences
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="settings">
        <div>
          <select
            name="language"
            id="language"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
        <button onClick={handleDarkMode}>
          {darkMode ? <HiMoon /> : <HiSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
