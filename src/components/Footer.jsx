import "../styles/Footer.css";

import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-copyright">UTM Robotics 2024</p>
      <div className="footer-socials">
        <a
          href="https://www.instagram.com/utm_robotics/"
          target="_blank"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/utmrobotics/"
          target="_blank"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/UTM-Robotics/"
          target="_blank"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://discord.gg/wFbtZhcXFQ"
          target="_blank"
          title="Discord Server"
        >
          <FaDiscord />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
