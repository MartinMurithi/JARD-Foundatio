import React from "react";
import "./Mission.css";

function Mission() {
  return (
    <div>
      <div className="mission-vision-section">
        <div className="mission-section">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-text">
            The JARD Foundation's mission is to strengthen Kenyan SMEs by
            providing them with the resources, assistance, and growth
            opportunities they require. We want to reduce poverty by providing
            comprehensive training, encouraging technology, mentorship, funding
            assistance, and campaigning for inviting business settings. Our goal
            is to establish a robust and inclusive business ecosystem that
            supports economic growth and improves quality of life.
          </p>
        </div>

        <div className="vision-section">
          <h2 className="vision-title">Our Vision</h2>
          <p className="vision-text">
            Our vision is to be a key catalyst for the growth and success of
            Kenyan SMEs. We aspire to cultivate a dynamic business climate. We
            foresee a future in which SMEs are important drivers of economic
            development, job creation, and poverty reduction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
