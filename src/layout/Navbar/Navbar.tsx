import useSettings from "../../context/useSettings";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./Navbar.css";
import { HiMoon, HiSun } from "react-icons/hi";
const Navbar = () => {
  const { darkMode, setDarkMode } = useSettings();
  const [currLocation, setCurrLocation] = useState<string>("");

  useEffect(() => {
    setCurrLocation(location.pathname.split("/")[1]);
  }, []);

  const navigate = useNavigate();

  function changeLocation(destination: string) {
    navigate(`/${destination}`);
    setCurrLocation(destination);
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  //TODO make navbar appear and disappear en fonction du scroll
  return (
    <nav>
      <div>
        <button onClick={() => changeLocation("")}>Claire Song</button>
      </div>
      <div className="pages">
        <ul>
          <li className={currLocation === "about" ? "featured" : ""}>
            <button onClick={() => changeLocation("about")}>About me</button>
          </li>
          <li className={currLocation === "projects" ? "featured" : ""}>
            <button onClick={() => changeLocation("projects")}>Projects</button>
          </li>
          <li className={currLocation === "experiences" ? "featured" : ""}>
            <button onClick={() => changeLocation("experiences")}>
              Experiences
            </button>
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
