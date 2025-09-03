import CookieBanner from "../components/CookieBanner";
import Contact from "../features/Contact/Contact";
import Features from "../features/Features/Features";
import Footer from "../features/Footer/Footer";
import Gallery from "../features/Gallery/Gallery";
import Header from "../features/Header/Header";
import Hero from "../features/Hero/Hero";
import Location from "../features/Location/Location";
// import Pricing from "../features/Pricing/Pricing";
import Reservation from "../features/Reservation/Reservation";
import Reviews from "../features/Reviews/Reviews";
import './LandingPage.scss';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Location />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default LandingPage;
