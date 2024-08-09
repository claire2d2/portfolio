import { useState } from "react";
import { HashLink } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom";
import useSettings from "../context/useSettings";

import About from "../components/About/About";
import Details from "../components/Details/Details";
import Projects from "../components/Projects/Projects/Projects";
import Experiences from "../components/Experiences/Experiences";
// import Contact from "../components/Contact/Contact";

import "./Homepage.css";
import meImg from "../assets/images/me.jpeg";
import { HiExternalLink } from "react-icons/hi";
import resume from "../assets/resume/CVSiteFR.pdf";

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
    <div id="#top">
      <section className="header">
        <div className="picture">
          <img src={meImg} alt="picture of Claire Song" />
        </div>
        <div id="about" />
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
      <Details />
      <div id="projects" />
      <Projects />
      <div id="experiences" />
      <Experiences />
      <section className="resume">
        <a href={resume} target="_blank">
          <div>{language === "en" ? "My resume" : "Mon CV"}</div>{" "}
          <HiExternalLink />
        </a>
      </section>
      {/* <Contact /> */}
      <div className="scroll-to-top">
        <HashLink smooth to="#top">
          🚀Bop bop bop bop to the top🚀
        </HashLink>
      </div>
    </div>
  );
};

export default Homepage;
