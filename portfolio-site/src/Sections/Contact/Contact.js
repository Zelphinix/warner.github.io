import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-banner" />
      <section className="contact-section">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-email">Syarner@gmail.com</p>
        <p className="contact-subtitle">Reach out using this form:</p>

        <form
          className="contact-form"
          action="https://formspree.io/f/xldjlevo"
          method="POST"
        >
          <div className="row">
            <div className="field">
              <label>First Name *</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="field">
              <label>Last Name *</label>
              <input type="text" name="lastName" required />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Email *</label>
              <input type="email" name="email" required />
            </div>
            <div className="field">
              <label>Subject *</label>
              <input type="text" name="subject" required />
            </div>
          </div>

          <div className="field full">
            <label>Leave a message... *</label>
            <textarea name="message" rows="5" required />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
      <footer className="contact-footer">© 2025 Shriya Warner</footer>
    </div>
  );
};

export default Contact;
