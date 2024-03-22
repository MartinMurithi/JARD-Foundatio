import React from "react";
import "./Methodology.css";

function Methodology() {

  return (
    <>
      <div class="core-values-section-parent">
        <h4 class="core-values-title">Our Methodology</h4>
        <p class="methodology-intro">
          This streamlined methodology takes you on a journey from understanding
          your needs to crafting a tailored strategy, executing it effectively,
          continuously improving, and maintaining open communication. It's a
          simple yet effective process that guides us in delivering what you
          want and need.
        </p>

        <div class="coreValuesCardsParent">
          <div class="coreValuesCards">
            <img
              src="./assets/icons8-assessment.gif"
              alt="Collaboration Icon"
              loading="lazy"
              width="55px"
              height="55px"
              class="valueIcon"
            />
            <h3 class="valueTitle">Assessment and Understanding</h3>
            <p class="valueText">
              We begin by thoroughly understanding your needs, goals, and
              challenges. Through in-depth discussions and analysis, we gain
              insight into your unique situation.
            </p>
          </div>

          <div class="coreValuesCards">
            <img
              src="./assets/innovation-icon.png"
              alt="Innovation Icon"
              loading="lazy"
              width="55px"
              height="55px"
              class="valueIcon"
            />
            <h3 class="valueTitle">Tailored Strategy</h3>
            <p class="valueText">
              Based on our assessment, we craft a customized strategy designed
              to achieve your specific objectives. This strategy outlines the
              key steps and resources required to reach your goals.
            </p>
          </div>

          <div class="coreValuesCards">
            <img
              src="./assets/integrity.png"
              alt="Integrity Icon"
              loading="lazy"
              width="55px"
              height="55px"
              class="valueIcon"
            />
            <h3 class="valueTitle">Effective Implementation</h3>
            <p class="valueText">
              Our experienced team puts the strategy into action, leveraging
              their expertise to execute tasks efficiently. We closely monitor
              progress, making adjustments as necessary to ensure success.
            </p>
          </div>

          <div class="coreValuesCards">
            <img
              src="./assets/inclusive-icon.png"
              alt="Inclusivity Icon"
              loading="lazy"
              width="55px"
              height="55px"
              class="valueIcon"
            />
            <h3 class="valueTitle">Continous Improvement</h3>
            <p class="valueText">
              Throughout the process, we maintain an ongoing commitment to
              learning and adaptation. We assess outcomes against benchmarks and
              use these insights to continually refine and optimize our
              approach.
            </p>
          </div>

          <div class="coreValuesCards">
            <img
              src="./assets/impact-icon.jpeg"
              alt="Impact Icon"
              loading="lazy"
              width="55px"
              height="55px"
              class="valueIcon"
            />
            <h3 class="valueTitle">Clear Communication</h3>
            <p class="valueText">
              We maintain transparent and open communication with you, ensuring
              that you are informed and engaged at every stage. This
              transparency builds trust and ensures alignment with your vision.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Methodology;
