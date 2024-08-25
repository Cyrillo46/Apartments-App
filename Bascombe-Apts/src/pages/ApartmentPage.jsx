import React from "react";
import { Navbar } from "../components/Navbar";
import { SectionDescription } from "../components/SectionDescription";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Apartments } from "../apt-components/Apartments";

function ApartmentPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDescription />
      <Apartments />
      <Footer />
    </>
  );
}

export default ApartmentPage;
