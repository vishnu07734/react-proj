import "./Projects.css";

import img1 from "../../assets/images/fraud-detection.jpg";
import img2 from "../../assets/images/atm-system.jpg";

const projects = [
  {
    title: "Online Recruitment Fraud Detection",
    img: img1,
    desc: "Developed a Deep Learning and NLP-based system to detect fraudulent job postings. Applied text preprocessing, feature extraction, vectorization, and model optimization techniques to improve classification accuracy.",
    skills: ["Python", "Deep Learning", "NLP", "Machine Learning"]
  },

  {
    title: "ATM Banking System",
    img: img2,
    desc: "Built a secure ATM simulation using Python OOP principles with PIN authentication, account lockout security, balance inquiry, deposit, withdrawal, and PIN management features.",
    skills: ["Python", "OOP", "Encapsulation", "Security"]
  }
];

export default function Project() {
  return (
    <section className="project reveal" id="projects">

      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a
                href="https://github.com/your-github-repository"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}