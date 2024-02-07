import Bannar from "../Components/Bannar";
import Bio from "../Components/Bio";
import Card from "../Components/Card";
import Quote from "../Components/Quote";
import Exams from "./Exams";

const Home = () => {
  return (
    <div className="p-3">
      {/* bannar-section */}
        <Bannar/>

        {/* exam section */}
        <section className=" ">
        <Exams/>
        </section>

        {/* Qoute section */}
        <section className=" mt-[270px] md:mt-5">
        <Quote/>
        </section>

        {/* card section */}
        <Card/>

        {/* Bio section */}
        <Bio/>

       
    </div>
  );
};

export default Home;