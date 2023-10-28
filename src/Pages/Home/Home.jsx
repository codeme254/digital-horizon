import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
    </React.Fragment>
  );
}
