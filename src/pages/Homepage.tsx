import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom";
import useSettings from "../context/useSettings";

import About from "../components/About/About";

import "./Homepage.css";
import meImg from "../assets/images/me.jpeg";
import { HiCode, HiExternalLink } from "react-icons/hi";
import air2d2 from "../assets/images/air2d2-screenshot.png";
import cache from "../assets/images/cachethemall-screenshot.png";
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

  // scroll to top when clicking on a link
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
      <section className="project-section" id="projects">
        <h2>Some of my projects:</h2>
        <div>
          <div className="featured-project">
            <div className="project-details">
              <h4>
                <a href="https://air2d2.netlify.app" target="_blank">
                  Air2d2
                </a>
              </h4>
              <div className="project-desc">
                <p>
                  This was my <span>first Full Stack project</span>, joining my
                  passion for coding and aerial arts! I developed this during my
                  Ironhack web development bootcamp in under two weeks.
                </p>
                <p>
                  The website accompanies users in their training for aerial
                  arts (pole dance, aerial hoop and contorsion). All{" "}
                  <span>CRUD operations</span> are fully functional in the app.
                </p>
              </div>
              <div className="tech-labels">
                <img
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white"
                  alt="typescript"
                />
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"
                  alt="react"
                />
                <img
                  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white"
                  alt="tailwind"
                />
                <img
                  src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white"
                  alt="Node.js"
                />
                <img
                  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB"
                  alt="Express.js"
                />
                <img
                  src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white"
                  alt="MongoDB"
                />
              </div>
              <div className="project-source">
                <a
                  href="https://github.com/claire2d2/aerial-front"
                  target="_blank"
                >
                  <HiCode />
                </a>
                <a href="https://air2d2.netlify.app/" target="_blank">
                  <HiExternalLink />
                </a>
              </div>
            </div>
            <div className="project-screen">
              <a href="https://air2d2.netlify.app" target="_blank">
                <img src={air2d2} alt="screenshot of air2d2 project" />
              </a>
            </div>
          </div>
          <div className="featured-project">
            <div className="project-details">
              <h4>
                <a href="https://cache-them-all.netlify.app" target="_blank">
                  Gotta Cache Them All
                </a>
              </h4>
              <div className="project-desc">
                <p>
                  A nostalgic SPA developed using React in a team of three,
                  where you can view data on the first three generations of
                  pokemon, and <span>create</span> customized teams.
                </p>
                <p>
                  This app was my first serious foray with
                  <span>Typescript and Tailwind</span> (both self-taught as both
                  were not part of the Ironhack curriculum).
                </p>
              </div>
              <div className="tech-labels">
                <img
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white"
                  alt="typescript"
                />
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"
                  alt="react"
                />
                <img
                  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white"
                  alt="tailwind"
                />
              </div>
              <div className="project-source">
                <a
                  href="https://github.com/claire2d2/poke-project"
                  target="_blank"
                >
                  <HiCode />
                </a>
                <a href="https://cache-them-all.netlify.app" target="_blank">
                  <HiExternalLink />
                </a>
              </div>
            </div>
            <div className="project-screen">
              <a href="https://cache-them-all.netlify.app" target="_blank">
                <img src={cache} alt="screenshot of air2d2 project" />
              </a>
            </div>
          </div>
          <div className="link-to">
            <Link to="/projects" onClick={scrollToTop}>
              See the rest of my projects
            </Link>
          </div>
        </div>
      </section>

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
