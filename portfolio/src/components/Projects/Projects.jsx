import "./Projects.css";
const Projects = () => {
  const data = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/landing-page-with-laptop_23-2148350416.jpg?size=626&ext=jpg&ga=GA1.2.592821983.1682952671&semt=ais",
      title: "Animated website clone",
      github: "https://github.com",
      demo: "https://animated-website-clone.vercel.app/",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-vector/finance-department-employees-are-calculating-expenses-company-s-business_1150-41782.jpg?size=626&ext=jpg&ga=GA1.1.592821983.1682952671&semt=sph",
      title: "React Calculator",
      github: "https://github.com",
      demo: "https://github.com/codeCanvas01/React-Calculator",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-vector/people-carrying-different-currency-sign_53876-64651.jpg?size=626&ext=jpg&ga=GA1.2.592821983.1682952671&semt=ais",
      title: "React Currency-Convertor",
      github: "https://github.com",
      demo: "https://github.com/codeCanvas01/Currency-Convertor",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-vector/concept-new-message-landing-page_23-2148303746.jpg?size=626&ext=jpg&ga=GA1.1.592821983.1682952671&semt=sph",
      title: "Real-time Notification ",
      github: "https://github.com",
      demo: "https://github.com/crypCurrence",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-vector/money-transfer-financial-services-pos-terminal-online-shopping_335657-3135.jpg?size=626&ext=jpg&ga=GA1.1.592821983.1682952671&semt=ais",
      title: "Point-Of-Sale(MERN)",
      github: "https://github.com",
      demo: "https://github.com/codeCanvas01/Point-Of-Sale-App",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-vector/illustration-people-donating-blood_23-2148246357.jpg?size=626&ext=jpg&ga=GA1.1.592821983.1682952671&semt=ais",
      title: "Blood-Donation-App(MERN)",
      github: "https://github.com",
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
                    Github
                  </a>
                  <a
                    href={demo}
                    className="pc-btn"
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
