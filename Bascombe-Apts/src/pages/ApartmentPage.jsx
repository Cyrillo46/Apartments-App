import React from "react";
import { Navbar } from "../components/Navbar";
import { SectionDescription } from "../components/SectionDescription";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

function ApartmentPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDescription />
      <Footer />
    </>
  );
}

export default ApartmentPage;
