import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Statistics />

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <HowItWorks />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;