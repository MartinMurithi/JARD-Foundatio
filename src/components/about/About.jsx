import React from 'react';
import "./About.css";

function About() {
  return (
    <div>
      <section className="about-section-parent" id='about-us' >
        <div className="about-section">
          <div className="about-us-image-parent">
            <img
              src="/assets/about-image.webp"
              alt="About"
              loading="lazy"
              className="about-us-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">Who Are We ?</h2>
            <p className="about-description">
              The JARD Foundation seeks to help SMEs (Small and Medium
              Enterprises) grow, as they represent a vital element of Kenya's
              economy. By cultivating a healthy business ecosystem that empowers
              entrepreneurs, we seek to lower poverty. We believe that through
              our array of programmes and projects, we will provide SMEs with
              the resources and assistance they need to thrive in today's
              competitive economy. We intend to accomplish this through the use
              of these five key pillars of Training, Technology and Innovation,
              Mentoring, Funding and Advocacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About