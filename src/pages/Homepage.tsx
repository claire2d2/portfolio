import { useState } from "react";
import { HashLink } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom";
import useSettings from "../context/useSettings";

import About from "../components/About/About";
import Projects from "../components/Projects/Projects/Projects";

import "./Homepage.css";
import meImg from "../assets/images/me.jpeg";
import { HiExternalLink } from "react-icons/hi";
import resume from "../assets/resume/CV_ClaireSong_FR.pdf";

const Homepage = () => {
  const { language } = useSettings();
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [professionEn, setProfessionEn] = useState<string>("Web Developer");
  const [professionFr, setProfessionFr] = useState<string>("Développeuse Web");

  setTimeout(() => {
    setIsTyping(!isTyping);
  }, 2000);
  // TODO : clean up

  // english

  setTimeout(() => {
    if (professionEn === "Web Developer") {
      setProfessionEn("Bad karaoke singer");
    }
    if (professionEn === "Bad karaoke singer") {
      setProfessionEn("Manga enthusiast");
    }
    if (professionEn === "Manga enthusiast") {
      setProfessionEn("Pole dance amateur");
    }
    if (professionEn === "Pole dance amateur") {
      setProfessionEn("Web Developer");
    }
  }, 4000);

  // french

  setTimeout(() => {
    if (professionFr === "Développeuse Web") {
      setProfessionFr("Chanteuse sous la douche");
    }
    if (professionFr === "Chanteuse sous la douche") {
      setProfessionFr("Fan de manga");
    }
    if (professionFr === "Fan de manga") {
      setProfessionFr("Amatrice de pole dance");
    }
    if (professionFr === "Amatrice de pole dance") {
      setProfessionFr("Développeuse Web");
    }
  }, 4000);

  return (
    <div>
      <section className="header" id="top">
        <div className="picture">
          <img src={meImg} alt="picture of Claire Song" />
        </div>
        <div className="intro">
          <h1>Hello world ✌️</h1>
          {language === "en" ? (
            <div>I'm Claire, and I'm a :</div>
          ) : (
            <div>Je m'appelle Claire, et je suis : </div>
          )}
          <div className="typing-container">
            <div className={isTyping ? "erasing" : "typed-out"}>
              {language === "en" ? professionEn : professionFr}
            </div>
          </div>
        </div>
      </section>
      <About />
      <section className="part">
        <h2>Skills:</h2>
        <div className="part-content">
          <div className="skills">
            <h3>Languages</h3>
            <ul>
              <li>Javascript (ES6)</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Tools</h3>
            <ul>
              <li>Git / Github</li>
              <li>MongoDB</li>
              <li>Chome DevTools</li>
              <li>Thunder Client</li>
            </ul>
          </div>
        </div>
      </section>
      <Projects />
      <section className="project-section" id="projects"></section>

      <section className="resume">
        <a href={resume} target="_blank">
          <div>My resume</div> <HiExternalLink />
        </a>
      </section>
      <section>
        Feel free to navigate the rest of the website to see more details about
        my projects, my past experiences/education and my pastmes. I am
        currently available to work for Paris-based or fully remote positions.
        <div>
          <HashLink smooth to="#top">
            Scroll back to top
          </HashLink>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
