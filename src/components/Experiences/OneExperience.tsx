import { ReactNode } from "react";
type OneExperienceProps = {
  jobTitle: string;
  company: string;
  companyLink: string;
  date: string;
  children: ReactNode;
};

const OneExperience: React.FC<OneExperienceProps> = ({
  jobTitle,
  company,
  companyLink,
  date,
  children,
}) => {
  return (
    <div className="one-experience">
      <div className="exp-details">
        <div className="job-title">
          <div className="bullet" />
          {jobTitle}{" "}
          <a href={companyLink} target="_blank">
            @{company}
          </a>
        </div>
        <div>{date} </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default OneExperience;
