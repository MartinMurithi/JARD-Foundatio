import react from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-section">
      <h3 className="service-title">Our Services</h3>

      <div className="services-list">
        {/* Training */}
        <div className="service-card">
          <img
            className="service-img"
            src="assets/training.jpeg"
            alt="Training"
            width={"100%"}
            height={"300px"}
          />
          <div className="service-content">
            <h4 className="service-name">Training</h4>
            <p className="service-description">
              We at the JARD Foundation understand how important knowledge and
              skill development is for SMEs. We provide comprehensive training
              packages that equip entrepreneurs with critical business growth
              skills. Through workshops, seminars, and coaching sessions, we
              provide SME owners with the knowledge they need to run their
              businesses profitably and sustainably.
            </p>
          </div>
        </div>

        {/* Innovation */}
        <div className="service-card">
          <img
            className="service-img"
            src="/assets/innovation.jpeg"
            alt="Training"
            width={"100%"}
            height={"300px"}
          />
          <div className="service-content">
            <h4 className="service-name">Technology and Innovations</h4>
            <p className="service-description">
              Technological advancements are critical to corporate success in
              today's digital era. The JARD Foundation actively promotes the
              development and implementation of digital technologies and
              solutions in the SME market. We help SMEs improve their
              production, efficiency, and market competitiveness by increasing
              the use of technology.
            </p>
          </div>
        </div>

        {/* Mentorship */}
        <div className="service-card">
          <img
            className="service-img"
            src="/assets/mentorship.jpeg"
            alt="Trainig"
          />
          <div className="service-content">
            <h4 className="service-name">Mentorship</h4>
            <p className="service-description">
              We understand the value of mentoring and advice in the growth of
              SMEs. JARD Foundation, as a business incubator, offers mentorship
              programs to help entrepreneurs overcome challenges along the road.
              Our skilled mentors provide insightful counsel, guidance, and
              support, allowing SMEs to make sound decisions and achieve
              long-term success.
            </p>
          </div>
        </div>

        {/* Funding */}
        <div className="service-card">
          <img
            className="service-img"
            src="/assets/funding.jpeg"
            alt="Trainig"
          />
          <div className="service-content">
            <h4 className="service-name">Funding</h4>
            <p className="service-description">
              Obtaining money can be a significant challenge for start-ups and
              SMEs. JARD Foundation actively explores and provides financial
              solutions for existing SMEs and aspiring entrepreneurs. We help
              SMEs receive the financial resources they need to begin and expand
              their businesses by connecting them with potential investors,
              grants, and financing institutions.
            </p>
          </div>
        </div>

        {/* Advocacy */}
        <div className="service-card">
          <img
            className="service-img"
            src="/assets/advocacy.jpeg"
            alt="Trainig"
          />
          <div className="service-content">
            <h4 className="service-name">Advocacy</h4>
            <p className="service-description">
              One of the JARD Foundation's key advocacy aims is to support the
              implementation of legislations that foster business development at
              the national, regional and municipal levels. We work together with
              governmental institutions, decision-makers, and other stakeholders
              to create favorable business environments, beneficial legislation,
              and SMEs incentives. We want to create an atmosphere that promotes
              economic development, innovation, and entrepreneurship through our
              lobbying work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
