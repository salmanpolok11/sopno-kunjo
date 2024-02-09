import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
 const { googleLogin , userLogin } = useContext(Authcontext)

 
 const handaleUserLogin = (e) => {
 e.preventDefault()
 const form = e.target;
 const email = form.email.value;
 const password = form.password.value;
 console.log(email , password);

   userLogin( email , password)
   .then( res => {
     console.log( res.user);
     swal("ধন্যবাদ ।!", "আপনার লগইন সফলভাবে হয়েছে।!", "success");

     form.reset()
   })
   .catch( err => {
     console.error(err);
   })



 }


  const handaleGoogleLogin = ()=> {
       googleLogin()
       .then( res => {
         console.log(res.user);
         if(res.user){
          swal("ধন্যবাদ ।!", "আপনার লগইন সফলভাবে হয়েছে।!", "success");
         }
       })
       .catch( err => {
         console.error(err.user);
       })
  }

  return (
    <div className=" pt-16 md:pt-32 p-1 md:p-3">
           <section className="md:flex  justify-center items-center gap-10 p-3 ">
                 <div>
                      <img className=" md:w-[600px]  " 
                      src="https://i.ibb.co/Hg55K2d/r8-Huxylbz-H.gif" alt="" />
                 </div>

                 <div className=" mt-8">
                     <h1 className=" text-center text-2xl font-semibold mb-3" data-aos="flip-down"> সঠিক তথ্য দিন </h1>
                     <form onSubmit={handaleUserLogin} className=" space-y-2 md:w-96">
                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="email" name="email" id="" placeholder="ইমেইলঃ" /> <br />

                        <input  className=" bg-blue-700   text-xl w-full p-3 rounded-lg text-white" 
                         type="password" name="password" id="" placeholder="পাসওয়ার্ডঃ " /> <br />

                         <input className="btn btn-outline btn-error w-full px-3 rounded-lg text-2xl
                          text-white"  type="submit" value="লগইন" />
                     </form>
               
                     <h1 className="  text-xl font-semibold ml-5 mt-3">আপনি কি স্বপ্নকুঞ্জে নতুন? 
                    তাহলে <br />  <NavLink to='/register' className=' font-semibold text-blue-700'> 
                     রেজিষ্ট্রেশন </NavLink> 
                     অথবা <button onClick={handaleGoogleLogin}  
                     className=' font-semibold text-blue-700'>গুগল </button> দিয়ে করুন  ।  </h1>
                 </div>

           </section>
    </div>
  );
};

export default Login;