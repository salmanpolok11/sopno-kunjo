import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase";

const Register = () => {
  const {createUserLogin } = useContext(Authcontext)

  const  handaleCreateUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const number = form.num.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name , image, number, email , password);

    createUserLogin( email , password ) 
    .then( res => {
       updateProfile ( res.user , {
        phoneNumber : number,
         displayName: name,
         photoURL: image,
       })
       if(res.user){
        alert("আপনার একাউন্ট সফলভাবে তৈরি হয়েছে ।   ধন্যবাদ । ")
         form.reset()
       }
    })
 .catch( err => {
   console.error(err);
 })


  }

  return (
    <div className=" pt-20">
          <section className="md:flex  justify-center items-center p-3 ">
                 <div>
                      <img className=" md:w-[600px]  " src="https://i.ibb.co/H4KxDGY/6300959.jpg" alt="" />
                 </div>

                 <div>
                     <h1 className=" text-center text-2xl font-semibold mb-3"> সঠিক তথ্য দিন </h1>
                     <form onSubmit={handaleCreateUser} className=" space-y-2 md:w-96">

                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="text" name="name" id="" placeholder="নামঃ" required /> <br />

                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="url" name="image" id="" placeholder="ছবির ইউআরএলঃ" /> <br />

                        <input className="  bg-blue-700 w-full p-3 rounded-lg text-xl text-white "  
                         type="number" name="num" id="" placeholder="ফোন নাম্বারঃ" /> <br />

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