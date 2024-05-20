import "./About.css";
import picture from "../../assets/images/me.jpeg";
const About = () => {
  return (
    <div className="About">
      <h2>About me</h2>
      <div>
        <img src={picture} alt="picture of Claire Song" />
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis optio
        inventore provident. Modi rerum quas neque incidunt sequi voluptatem
        provident praesentium, suscipit eum. Corrupti, debitis temporibus omnis
        beatae magni illum. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Voluptate distinctio velit, pariatur quidem eaque animi magni
        labore vel exercitationem quis? Minima quae quo velit repellat rem a
        eaque alias aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga sed quia, blanditiis quas ad temporibus impedit voluptas
        sequi fugit repudiandae similique hic itaque ea quam? Provident vero
        dignissimos excepturi distinctio. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus adipisci reiciendis veniam velit, sint
        nostrum suscipit est quae! Quia vitae harum voluptatem aliquam corrupti
        exercitationem sapiente delectus minus perspiciatis! Libero.
      </div>
    </div>
  );
};

export default About;
