import React from "react";
import { Carousel } from "antd";
import "./Methodology.css";

function Methodology() {
  const contentStyle = {
    // height: "100vh",
    color: "#000",
  };
  return (
    <>
      <div className="methodology-section">
        <h3 className="methodology-title-section">Our Methodology</h3>
        <p className="methodology-intro">
          This streamlined methodology takes you on a journey from understanding
          your needs to crafting a tailored strategy, executing it effectively,
          continuously improving, and maintaining open communication. It's a
          simple yet effective process that guides us in delivering what you
          want and need.
        </p>
      </div>
      <Carousel autoplay pauseOnDotsHover={true} draggable={true}>
        <section style={contentStyle} className="methodology-cards">
          <img
            src="./Assets//Icons/icons8-molecules-48.png"
            alt="Expert"
            width="50px"
            height="50px"
            loading="lazy"
            class="methodology-icon"
          />
          <h3 class="methodology-title">Expertise and Experience</h3>
          <p class="methodology-content">
            Our JARD Foundation team is comprised of seasoned professionals with
            vast understanding in a variety of sectors such as company
            development, technology, finance, and policy advocacy. We provide a
            wide range of skills and market insights to our programs and
            projects, ensuring that our clients receive the best possible
            guidance and help.
          </p>
        </section>

        <section style={contentStyle} className="chooseUsCards">
          <img
            src="./Assets//Icons/icons8-molecules-48.png"
            alt="Expert"
            width="50px"
            height="50px"
            loading="lazy"
            class="chooseUsCardIcon"
          />
          <h3 class="chooseUsCardTitle">Expertise and Experience</h3>
          <p class="chooseUsCardContent">
            Our JARD Foundation team is comprised of seasoned professionals with
            vast understanding in a variety of sectors such as company
            development, technology, finance, and policy advocacy. We provide a
            wide range of skills and market insights to our programs and
            projects, ensuring that our clients receive the best possible
            guidance and help.
          </p>
        </section>

        <section style={contentStyle} className="chooseUsCards">
          <img
            src="./Assets//Icons/icons8-molecules-48.png"
            alt="Expert"
            width="50px"
            height="50px"
            loading="lazy"
            class="chooseUsCardIcon"
          />
          <h3 class="chooseUsCardTitle">Expertise and Experience</h3>
          <p class="chooseUsCardContent">
            Our JARD Foundation team is comprised of seasoned professionals with
            vast understanding in a variety of sectors such as company
            development, technology, finance, and policy advocacy. We provide a
            wide range of skills and market insights to our programs and
            projects, ensuring that our clients receive the best possible
            guidance and help.
          </p>
        </section>

        <section style={contentStyle} className="chooseUsCards">
          <img
            src="./Assets//Icons/icons8-molecules-48.png"
            alt="Expert"
            width="50px"
            height="50px"
            loading="lazy"
            class="chooseUsCardIcon"
          />
          <h3 class="chooseUsCardTitle">Expertise and Experience</h3>
          <p class="chooseUsCardContent">
            Our JARD Foundation team is comprised of seasoned professionals with
            vast understanding in a variety of sectors such as company
            development, technology, finance, and policy advocacy. We provide a
            wide range of skills and market insights to our programs and
            projects, ensuring that our clients receive the best possible
            guidance and help.
          </p>
        </section>

        <section style={contentStyle} className="chooseUsCards">
          <img
            src="./Assets//Icons/icons8-molecules-48.png"
            alt="Expert"
            width="50px"
            height="50px"
            loading="lazy"
            class="chooseUsCardIcon"
          />
          <h3 class="chooseUsCardTitle">Expertise and Experience</h3>
          <p class="chooseUsCardContent">
            Our JARD Foundation team is comprised of seasoned professionals with
            vast understanding in a variety of sectors such as company
            development, technology, finance, and policy advocacy. We provide a
            wide range of skills and market insights to our programs and
            projects, ensuring that our clients receive the best possible
            guidance and help.
          </p>
        </section>
      </Carousel>
    </>
  );
}

export default Methodology;
