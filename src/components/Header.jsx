import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Header.css";

import roboticsLogo from "../assets/robotics-logo.png";

import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(true);

  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.lastY >= scrollData.y) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [scrollData]);

  const handleHomeLinkClick = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // const handleEventsLinkClick = () => {
  //   navigate("/");

  //   setTimeout(() => {
  //     const element = document.getElementById("eventContainer");
  //     if (element) {
  //       const offset = element.offsetTop - 100;
  //       window.scrollTo({
  //         top: offset,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 100);
  // };

  // const handleAboutLinkClick = () => {
  //   navigate("/");

  //   setTimeout(() => {
  //     const element = document.getElementById("aboutContainer");
  //     if (element) {
  //       const offset = element.offsetTop - 50;
  //       window.scrollTo({
  //         top: offset,
  //         behavior: "smooth",
  //       });
  //       setShowNav(false);
  //     }
  //   }, 100);
  // };

  // const handleContactLinkClick = () => {
  //   navigate("/");

  //   setTimeout(() => {
  //     const element = document.getElementById("contactForm");
  //     if (element) {
  //       const offset = element.offsetTop;
  //       window.scrollTo({
  //         top: offset,
  //         behavior: "smooth",
  //       });
  //       setShowNav(false);
  //     }
  //   }, 100);
  // };

  return (
    <nav className={`header ${!showNav ? "header-hidden" : ""}`}>
      <div className="header-logo" onClick={handleHomeLinkClick}>
        <img
          className="header-logo-img"
          src={roboticsLogo}
          alt="Robotics Logo"
        ></img>
        <span className="header-logo-wordmark upper-style">UTM Robotics</span>
      </div>

      {/* <div className="header-links">
        <button onClick={handleEventsLinkClick} className="header-link">
          Events
        </button>
        <button onClick={handleAboutLinkClick} className="header-link">
          About
        </button>
        <button onClick={handleContactLinkClick} className="header-link">
          Contact
        </button>
      </div> */}

      <div className="header-socials">
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
    </nav>
  );
};

export default Header;
