import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    const contactUs = document.getElementById("contact-us");
    contactUs.classList.add("fade-in-up");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert(
            "Thanks for contacting us! We'll be in touch within 1-2 business days.",
          );
        },
        () => {
          alert(
            "Oops, the email couldn't send! Try again tomorrow, or email us with our email instead.",
          );
        },
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact-us">
      <h2 className="section-header">Contact Us</h2>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Email</h3>
          <p>robotics@utmsu.ca</p>

          <br />

          <h3>Address</h3>
          <p>
            DH 2014 (Hacklab), Deerfield Hall
            <br />
            1535 Outer Circle
            <br />
            Mississauga, ON
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
