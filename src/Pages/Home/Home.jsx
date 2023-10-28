import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Consultation from "../../components/Consultation/Consultation";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Consultation />
      <Footer />
    </React.Fragment>
  );
}
