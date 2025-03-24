import './Contact.css';

// Import icons
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-banner"></div>

                <div className="contact-content">
                    <small>Contact Me</small>
                    <h2>Get In Touch</h2>
                    <div className="contact-rows">
                    <div className="contact-row">
                        <div className="contact-left">
                            <div className="content-icon"><IoIosMail /></div>
                            <h2>Email: </h2>
                            <p>Krystalflare@gmail.com</p>
                            
                        </div>
                    
                        <div className="contact-right">
                            <div className="content-icon"><FaPhoneAlt /></div>
                            <h2>Phone: </h2>
                            <p>(+64) 020 4020 8920</p>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    )
}

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
