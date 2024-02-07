import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";

const Profile = () => {

  const { user} = useContext(Authcontext)
  console.log(user);

  return (
    <div>
      <secton>
        <div className="reletive w-full md:h-[420px]  bg-blue-700"
      
        >
          <img
            className=" mx-auto pt-20 "
            src="https://i.ibb.co/x8sNz7Y/2205-w048-n004-118b-p1-118-removebg-preview.png"
            alt=""
          />
        </div>

        <div className=" mx-auto absolute ml-16 -mt-28 md:-mt-32 lg:bottom-16 w-60 md:w-72 h-60 md:h-72 
         border-2 md:ml-40 bg-emerald-400 pt-2 rounded-xl shadow-md"
         data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="900"
      >
          
               { user && 
                 <div className=" mx-auto md:w-40 text-center">
                 <img className=" w-32 mx-auto h-32  md:h-[150px] md:w-[150px] rounded-full"  src={user.photoURL} alt="" />
                 <h1> {user.displayName} </h1>
                 <h1> {user.email} </h1>
                 </div>
                }
        </div>

      </secton>
    </div>
  );
};

export default Profile;
