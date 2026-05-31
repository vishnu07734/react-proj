import "./About.css";
import Me from "../../assets/images/Me.png";
import Skills from "./Skills";


function About() {
    return (
<div className="about" id="about">
    <div className="about-content">
        <div className="text">
            <div className="title2">
                <h1>About Me</h1>
            </div>

            <div className="parag">
                <p>
                    Aspiring AI/ML Engineer and Full Stack Developer with strong
                    expertise in Python, Machine Learning, Deep Learning, NLP,
                    and Data Processing. Experienced in developing responsive web
                    applications, integrating frontend and backend systems, and
                    building AI-driven solutions. Passionate about solving
                    real-world problems through intelligent technologies and
                    continuously enhancing my technical skills to create scalable
                    and innovative applications.
                </p>
            </div>

            <div className="info">
                <div className="card">
                    <h3>2<span>+</span></h3>
                    <p>Projects Completed</p>
                    <p>
                        AI/ML and Full Stack Development projects including
                        Fraud Detection and ATM Banking System.
                    </p>
                </div>

                <div className="card">
                    <h3>1<span>+</span></h3>
                    <p>Internship Experience</p>
                    <p>
                        Application Developer Intern at Roman Technologies,
                        Bangalore.
                    </p>
                </div>
            </div>
        </div>

        <div className="img">
            <img src={Me} alt="Vishnu Vardhan" />
        </div>
    </div>

    <Skills />
</div>
    )
}
export default About;