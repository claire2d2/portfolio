import "./OneProject.css";
import { HiCode, HiExternalLink } from "react-icons/hi";

type OneProjectProps = {
  name: string;
  date: string;
  description: string;
  labels: string[];
  codeLink: string;
  link: string | null;
};

const OneProject: React.FC<OneProjectProps> = ({
  name,
  date,
  description,
  labels,
  codeLink,
  link,
}) => {
  return (
    <div className="projectStyle">
      <div className="project-header">
        <div>
          <h4>{name}</h4>
          <div className="project-date">{date}</div>
        </div>
        <div className="source-code">
          <a href={codeLink} target="_blank">
            <HiCode />
          </a>
          {link && (
            <a href={link} target="_blank">
              <HiExternalLink />
            </a>
          )}
        </div>
      </div>

      <div className="project-desc">{description}</div>
      <div className="labels">
        {labels.map((label) => {
          return <div className="one-label">{label}</div>;
        })}
      </div>
    </div>
  );
};

export default OneProject;
