
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Locations from "../components/home/Locations";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import WhyChooseNestora from "../components/home/WhyNestora";
import HowItWorks from "../components/home/HowItWorks";
// import Footer from "../components/home/Footer";

function Home() {
  return (
    <>
      
      <Hero />
      <Categories />
      <FeaturedProperties />
      <WhyChooseNestora />
      <Locations />
      <HowItWorks />
      <Testimonials />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}

export default Home;