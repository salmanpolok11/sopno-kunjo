import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className=" pt-16">
          <section className="md:flex  h-screen justify-center items-center p-3 ">
                 <div
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                 >
                      <img className=" md:w-[600px]  " src="https://i.ibb.co/H4KxDGY/6300959.jpg" alt="" />
                 </div>

                 <div 
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                 >
                     <h1 className=" text-center text-2xl font-semibold mb-3"> সঠিক তথ্য দিন </h1>
                     <form className=" space-y-2 md:w-96">

                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="text" name="name" id="" placeholder="নামঃ" required /> <br />

                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="url" name="image" id="" placeholder="ছবির ইউআরএলঃ" /> <br />

                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="email" name="email" id="" placeholder="ইমেইলঃ" required /> <br />

                        <input  className=" bg-blue-700   text-xl w-full p-3 rounded-lg text-white" 
                         type="password" name="password" id="" placeholder="পাসওয়ার্ডঃ " required/> <br />

                         <input className="btn btn-outline btn-error w-full px-3 rounded-lg text-2xl
                          text-white"  type="submit" value="রেজিষ্ট্রেশন " />
                     </form>
               
                     <h1 className="  text-xl font-semibold ml-5 mt-3">ইতোমধ্যে আপনার একাউন্ট রয়েছে?  <br /> তাহলে   <NavLink to='/login' className=' font-semibold text-blue-700'> 
                    লগইন  </NavLink>  করুন।  </h1>
                 </div>

           </section>
    </div>
  );
};

export default Register;