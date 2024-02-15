import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <div>
    

      <section className=" md:flex justify-center items-center md:space-x-28 md:pt-5 p-3">
        <div>
          <img
            src="https://i.ibb.co/jVRXBvZ/original-a43f69b8538e2acd361d5cfd34348b98.gif"
            alt=""
          />
        </div>
        <div>
          <h1 className=" font-semibold text-2xl md:text-4xl text-center md:w-[560px] "
         
          >
          “সু স্বাগতম স্বপ্নকুঞ্জ সম্পর্কে আগ্রহ প্রকাশ করার জন্য ।  
চলুন,  
            <span className=" text-blue-700">এগিয়ে যাই স্বপ্নের সঙ্গে এক ধাপ এগিয়ে...। </span>{" "}
          </h1>

          
        </div>
      </section>

      <section>
            <div className=" w-80 lg:w-[520px] mx-auto">
            <Marquee pauseOnHover={true} speed={70}>
            <h1 className=" font-semibold  md:text-2xl text-center" >
        “স্বপ্ন দেখ বিজয়ের, সাধনা করো{" "}
          <span className=" text-blue-700">শ্রেষ্ঠত্বের। </span>{" "}
        </h1>
              </Marquee>

            </div>
      </section>

    </div>
  );
};

export default About;