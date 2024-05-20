import OneProject from "../../components/Projects/OneProject";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      <div className="allProjects">
        <div className="oneProject">
          <OneProject />
        </div>
        <div className="oneProject">
          <OneProject />
        </div>
        <div className="oneProject">
          <OneProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
