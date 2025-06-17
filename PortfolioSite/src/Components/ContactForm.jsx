import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    // sends email through this form
    <form
      className="contact-form"
      action="https://formspree.io/f/xldjlevo"
      method="POST"
    >
      <div className="row">
        <div className="field">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="field">
          <label htmlFor="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required />
        </div>
      </div>

      <div className="field full">
        <label htmlFor="message">Leave a message... *</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
