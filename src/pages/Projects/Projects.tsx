import { HashLink } from "react-router-hash-link";

import allProjects from "../../data/projects.json";

import OneProject from "../../components/Projects/OneProject";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <h2>👩🏻‍💻Projects👩🏻‍💻</h2>
      <div className="allProjects">
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
      <div>
        <HashLink to="/#projects">Back to homepage</HashLink>
      </div>
    </div>
  );
};

export default Projects;
