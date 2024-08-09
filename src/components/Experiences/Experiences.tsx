import { useState } from "react";
import useSettings from "../../context/useSettings";
import "./Experiences.css";
import OneExperience from "./OneExperience";
const Experiences = () => {
  const { language } = useSettings();
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="Experiences">
      <section className="skills-part">
        <h2>{language === "en" ? "Technical Skills:" : "Compétences tech"}</h2>
        <div className="skills-content">
          <div className="skills">
            <h3>{language === "en" ? "Languages" : "Langages"}</h3>
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
                Web Developer{" "}
                {language === "en" ? "@Your Company?" : "@Chez vous ? "}
              </div>
              <div>March 2024 - Present </div>
            </div>
          </div>
          <OneExperience
            jobTitle="Digital transformation consultant"
            company="mc2i"
            companyLink="https://mc2i.fr"
            date="March 2022 - Present"
          />
          <OneExperience
            jobTitle="CRM Project Manager"
            company="Euris"
            companyLink="https://euris.fr"
            date="July 2021 - March 2022"
          ></OneExperience>

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
              ></OneExperience>
              <OneExperience
                jobTitle=" IT Consultant & Recruitment Manager"
                company="Solutec"
                companyLink="https://solutec.fr"
                date="July 2018- May 2020"
              ></OneExperience>
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
            {language === "en" ? (
              <div>
                9 week intensive bootcamp to become a certified Web Developer.
              </div>
            ) : (
              <div>
                Formation intensive de 9 semaines en développement Web,
                certifiante RNCP Niveau 6.
              </div>
            )}
          </div>
          <div>
            <h5>emlyon business school</h5>
            <div>Msc in Management</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
