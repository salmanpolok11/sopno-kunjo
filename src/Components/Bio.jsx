import { MdEmail } from "react-icons/md";
const Bio = () => {
  return (
    <div className=" w-full md:h-96  bg-blue-700 p-2">
      <section className="md:flex justify-center ">
      <div>
          <img
            className=" w-[300px] mx-auto"
            src="https://i.ibb.co/cQh8Q3f/IMG-0765-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <h1 className=" md:pt-28 text-white text-2xl  text-center   p-3">
          <span className=" text-3xl font-bold pb-2"> সালমান ইসলাম পলক </span> <br />
স্বপ্নকুঞ্জের প্রতিষ্ঠাতা ।  লেখালেখিতে যার কেটেছে এক দশক <br />   তিনি একজন অখ্যাত লেখক। তার একাধিক লেখার মধ্যে <br /> জনপ্রিয় লেখা গল্পের নাম, "অনুতপ্ত" "মায়ের আঁচল" ।  
          </h1>
           
           <h1 className=" text-white flex items-center justify-center gap-2 text-2xl  pb-2">
              <MdEmail/> <h1> salmanpolok224@gmail.com</h1>
           </h1>

        </div>
        
      </section>
    </div>
  );
};

export default Bio;