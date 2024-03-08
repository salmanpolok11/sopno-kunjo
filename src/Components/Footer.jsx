import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdReadMore } from "react-icons/md";

const Footer = () => {
  return (
    <div>
   <footer className=" lg:space-x-20 mt-10 md:mt-20  mx-auto md:flex justify-center  bg-[#536BF6] text-black border">
   <section className=" mt-6 ">
      <img className=" w-32 mx-auto  md:ml-10"  src="https://i.ibb.co/0FqcghF/588-removebg-preview.png" alt="" />
    <h1 className=" text-center font-semibold text-xl ">
          “স্বপ্ন দেখ বিজয়ের, <br /> সাধনা করো{}
            <span className=" text-white">শ্রেষ্ঠত্বের। </span>{}
          </h1>
        </section> 

  <section>
         <img className=" w-96   mx-auto" 
         src="https://i.ibb.co/bgCh034/l-R0-K9l-facebook.gif" alt="" />
  </section>

<section className=" text-white mt-7">
    <h1 className=" text-center text-2xl">সোশাল মিডিয়া <hr /></h1>
    <div className=" mt-4  text-center">
    {/* */}
    <h1 className=" text-white flex items-center justify-center gap-2  text-xl md:text-2xl  ">
           <h1></h1>
           </h1>

           <h1 className=" text-white text-xl md:text-2xl  ">
              <a className="flex items-center justify-center  gap-2  hover:text-red-400" href="https://mail.google.com/mail/u/0/#inbox?compose=new ">
              <MdEmail/>  salmanpolok224@gmail.com</a>
           </h1>

           <h1 className=" text-white text-xl md:text-2xl  ">
              <a className="flex items-center justify-center  gap-2  hover:text-red-400" href="https://www.facebook.com/salmanpolok112">
                 <FaFacebookSquare/> Salman Islam Polok</a>
           </h1>
           <NavLink to='/admin'>
            <h1  className=" text-white text-xl md:text-xl btn-outline btn-ghost w-32 px-3 mx-auto mt-2 rounded-md mb-3">
              <button className="flex items-center  justify-center gap-2 text-center  hover:text-red-400" >
              <MdReadMore />আরো   </button>
           </h1>
            </NavLink>
    </div>

</section>
 

</footer>
    </div>
  );
};

export default Footer;