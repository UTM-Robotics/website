import "../styles/Blurb.css";

// eslint-disable-next-line react/prop-types
const GoalCell = ({ title, description }) => (
  <div className="goal">
    <h3 className="goal-title upper-style">{title}</h3>
    <p className="goal-desc">{description}</p>
  </div>
);

const Blurb = () => {
  return (
    <section className="goals">
      <h2 className="section-header">What we offer</h2>

      <div className="goal-grid">
        <GoalCell
          title="Workshops"
          description="We offer workshops throughout the academic year on a variety of topics, including Intro to Arduino, The Floor is Lava, and more! Our events are catered to students of all types, with a strong focus on beginner-friendly workshops."
        />
        <GoalCell
          title="Projects"
          description="UTM Robotics connects students and mentors with UofT Robotics professors to complete for-credit project courses. In addition, we work on not-for-credit projects that are open to all students."
        />
        <GoalCell
          title="Events"
          description="We aim to foster student interest and engagement in the field of Robotics through different events, such as general meetings, Battlebots viewing sessions, and Arduinos office hours."
        />
        <GoalCell
          title="Community"
          description="We work with both the UTM community and the broader robotics community, introducing students to the world of robotics and providing them with the resources they need to succeed."
        />
      </div>
    </section>
  );
};

export default Blurb;
