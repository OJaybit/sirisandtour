import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import Accommodation from "./components/Accommodation";
import TourGrid from './components/TourGrid';
import Destinations from "./components/Destinations";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <AboutUs />
      <Location />
          <TourGrid />
      <Accommodation />
      <Destinations />
      <ContactSection />
    </>
  );
}
