import { MdReadMore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Exams = () => {
  return (
    <div>
      <section className="md:pt-32 md:p-3 pt-20">
        <h1 className=" text-center text-2xl md:text-4xl font-bold">
          সকল <span className=" text-blue-700">পরিক্ষা </span> সমূহ
        </h1>

        <div className=" md:flex justify-center md:space-x-10 mt-6 ">
          {/* HSC exam section  */}
          <section className=" lg:w-80  md:h-96  md:space-y-2 border-2 p-4  rounded-md  
          mt-4 ">
            <img src="https://i.ibb.co/275BF7C/8861545.jpg" alt="" />
            <h1 className=" md:font-medium ">
              পরিক্ষার প্রস্তুতি হোক সারা মাস জুড়ে। এইচএসসি মানবিক বিভাগের
              পাঁচটি বিষয়ে সারা মাস পরিক্ষা দেয়ার সুবর্ন সুযোগ। সল্পমূল্যে যাচাই
              করে নাও নিজেকে..
            </h1>
            <div className="flex  justify-center items-center gap-2 ">
              <NavLink to="/hsc">
                <button className=" btn btn-outline btn-sm ">
                  <MdReadMore /> বিস্তারিত{" "}
                </button>
              </NavLink>
              <button className=" btn btn-outline btn-sm ">
                প্রস্তুতি ফ্রি = ২০০৳{" "}
              </button>
            </div>
          </section>

          {/* SSC Exam Section */}
          <section className=" lg:w-80 md:h-96 p-3 md:space-y-2 border-2  rounded-md mt-4  ">
            <img src="https://i.ibb.co/nPMyDxx/8861625.jpg" alt="" />
            <h1 className=" mt-2 md:font-medium ">
              পরিক্ষার প্রস্তুতি হোক সারা মাস জুড়ে। এসএসসি মানবিক বিভাগের সাতটি
              বিষয়ে সারা মাস পরিক্ষা দেয়ার সুবর্ন সুযোগ। সল্পমূল্যে যাচাই করে
              নাও নিজেকে..
            </h1>
            <div className="flex  justify-center items-center gap-2 ">
              <NavLink to="/ssc">
                <button className=" btn btn-outline btn-sm ">
                  <MdReadMore /> বিস্তারিত{" "}
                </button>
              </NavLink>
              <button className=" btn btn-outline btn-sm ">
                প্রস্তুতি ফ্রি = ২০০৳{" "}
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Exams;
