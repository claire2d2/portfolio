import { useState } from "react";
import "./Experiences.css";
import OneExperience from "./OneExperience";
const Experiences = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
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
          <OneExperience
            jobTitle="Digital transformation consultant"
            company="mc2i"
            companyLink="https://mc2i.fr"
            date="March 2022 - Present"
          >
            <div>Job description</div>
          </OneExperience>
          <OneExperience
            jobTitle="CRM Project Manager"
            company="Euris"
            companyLink="https://euris.fr"
            date="July 2021 - March 2022"
          >
            <div>Handling 4 accounts in the APAC region</div>
          </OneExperience>

          {!showMore && (
            <button onClick={() => setShowMore(!showMore)}>Show more</button>
          )}

          {showMore && (
            <div>
              <OneExperience
                jobTitle="Project Manager"
                company="Fonction:Support"
                companyLink="https://fonction-support.fr"
                date="May 2020 - June 2021"
              >
                <div>Handling 4 accounts in the APAC region</div>
              </OneExperience>
              <OneExperience
                jobTitle=" IT Consultant & Recruitment Manager"
                company="Solutec"
                companyLink="https://solutec.fr"
                date="July 2018- May 2020"
              >
                <div>Handling 4 accounts in the APAC region</div>
              </OneExperience>
            </div>
          )}
          {showMore && (
            <button onClick={() => setShowMore(!showMore)}>Show less</button>
          )}
        </div>
      </section>
      <section className="part">
        <h2>Education</h2>
        <div>
          <div>
            <h5>Ironhack</h5>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem omnis culpa provident asperiores debitis labore, ea
              maxime quos sunt accusantium commodi ab praesentium fuga odio
              veniam, dicta harum. Doloremque, inventore?
            </div>
          </div>
          <div>
            <h5>emlyon business school</h5>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem omnis culpa provident asperiores debitis labore, ea
              maxime quos sunt accusantium commodi ab praesentium fuga odio
              veniam, dicta harum. Doloremque, inventore?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
