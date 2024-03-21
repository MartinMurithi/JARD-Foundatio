import React from "react";
import { Carousel } from "antd";
import "./Hero.css";
import Underline from "../underline/Underline";

function Hero() {
  const contentStyle = {
    height: "100vh",
    color: "#fff",
  };

  return (
    <Carousel autoplay pauseOnDotsHover={true} draggable={true}>
      <div>
        <div style={contentStyle} className="slider-parent-1">
          <div className="text-container">
            <h3 className="hero-title">Empowering Through Education</h3>
            <Underline />
            <p className="hero-description">
              At JARD Foundation, we believe in the transformative power of
              knowledge. Our training programs equip SMEs with essential skills
              and knowledge, enabling them to navigate the complexities of the
              modern business landscape confidently.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle} className="slider-parent-2">
          <div className="text-container">
            <h3 className="hero-title">Innovating for Tomorrow</h3>
            <Underline />
            <p className="hero-description">
              Embracing technology and fostering innovation are at the core of
              what we do. Through cutting-edge solutions and forward-thinking
              initiatives, we empower SMEs to adapt, evolve, and stay ahead in
              an ever-changing market.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle} className="slider-parent-3">
          <div className="text-container">
            <h3 className="hero-title">Guiding the Path to Success</h3>
            <Underline />
            <p className="hero-description">
              At JARD Foundation, we pair SMEs with seasoned mentors. Together,
              they cultivate growth, share insights, and foster a collaborative
              entrepreneurial spirit.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Hero;
