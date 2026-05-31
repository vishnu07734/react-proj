import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMysql,
  SiDjango,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">

          {/* Frontend */}
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />

          {/* Programming */}
          <FaPython title="Python" />
          <SiMysql title="MySQL" />

          {/* Backend */}
          <SiDjango title="Django" />

          {/* AI / ML */}
          <SiScikitlearn title="Scikit-Learn" />
          <SiTensorflow title="TensorFlow" />

          {/* Tools */}
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />

          {/* Duplicate for smooth infinite scroll */}
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaPython />
          <SiMysql />
          <SiDjango />
          <SiScikitlearn />
          <SiTensorflow />
          <FaGitAlt />
          <FaGithub />

        </div>
      </div>
    </div>
  );
}

export default Skills;