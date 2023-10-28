import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Consultation from "../../components/Consultation/Consultation";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Consultation />
    </React.Fragment>
  );
}
