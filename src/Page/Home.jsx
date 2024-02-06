import Bannar from "../Components/Bannar";
import Exams from "./Exams";

const Home = () => {
  return (
    <div className="p-3">
      {/* bannar-section */}
        <Bannar/>
        {/* exam section */}
        <section className=" mt-16">
        <Exams/>
        </section>
       
    </div>
  );
};

export default Home;