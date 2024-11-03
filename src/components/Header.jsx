import { useState, useEffect, React } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

import "../styles/Header.css";

import roboticsLogo from "../assets/robotics-logo.png";
import insta from "../assets/svg/instagram-white-icon.svg";
import linkedin from "../assets/svg/linkedin-app-white-icon.svg";
import github from "../assets/svg/github-mark-white.svg";
import discord from "../assets/svg/discord-white-seeklogo-4.svg";

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

  const handleEventsLinkClick = () => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById("eventContainer");
      if (element) {
        const offset = element.offsetTop - 100;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleAboutLinkClick = () => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById("aboutContainer");
      if (element) {
        const offset = element.offsetTop - 50;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
        setShowNav(false);
      }
    }, 100);
  };

  const handleContactLinkClick = () => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById("contactForm");
      if (element) {
        const offset = element.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
        setShowNav(false);
      }
    }, 100);
  };

  return (
    <nav className={showNav ? "headerContainer" : "headerContainer hiddenNav"}>
      <div id="logoContainer" onClick={handleHomeLinkClick}>
        <img className="logo" src={roboticsLogo} alt="Robotics Logo"></img>
        <span id="logoName">UTM Robotics</span>
      </div>
      <div id="pages">
        <button onClick={handleEventsLinkClick} id="redirect">
          Events
        </button>
        <button onClick={handleAboutLinkClick} id="redirect">
          About
        </button>
        <button onClick={handleContactLinkClick} id="redirect">
          Contact
        </button>
      </div>

      <div className="socials">
        <a href="https://www.instagram.com/utm_robotics/" target="_blank">
          <img src={insta}></img>
        </a>
        <a
          href="https://www.linkedin.com/company/utmrobotics/mycompany/"
          target="_blank"
        >
          <img src={linkedin}></img>
        </a>
        <a href="https://github.com/UTM-Robotics/" target="_blank">
          <img src={github}></img>
        </a>
        <a href="https://discord.gg/wFbtZhcXFQ" target="_blank">
          <img src={discord}></img>
        </a>
      </div>
    </nav>
  );
};

export default Header;
