import React from 'react';

import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Mission from "./components/mission-vision/Mission";
import Values from "./components/our values/Values";
import ChooseUs from "./components/why choose us/ChooseUs";
import Methodology from "./components/methodology/Methodology";
import Services from "./components/our services/Services";
import Team from "./components/our team/Team";
import ContactUs from "./components/contacts/ContactUs";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Mission />
      <Values />
      <ChooseUs />
      <Methodology />
      <Services />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
