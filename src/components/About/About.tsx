import useSettings from "../../context/useSettings";

const About = () => {
  const { language } = useSettings();
  return (
    <section className="part">
      <h2>About me :</h2>
      <div className="part-content">
        {language === "en" && (
          <div>
            <p>
              I started my career <span>5 years ago</span> as a Recruitment
              Manager for tech profiles before moving on to Project Manager
              roles, focusing on digital transformation.
            </p>
            <p>
              During this time, I was simultaneously{" "}
              <span>happy to learn new things</span>, but also increasingly
              frustrated with not deeply understanding the technical issues I
              was working with, delegating that task to other people.
            </p>
            <p>
              This led me to pursue a{" "}
              <span>certification in Web Development with Ironhack</span>, where
              I graduated top of my class. I now wish to apply my newfound
              knowledge in a fast-paced environment, where I can keep on
              learning, and hopefully one day, create opportunities for other
              people to learn from me as well.
            </p>
          </div>
        )}
        {language === "fr" && (
          <div>
            <p>
              J'ai commencé ma carrière il y a <span>5 ans</span> en tant que
              Responsable recrutement dans une ESN avant d'évoluer vers des
              missions de gestion de projet, principalement orientés sur{" "}
              <span>la transformation digitale.</span>. Durant cette période,
              j'étais à la fois reconnaissante d'être en posture d'apprentissage
              continu, mais aussi frustrée de ne pas comprendre le fond des
              problèmes sur lesquels je travaillais.
            </p>
            <p>
              C'est ainsi que j'ai poursuivi ma volonté de me reconvertir sur un
              métier plus technique, et que j'ai passé une certification en
              Développement Web (titre RNCP niveau 6) avec Ironhack.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
