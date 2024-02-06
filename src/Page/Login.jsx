import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className=" pt-16">
           <section className="md:flex  h-screen justify-center items-center p-3 ">
                 <div >
                      <img className=" md:w-[600px]  " src="https://i.ibb.co/dQzXH0Y/9959527-1.jpg" alt="" />
                 </div>

                 <div >
                     <h1 className=" text-center text-2xl font-semibold mb-3"> সঠিক তথ্য দিন </h1>
                     <form className=" space-y-2 md:w-96">
                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="email" name="email" id="" placeholder="ইমেইলঃ" /> <br />

                        <input  className=" bg-blue-700   text-xl w-full p-3 rounded-lg text-white" 
                         type="password" name="password" id="" placeholder="পাসওয়ার্ডঃ " /> <br />

                         <input className="btn btn-outline btn-error w-full px-3 rounded-lg text-2xl
                          text-white"  type="submit" value="লগইন" />
                     </form>
               
                     <h1 className="  text-xl font-semibold ml-5 mt-3">আপনি কি স্বপ্নকুঞ্জে নতুন? 
                    তাহলে <br />  <NavLink to='/register' className=' font-semibold text-blue-700'> 
                     রেজিষ্ট্রেশন </NavLink>  করুন।  </h1>
                 </div>

           </section>
    </div>
  );
};

export default Login;