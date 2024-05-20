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
      <section className="about">
        <h2>About me :</h2>
      </section>
      <section className="skills">
        <h2>Skills:</h2>
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
