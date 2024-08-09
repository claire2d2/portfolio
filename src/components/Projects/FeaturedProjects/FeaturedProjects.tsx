import "./FeaturedProjects.css";
import useSettings from "../../../context/useSettings";
import { HiCode, HiExternalLink } from "react-icons/hi";
import air2d2 from "../../../assets/images/air2d2-screenshot.png";
import cache from "../../../assets/images/cachethemall-screenshot.png";
const FeaturedProjects = () => {
  const { language } = useSettings();
  return (
    <div>
      <div className="featured-project">
        <div className="project-details">
          <h4>
            <a href="https://air2d2.netlify.app" target="_blank">
              Air2d2
            </a>
          </h4>
          {language === "en" ? (
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
          ) : (
            <div className="project-desc">
              <p>
                Mon <span>premier projet Full Stack</span>, alliant ma passion
                pour la programmation ainsi que ma passion pour les arts
                aériens. J'ai développé ce projet en moins de deux semaines
                durant mon bootcamp Ironhack.joining my passion for coding and
                aerial arts!
              </p>
              <p>
                Ce site web accompagne les utilisateurs dans leurs entraînements
                de pole dance et de cerceau aérien. Toutes les
                <span> opérations CRUD </span> sont opérationnelles dans l'app.
              </p>
            </div>
          )}
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
          {language === "en" ? (
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
          ) : (
            <div className="project-desc">
              <p>
                Un SPA à base de nostalgie développé par moi, Raphaël et Ivan en
                utilisant React, où l'on peut{" "}
                <span>visionner les données </span>sur les trois premières
                générations de pokémon, et y{" "}
                <span>créer des équipes customisées</span>.
              </p>
              <p>
                Cette appli était ma première expérience sérieuse avec
                <span> Typescript et Tailwind</span> (apprises de manière
                autonome sur le tas, les deux ne faisant pas partie du
                curriculum Ironhack).
              </p>
            </div>
          )}
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
