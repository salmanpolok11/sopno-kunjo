import Advice from "../Components/Advice";
import Bannar from "../Components/Bannar";
import Bio from "../Components/Bio";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Quote from "../Components/Quote";
import Exams from "./Exams";

const Home = () => {
  return (
    <div className="p-3">
      {/* bannar-section */}
      <Bannar />

      {/* exam section */}
      <section className=" ">
        <Exams />
      </section>

      {/* Qoute section */}
      <section className=" mt-[270px] md:mt-5">
        <Quote />
      </section>

      {/* advice section */}
      <Advice />

      {/* Bio section */}
      <Bio />

      {/* card section */}
      <Card />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
