import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

const Bio = () => {
  return (
    <div className=" w-full md:h-96  bg-blue-700 p-2 mt-16">
      <section className="md:flex justify-center gap-16 ">
      <div>
          <img
            className=" w-[295px] mx-auto"
            src="https://i.ibb.co/cQh8Q3f/IMG-0765-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <h1 className=" mt-3 md:pt-20 text-white md:text-2xl  text-center   ">
          <span className=" text-2xl md:text-3xl font-bold pb-2"> সালমান ইসলাম পলক </span> <br />
স্বপ্নকুঞ্জের প্রতিষ্ঠাতা ।  লেখালেখিতে যার কেটেছে এক দশক   তিনি একজন অখ্যাত লেখক। তার একাধিক লেখার মধ্যে  জনপ্রিয় লেখা গল্পের নাম, "অনুতপ্ত" "মায়ের আঁচল" ।  
          </h1>
           
          <h1 className=" text-white text-2xl  ">
              <a className="flex items-center justify-center  gap-2  hover:text-red-400" href="https://mail.google.com/mail/u/0/#inbox?compose=new ">
              <MdEmail/>  salmanpolok224@gmail.com</a>
           </h1>
           <h1 className=" text-white text-2xl  ">
              <a className="flex items-center  justify-center gap-2  hover:text-red-400" href="https://www.facebook.com/salmanpolok112">
                 <FaFacebookSquare/> Salman Islam Polok</a>
           </h1>

        </div>
        
      </section>
    </div>
  );
};

export default Bio;