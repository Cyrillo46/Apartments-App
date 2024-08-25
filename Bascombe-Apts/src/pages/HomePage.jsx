import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ReviewSection } from "../components/ReviewSection";
import { SectionDescription } from "../components/SectionDescription";
import { SectionLink } from "../components/SectionLink";
import { AltHero } from "../components/AltHero";
import "../home-css/Home.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <AltHero />
      <SectionDescription />
      <SectionLink className="section-1" />
      <SectionLink className="section-2" />
      <SectionLink className="section-3" />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default HomePage;
