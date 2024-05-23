import "./FeaturedProjects.css";
import { HiCode, HiExternalLink } from "react-icons/hi";
import air2d2 from "../../../assets/images/air2d2-screenshot.png";
import cache from "../../../assets/images/cachethemall-screenshot.png";
const FeaturedProjects = () => {
  return (
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
              The website accompanies users in their training for aerial arts
              (pole dance, aerial hoop and contorsion). All{" "}
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
            <a href="https://github.com/claire2d2/aerial-front" target="_blank">
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
              A nostalgic SPA developed using React in a team of three, where
              you can view data on the first three generations of pokemon, and{" "}
              <span>create</span> customized teams.
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
            <a href="https://github.com/claire2d2/poke-project" target="_blank">
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
    </div>
  );
};

export default FeaturedProjects;
