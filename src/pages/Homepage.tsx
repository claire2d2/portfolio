import { useState } from "react";

import "./Homepage.css";

const Homepage = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [profession, setProfession] = useState<string>("Web Developer");

  setTimeout(() => {
    setIsTyping(!isTyping);
  }, 2000);
  // TODO : clean up
  setTimeout(() => {
    if (profession === "Web Developer") {
      setProfession("Bad karaoke singer");
    }
    if (profession === "Bad karaoke singer") {
      setProfession("Manga enthusiast");
    }
    if (profession === "Manga enthusiast") {
      setProfession("Pole dance amateur");
    }
    if (profession === "Pole dance amateur") {
      setProfession("Web Developer");
    }
  }, 4000);

  return (
    <div>
      <section className="header">
        <h1>Hi there! ✌️</h1>
        <div>I'm Claire, and I'm a :</div>
        <div className="typing-container">
          <div className={isTyping ? "erasing" : "typed-out"}>{profession}</div>
        </div>
      </section>
      <section className="part">
        <h2>About me :</h2>
        <div className="part-content">
          <div>
            <p>
              I started my career 5 years ago as a Recruitment Manager for tech
              profiles before moving on to Project Manager roles, focusing on
              digital transformation. During this time, I was simultaneously
              happy to learn new things, but also increasingly frustrated with
              not deeply understanding the technical issues I was working with,
              delegating that task to other people.
            </p>
            <p>
              This led me to pursue a certification in Web Development with
              Ironhack, where I graduated top of my class. I now wish to apply
              my newfound knowledge in a fast-paced environment, where I can
              keep on learning, and hopefully one day, create opportunities for
              other people to learn from me as well. My previous experiences
              have proven me to be a fast learner, to be able to adapt very
              quickly to new environments and always make my colleagues smile! I
              am confident that I have the skills and thirst to learn that will
              enable me to thrive in this new stage of my professional career.
            </p>
          </div>
        </div>
      </section>
      <section className="part">
        <h2>Skills:</h2>
        <div className="part-content">
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
      <section className="projects">
        <h2>Featured projects:</h2>
        <p>Insert link to all projects here</p>
      </section>
      <section>My resume</section>
      <section>
        <h2>Experience:</h2>
        <div>See details</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi,
          reprehenderit a fuga ab officiis aut vero qui laborum, non alias.
          Corporis autem culpa repellat consequuntur alias, minus ipsa
          assumenda!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi,
          reprehenderit a fuga ab officiis aut vero qui laborum, non alias.
          Corporis autem culpa repellat consequuntur alias, minus ipsa
          assumenda!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi,
          reprehenderit a fuga ab officiis aut vero qui laborum, non alias.
          Corporis autem culpa repellat consequuntur alias, minus ipsa
          assumenda!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi,
          reprehenderit a fuga ab officiis aut vero qui laborum, non alias.
          Corporis autem culpa repellat consequuntur alias, minus ipsa
          assumenda!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi,
          reprehenderit a fuga ab officiis aut vero qui laborum, non alias.
          Corporis autem culpa repellat consequuntur alias, minus ipsa
          assumenda!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi,
          reprehenderit a fuga ab officiis aut vero qui laborum, non alias.
          Corporis autem culpa repellat consequuntur alias, minus ipsa
          assumenda!
        </div>
      </section>
    </div>
  );
};

export default Homepage;
