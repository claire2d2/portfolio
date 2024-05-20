import { useState, useEffect } from "react";

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
        <h1>Hello!</h1>
        <div>I'm Claire</div>
        <div className="typing-container">
          A
          <div className={isTyping ? "erasing" : "typed-out"}>{profession}</div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
