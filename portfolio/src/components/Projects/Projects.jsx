import "./Projects.css";
import pic from "../../img/pic2.png";
import pic1 from "../../img/pic3.png";
import pic2 from "../../img/pic4.png";
import pic3 from "../../img/pic5.png";
import pic4 from "../../img/pic6.png";
import pic5 from "../../img/pic7.png";
const Projects = () => {
  const data = [
    {
      id: 1,
      image: pic,
      title: "Death Wish Cofee",
      github: "https://www.deathwishcoffee.com/",
      demo: "https://animated-website-clone.vercel.app/",
    },
    {
      id: 2,
      image: pic1,
      title: "My Grub Club",
      github: "https://mygrubclub.com/",
      demo: "https://github.com/codeCanvas01/React-Calculator",
    },
    {
      id: 3,
      image: pic2,
      title: "Cheesies",
      github: "https://www.cheesies.co.uk/",
      demo: "https://github.com/codeCanvas01/Currency-Convertor",
    },
    {
      id: 4,
      image: pic3,
      title: "Player One Coffee",
      github: "https://playeronecoffee.com/",
      demo: "https://github.com/crypCurrence",
    },
    {
      id: 5,
      image: pic4,  
      title: "Drink Trip",
      github: "https://drink-trip.com/",
      demo: "https://github.com/codeCanvas01/Point-Of-Sale-App",
    },
    {
      id: 6,
      image: pic5, 
      title: "Fleur And Bee",
      github: "https://fleurandbee.com/",
      demo: "https://github.com/codeCanvas01/Blood-Bank-App",
    },
  ];
  return (
    <>
      <section id="projects" className="main-projects">
        <h1>Projects</h1>

        <div className="projects-div">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="projects-item">
                <div className="projects-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="p-btn">
                  <a
                    href={github}
                    className="pd-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
