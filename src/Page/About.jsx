// import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <div>
    

      <section className=" lg:flex justify-center items-center lg:space-x-28 md:pt-10 p-3">
        <div>
          <img
             className=" w-full"
            src="https://i.ibb.co/jVRXBvZ/original-a43f69b8538e2acd361d5cfd34348b98.gif"
            alt=""
          />
        </div>
        {/* <div>
          <h1 className=" font-semibold text-2xl md:text-4xl text-center lg:w-[550px] "
         
          >
          “সু স্বাগতম স্বপ্নকুঞ্জ সম্পর্কে আগ্রহ প্রকাশ করার জন্য ।  
চলুন,  
            <span className=" text-blue-700">এগিয়ে যাই স্বপ্নের সঙ্গে এক ধাপ এগিয়ে...। </span>{" "}
          </h1>

          
        </div> */}
      </section>

{/*  FAQ SECTION */}
      <section className=" md:flex justify-center gap-20 p-3  ">
      <div className=" space-y-4 mt-3">
   <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
      </div>

{/* 2nd  FAQ */}


      <div className=" space-y-4 mt-3">
      <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
      </div>

      </section>

    </div>
  );
};

export default About;