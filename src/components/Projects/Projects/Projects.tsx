import { useState } from "react";
import useSettings from "../../../context/useSettings";

import allProjects from "../../../data/projects.json";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import OneProject from "../OneProject/OneProject";
import "./Projects.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Projects = () => {
  const { language } = useSettings();
  const [showProjects, setShowProjects] = useState<boolean>(false);
  return (
    <div className="Projects">
      <h2>
        {language === "en"
          ? "Some of my projects:"
          : "Quelques uns de mes projets"}
      </h2>
      <FeaturedProjects />

      <div className="all-projects">
        <div
          className="show-projects-button"
          onClick={() => setShowProjects(!showProjects)}
        >
          <div>
            {language === "en"
              ? "See all my projects"
              : "Voir tous mes projets"}
          </div>
          <div className="sign">
            {showProjects ? <HiChevronUp /> : <HiChevronDown />}
          </div>
        </div>
        {showProjects && (
          <div className="show-projects">
            {allProjects.map((project) => {
              return (
                <OneProject
                  name={language === "en" ? project.name : project.nom}
                  date={project.date}
                  description={
                    language === "en"
                      ? project.description
                      : project.description_fr
                  }
                  labels={project.labels}
                  codeLink={project.code}
                  link={project.link}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
