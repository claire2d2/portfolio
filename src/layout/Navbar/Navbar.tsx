import useSettings from "../../context/useSettings";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./Navbar.css";
import useScrollListener from "../../context/useScrollListener";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const { darkMode, setDarkMode } = useSettings();
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();
  const [currLocation, setCurrLocation] = useState<string>("");

  // make navbar disappear when scrolling down and reappear when scrolling up
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 50 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  // highlight link if the user is currently at that page
  useEffect(() => {
    setCurrLocation(location.pathname.split("/")[1]);
  }, []);

  const navigate = useNavigate();

  function changeLocation(destination: string) {
    navigate(`/${destination}`);
    setCurrLocation(destination);
  }

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

  //TODO make navbar appear and disappear en fonction du scroll
  return (
    <nav className={navClassList.join(" ")}>
      <div>
        <button onClick={() => changeLocation("")}>Claire Song</button>
      </div>
      <div className="pages">
        <ul>
          <li className={currLocation === "projects" ? "featured" : ""}>
            <button onClick={() => changeLocation("projects")}>Projects</button>
          </li>
          <li className={currLocation === "experiences" ? "featured" : ""}>
            <button onClick={() => changeLocation("experiences")}>
              Experiences
            </button>
          </li>
          <li className={currLocation === "other" ? "featured" : ""}>
            <button onClick={() => changeLocation("other")}>Other</button>
          </li>
        </ul>
      </div>
      <div className="settings">
        <div>
          <select name="language" id="language">
            <option value="lang-en">EN</option>
            <option value="lang-fr">FR</option>
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
