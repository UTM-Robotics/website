import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Blurb from "./Blurb";

import "../styles/About.css";
// import teamPhoto from '../assets/memberPhotos/teamPhoto.jpg'
import { MEMBERS } from "./details/teamDetails";

const About = () => {
  // Fade in and up.
  useEffect(() => {
    const aboutContainer = document.getElementById("about");
    aboutContainer.classList.add("fade-in-up");
  }, []);

  return (
    <div className="about" id="about">
      <Blurb />

      <section className="about-team">
        <h2 className="section-header">Meet the Team</h2>

        <div className="about-team-members">
          {MEMBERS.map((member) => (
            <div key={member.id} className="about-team-members-member">
              <img src={member.image} alt />
              <div className="about-team-members-desc">
                <div className="about-team-members-title">
                  <h3 className="about-team-members-name">{member.name}</h3>
                </div>

                {member.role && (
                  <p className="about-team-members-role">{member.role}</p>
                )}
                {member.bio && (
                  <p className="about-team-members-bio">{member.bio}</p>
                )}
                {(member.linkedin || member.github) && (
                  <div className="about-team-members-socials">
                    {member.linkedin && (
                      <a
                        href={`${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name}'s LinkedIn`}
                      >
                        <FaLinkedin />
                      </a>
                    )}

                    {member.github && (
                      <a
                        href={`${member.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name}'s GitHub`}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
