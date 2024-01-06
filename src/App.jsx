import Test from "./Test";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage" className="">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" className="">
        <Parallax type="services" />
      </section>
      <section className="">
        <Services />
      </section>
      <section id="Portfolio" className="">
        <Parallax type="portfolio" />
      </section>
      <section className="">Portfolio1</section>
      <section className="">Portfolio2</section>
      <section className="">Portfolio3</section>
      <section id="Contact" className="">
        Contact
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
