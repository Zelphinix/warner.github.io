import "../styles/ContactMe.css";

import ContactForm from "../Components/ContactForm";
import ScrollToTopButton from "../Components/ScrollToTopButton";

const ContactMe = () => {
  return (
    <div className="projects-page-wrapper">
      <div className="contact-page">
        <ScrollToTopButton />
        <div
          className="contact-banner"
          role="img"
          aria-label="Three people clinking cups—two with latte art and one with iced coffee—over a wooden table."
        />

        <section className="contact-section">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-email">Syarner@gmail.com</p>
          <p className="contact-subtitle">
            Feel free to reach out using the form below:
          </p>

          <div className="form-wrapper">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactMe;
