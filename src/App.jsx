import Test from "./Test";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      {/* <Test /> */}
      <section className="">
        <Navbar />
      </section>
      <section className="">Parallax</section>
      <section className="">Services</section>
      <section className="">Parallax</section>
      <section className="">Portfolio1</section>
      <section className="">Portfolio2</section>
      <section className="">Portfolio3</section>
      <section className="">Contact</section>
    </div>
  );
};

export default App;
