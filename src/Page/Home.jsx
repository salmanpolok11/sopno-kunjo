import Bannar from "../Components/Bannar";
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
        <section className=" mt-64 md:mt-5">
        <Quote/>
        </section>
       
    </div>
  );
};

export default Home;