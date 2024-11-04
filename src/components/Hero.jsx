import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-desc">
        <h1 className="hero-desc-title">UTM&apos;s home for Robotics.</h1>
        <p className="hero-desc-text">
          At UTM Robotics club, we <em>foster a dynamic community</em> for
          enthusiasts, hobbyists, and newcomers alike. Our mission is to{" "}
          <em>inspire, educate, and innovate</em> within the ever-evolving field
          of robotics, for people of <em>all levels of experience</em>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
