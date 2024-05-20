import useSettings from "../../context/useSettings";

// style
import "./Navbar.css";
import { HiMoon, HiSun } from "react-icons/hi";
const Navbar = () => {
  const { darkMode, setDarkMode } = useSettings();

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  //TODO make navbar appear and disappear en fonction du scroll
  return (
    <nav>
      <div>Claire Song</div>
      <div className="pages">
        <ul>
          <li>About me</li>
          <li>Projects</li>
          <li>Experiences</li>
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
