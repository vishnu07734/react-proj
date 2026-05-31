import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      <div className="social-icons">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/your-instagram-id"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <p>&copy; 2026 Vishnu Vardhan. All rights reserved.</p>

      <ul className="link">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </div>
  );
}

export default Footer;