type OneExperienceProps = {
  jobTitle: string;
  company: string;
  companyLink: string;
  date: string;
};

const OneExperience: React.FC<OneExperienceProps> = ({
  jobTitle,
  company,
  companyLink,
  date,
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
      </div>
    </div>
  );
};

export default OneExperience;
