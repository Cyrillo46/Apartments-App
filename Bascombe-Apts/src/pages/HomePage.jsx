import { Navbar } from "../components/Navbar";
import { ReviewSection } from "../components/ReviewSection";
import { SectionDescription } from "../components/SectionDescription";
import { SectionLink } from "../components/SectionLink";
import { HomeHero } from "../home-components/HomeHero";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <SectionDescription />
      <SectionLink />
      <SectionLink />
      <SectionLink />
      <ReviewSection />
    </>
  );
}

export default HomePage;
