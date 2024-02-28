import React from "react";
import "../styles/Blurb.css";

const GoalCell = ({ title, description }) => (
  <div className="goalCell">
    <h3 className="goalTitle">{title}</h3>
    <p className="goalDescription">{description}</p>
  </div>
);

const Blurb = () => {
  return (
    <div id="blurb">
      <div class="aboutUs">
        <h2>About Us</h2>
        <p>
          Welcome to the vibrant hub of robotics at the University of Toronto
          Mississauga (UTM)! At UTM Robotics, we foster a dynamic community for
          enthusiasts, hobbyists, and newcomers alike. <br></br>
          <br></br>Our mission is to inspire, educate, and innovate within the
          ever-evolving field of robotics. Whether you're a seasoned pro or just
          beginning your journey into the exciting realm of robotics, you'll
          find a supportive and welcoming environment here.
        </p>
      </div>

      <div class="goals">
        <h2>Our Goals</h2>

        <div id="goalGrid">
          <GoalCell
            title="Workshops"
            description="We offer workshops throughout the academic year on a variety of topics, including Intro to Arduino, The Floor is Lava, and more! Our events are catered to students of all types, with a strong focus on beginner-friendly workshops."
          />
          <GoalCell
            title="Projects"
            description="UTM Robotics connects students and mentors with UofT Robotics professors to complete for-credit project courses."
          />
          <GoalCell
            title="Students"
            description="We aim to foster student interest and engagement in the field of Robotics through different events. Apart from workshops, we also offer general meetings where we host speakers, watch Battlebots, and help students interested in tinkering with Arduinos."
          />
          <GoalCell title="Collaborations" description="" />
        </div>
      </div>
    </div>
  );
};

export default Blurb;
