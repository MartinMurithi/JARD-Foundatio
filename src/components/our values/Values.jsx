import React from "react";
import "./Values.css";

function Values() {
  return (
    <div>
      <div className="core-values-section-parent">
        <h4 className="core-values-title">Our Core Values</h4>
        <h3 className="coreValuesIntro">
          What We At JARD Foundation Believe In
        </h3>
        <div className="coreValuesCardsParent">
          <div className="coreValuesCards">
            <img
              src="./assets/collaboration-icon.png"
              alt="Collaboration Icon"
              loading="lazy"
              width="55px"
              height="55px"
              className="valueIcon"
            />
            <h3 className="valueTitle">Collaboration</h3>
            <p className="valueText">
              We create a culture of cooperation and partnership because we
              understand that collective efforts have a more significant effect.
              We work collaboratively with business owners, government agencies,
              investors, and other stakeholders to create a vibrant ecosystem
              for SMEs.
            </p>
          </div>
          <div className="coreValuesCards">
            <img
              src="./assets/innovation-icon.png"
              alt="Innovation Icon"
              loading="lazy"
              width="55px"
              height="55px"
              className="valueIcon"
            />
            <h3 className="valueTitle">Innovation</h3>
            <p className="valueText">
              We support innovation and the use of technology to boost growth
              and competitiveness. We encourage SMEs to embrace digital
              solutions, encourage creativity, and embrace new trends that
              result in long-term business strategies.
            </p>
          </div>
          <div className="coreValuesCards">
            <img
              src="./assets/integrity.png"
              alt="Integrity Icon"
              loading="lazy"
              width="55px"
              height="55px"
              className="valueIcon"
            />
            <h3 className="valueTitle">Integrity</h3>
            <p className="valueText">
              We uphold the highest standards of honesty, openness, and
              accountability in all of our actions and transactions. We are
              committed to preserving moral standards and working to acquire the
              respect and trust of our stakeholders as well as the SME
              community.
            </p>
          </div>
          <div className="coreValuesCards">
            <img
              src="./assets/inclusive-icon.png"
              alt="Inclusivity Icon"
              loading="lazy"
              width="55px"
              height="55px"
              className="valueIcon"
            />
            <h3 className="valueTitle">Inclusivity</h3>
            <p className="valueText">
              We strive for equal opportunities for all entrepreneurs regardless
              of gender, ethnicity, or background because we believe in
              inclusivity. Because we are committed to supporting
              underprivileged people, our activities and efforts are open to and
              beneficial to anyone.
            </p>
          </div>
          <div className="coreValuesCards">
            <img
              src="./assets/impact-icon.jpeg"
              alt="Impact Icon"
              loading="lazy"
              width="55px"
              height="55px"
              className="valueIcon"
            />
            <h3 className="valueTitle">Impact Driven</h3>
            <p className="valueText">
              We are driven by a strong sense of purpose and a desire to have a
              meaningful and significant impact. The positive changes we create
              in the lives of entrepreneurs, their communities, and the economy
              as a whole also count toward our success criterion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
