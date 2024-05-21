import "./Experiences.css";
const Experiences = () => {
  return (
    <div className="Experiences">
      <h1>Experiences & Education</h1>
      <section className="part">
        <h2>Technical skills</h2>
      </section>
      <section className="part">
        <h2>Soft skills</h2>
      </section>
      <section className="part">
        <h2>Experience:</h2>

        <div className="exp-content">
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                Digital transformation consultant
              </div>
              <div>
                <a href="https://mc2i.fr" target="_blank">
                  mc2i
                </a>
              </div>
              <div>Job description</div>
            </div>
          </div>
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                CRM Project Manager
              </div>
              <div>
                <a href="https://mc2i.fr" target="_blank">
                  mc2i
                </a>
              </div>
              <div>Job description</div>
            </div>
          </div>
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                Project Manager
              </div>
              <div>
                <a href="https://mc2i.fr" target="_blank">
                  mc2i
                </a>
              </div>
              <div>Job description</div>
            </div>
          </div>
          <div>See all my </div>
        </div>
      </section>
      <h2>Education</h2>
      <h2>Other certifications</h2>
    </div>
  );
};

export default Experiences;
