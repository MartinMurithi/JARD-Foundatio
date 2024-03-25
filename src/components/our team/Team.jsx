import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="our-team-section">
      <h3 className="team-title">Our Team</h3>
      <p className="team-description">
        At JARD Foundation, our dedicated team is the driving force behind our
        mission to support and empower Small and Medium Enterprises (SMEs) in
        Kenya. Comprising seasoned professionals with vast expertise in various
        sectors such as company development, technology, finance, and policy
        advocacy, our team brings a wealth of knowledge to the table. Each
        member is committed to our core values, ensuring that our clients
        receive the best possible guidance and assistance.
        <p className="team-description">
          Our team at JARD Foundation is not just a collection of individuals
          but a cohesive unit working tirelessly to support SMEs, foster
          entrepreneurship, and drive positive change in Kenya. Together, we are
          committed to our vision of reducing poverty, empowering entrepreneurs,
          and building a brighter future for our nation.
        </p>
      </p>
      <div className="container">
        <div className="left-column">
          <div className="image">
            <img src="/assets/team.png" alt="Gerhard Uduny" />
            <div className="titles">
              <h2 >Gerhard Uduny</h2>
              <strong>Director</strong>
              <br />
              <strong>Tax and Regulatory Services</strong>
              <br />
              <strong>Tax and Regulatory Consultant</strong>
            </div>
          </div>

          <div className="membership">
            <h3>Memberships</h3>
            <p>Institute of Certified Public Accountants of Kenya (ICPAK)</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>
              Masters of Business Administration; University of South Wales
              <br />
              Bachelors Degree in Economics; Kenyatta University
              <br />
              Certified Public Accountants; KASNEB
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="employment-record">
            <h3>Employment Record</h3>
            <p>
              <strong>Director:</strong> SKM Africa (April 2020 - Present)
              <br />
              <strong>Senior Consultant:</strong> KPMG East Africa (September
              2014 - March 2020)
            </p>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>
              Gerhard is a highly experienced professional with nine years of
              post-qualification experience in tax, finance, and accounting in
              the East Africa Region. His expertise lies in providing a wide
              range of tax compliance services, including corporate taxation,
              personal taxation, customs, excise, VAT, and transfer pricing. He
              has a successful track record of assisting both local and
              multinational companies in efficiently managing their tax and
              regulatory matters. Gerhard has earned a strong reputation for
              handling ID reviews, tax controversy matters such as KRA audits
              and dispute resolution. Additionally, he is skilled in conducting
              tax audits and health-checks for clients and providing valuable
              advice on tax-related issues concerning business setup, financing,
              operations, and restructuring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
