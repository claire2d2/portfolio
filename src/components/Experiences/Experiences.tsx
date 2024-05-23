import "./Experiences.css";
const Experiences = () => {
  return (
    <div className="Experiences">
      <section className="skills-part">
        <h2>Technical Skills:</h2>
        <div className="skills-content">
          <div className="skills">
            <h3>Languages</h3>
            <ul>
              <li>Javascript (ES6)</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Tools</h3>
            <ul>
              <li>Git / Github</li>
              <li>MongoDB</li>
              <li>Chome DevTools</li>
              <li>Thunder Client</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="part">
        <h2>Experiences:</h2>

        <div className="exp-content">
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet bullet-tech" />
                Web Developer @Your Company ?
              </div>
              <div>March 2024 - Present </div>
              <div>To be continued ...</div>
            </div>
          </div>
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                Digital transformation consultant{" "}
                <a href="https://mc2i.fr" target="_blank">
                  @mc2i
                </a>
              </div>
              <div>March 2022 </div>
              <div>Job description</div>
            </div>
          </div>
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                CRM Project Manager{" "}
                <a href="https://euris.fr" target="_blank">
                  @Euris
                </a>
              </div>
              <div>July 2021 - March 2022</div>
              <div>Handling 4 accounts in the APAC region</div>
            </div>
          </div>
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                Project Manager @Fonction:Support
              </div>
              <div>May 2020 - June 2021</div>
              <div>Job description</div>
            </div>
          </div>
          <div className="one-experience">
            <div className="exp-details">
              <div className="job-title">
                <div className="bullet" />
                IT Consultant & Recruitment Manager{" "}
                <a href="https://solutec.fr">@Solutec</a>
              </div>
              <div>July 2018- May 2020</div>
              <div>Job description</div>
            </div>
          </div>
        </div>
      </section>
      <section className="part">
        <h2>Education</h2>
        <div>Ironhack, emlyon, ECNU</div>
      </section>
      <section className="part">
        <h2>Certifications</h2>
        <div>Cybersecurity</div>
        <div>Working on CS50</div>
      </section>
    </div>
  );
};

export default Experiences;
