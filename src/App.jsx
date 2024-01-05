import Test from "./Test";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage" className="">
        <Navbar />
      </section>
      <section id="Services" className="">
        Parallax
      </section>
      <section className="">Services</section>
      <section id="Portfolio" className="">
        Parallax
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
