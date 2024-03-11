import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail, MdReadMore } from "react-icons/md";
import { NavLink } from "react-router-dom";

// import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <div className=" p-4">
      <section className=" lg:flex justify-center items-center lg:space-x-28 md:pt-10 p-3">
        <div>
          <img
            className=" w-full"
            src="https://i.ibb.co/jVRXBvZ/original-a43f69b8538e2acd361d5cfd34348b98.gif"
            alt=""
          />
        </div>
        <div>
          <h1 className=" font-semibold text-2xl md:text-3xl text-center lg:w-[550px] ">
            “সু স্বাগতম স্বপ্নকুঞ্জ সম্পর্কে আগ্রহ প্রকাশ করার জন্য । চলুন,
            <span className=" text-blue-700">
              এগিয়ে যাই স্বপ্নের সঙ্গে এক ধাপ এগিয়ে...।{" "}
            </span>{" "}
          </h1>
        </div>
      </section>

      {/* about section  */}

      <section>
        <h1 className=" text-center text-2xl md:text-3xl font-bold pt-10 md:pb-10">
          আমাদের <span className=" text-blue-700">সম্পর্কে </span> কিছু
          কথা।
        </h1>
        {/*  1st man */}
        <div>
          <div className=" w-full md:h-96  p-2 ">
            <section className="md:flex justify-center items-center lg:gap-20 ">
              <div>
                <img
                  className=" md:w-[295px] mx-auto"
                  src="https://i.ibb.co/cQh8Q3f/IMG-0765-removebg-preview.png"
                  alt=""
                />
              </div>
              <div className=" md:w-[500px] ">
                <h1 className=" mt-3 md:text-xl   ">
                  <span className=" text-2xl md:text-3xl font-bold pb-2">
                    {" "}
                    সালমান ইসলাম পলক{" "}
                  </span>{" "}
                  <br />
                  স্বপ্নকুঞ্জের প্রতিষ্ঠাতা । লেখালেখিতে যার কেটেছে এক দশক তিনি
                  একজন অখ্যাত লেখক। তার একাধিক লেখার মধ্যে জনপ্রিয় লেখা গল্পের
                  নাম, "অনুতপ্ত" "মায়ের আঁচল" ।
                </h1>

                <h1 className="  text-xl md:text-2xl  ">
                  <a
                    className="flex items-center gap-2  hover:text-red-400"
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new "
                  >
                    <MdEmail /> salmanpolok224@gmail.com
                  </a>
                </h1>
                <h1 className="  text-xl md:text-2xl  ">
                  <a
                    className="flex items-center gap-2  hover:text-red-400"
                    href="https://www.facebook.com/salmanpolok112"
                  >
                    <FaFacebookSquare /> Salman Islam Polok
                  </a>
                </h1>
                <NavLink to="/admin">
                  <h1 className=" text-xl md:text-xl btn-outline btn-ghost w-32 px-3 
                  mx-auto mt-2 rounded-md">
                    <button className="flex items-center  justify-center gap-2 text-center 
                     hover:text-red-400">
                      <MdReadMore />
                      আরো{" "}
                    </button>
                  </h1>
                </NavLink>
              </div>
            </section>
          </div>
        </div>

        {/*  2nd man */}
        <div>
          <div className=" w-full md:h-96  p-2">
            <section className="md:flex justify-center  items-center lg:gap-16 
            md:flex-row-reverse ">
              <div>
                <img
                  className=" md:w-[295px] mx-auto"
                  src="https://i.ibb.co/SdyfJHp/IMG-0015-01-removebg-preview.png"
                  alt=""
                />
              </div>

              <div className=" md:w-[500px] ">
                <h1 className=" mt-3 md:text-xl     ">
                  <span className=" text-2xl md:text-3xl font-bold pb-2">
                    {" "}
                    শিহাব ইসলাম{" "}
                  </span>{" "}
                  <br />
                  একাধারে একাধিক প্রতিভার অধিকারী ।   শিক্ষা, সাহিত্য, কলা, 
                   সংস্কৃতিতে অবদান রেখেছেন একের পর এক এবং স্বপ্নকুঞ্জের মার্কেটিং এজেন্সির দায়িত্বরত 
                    নিষ্ঠাবান পরিশ্রমি ব্যক্তি।  
                </h1>

                <h1 className="  text-xl md:text-2xl  ">
                  <a
                    className="flex items-center   gap-2  hover:text-red-400"
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new "
                  >
                    <MdEmail /> kawsarshihab705@gmail.com
                  </a>
                </h1>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
