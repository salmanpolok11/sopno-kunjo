import Bannar from "../Components/Bannar";
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

       
    </div>
  );
};

export default Home;