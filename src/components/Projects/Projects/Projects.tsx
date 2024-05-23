import { useState } from "react";

import allProjects from "../../../data/projects.json";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import OneProject from "../OneProject/OneProject";
import "./Projects.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Projects = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);
  return (
    <div className="Projects">
      <h2>Some of my projects:</h2>
      <FeaturedProjects />

      <div className="all-projects">
        <div
          className="show-projects-button"
          onClick={() => setShowProjects(!showProjects)}
        >
          <div>See all my projects</div>
          <div className="sign">
            {showProjects ? <HiChevronUp /> : <HiChevronDown />}
          </div>
        </div>
        {showProjects && (
          <div className="show-projects">
            {allProjects.map((project) => {
              return (
                <OneProject
                  name={project.name}
                  date={project.date}
                  description={project.description}
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
