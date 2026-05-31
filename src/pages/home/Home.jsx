import "./Home.css";
import Me2 from "../../assets/images/Me2.jpg";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">

        <div className="text">

          <div className="valide">
            <img src={Me2} alt="Vishnu Vardhan" />
            <p>"Building intelligent solutions with AI & Innovation"</p>
          </div>

          <div className="text-info">

            <div className="title1">
              <h1>
                Hi, I'm <span>Vishnu Vardhan</span>
              </h1>
            </div>

            <div className="paraga">
              <p>
                Aspiring AI/ML Engineer and Full Stack Developer with
                expertise in Python, Machine Learning, Deep Learning,
                NLP, and Web Development. Passionate about creating
                intelligent applications, solving real-world problems,
                and building scalable software solutions that make an impact.
              </p>
            </div>

          </div>

        </div>

        <div className="btn1">
          <a href="./Vishnu_Vardhan_Resume.pdf" download>
            Download Resume
          </a>

          <a href="#projects">
            Explore My Projects
          </a>
        </div>

      </div>

      <div className="photo">
        <img src={Me2} alt="Vishnu Vardhan" />
      </div>

    </div>
  );
}

export default Home;