import React from "react";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="get-in-touch-parent-section" id="contact-us">
      <div className="get-in-touch-section">
        <div className="get-in-touch-title">Contact Us</div>
        <p className="get-in-touch-description">
          Get in touch with us. We're here to listen, assist, and collaborate.
          Your journey to business success starts with a simple message or call.
          Reach out today!
        </p>
        <h5 className="get-in-touch-cta">Call us! we are available 24/7</h5>

        <div className="reach-us">
          <div className="mobile">
            <FaPhoneVolume className="phone-icon" />
            <a href="tel:+254713303525" className="mobile-cta">
              (254) 713 303 525
            </a>
          </div>

          <div className="mobile">
            <FaRegEnvelope className="phone-icon" />
            <a href="mailto:jardhelpdesk@gmail.com" className="mobile-cta">
              jardhelpdesk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
