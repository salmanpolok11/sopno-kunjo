import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(Authcontext);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
        alert("আপনার লগআউট সফলভাবে হয়েছে। ");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">হোম </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">প্রোফাইল </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/exam">পরিক্ষা সমূহ </NavLink>
      </li>
      <li>
        <NavLink to="/contract">যোগাযোগ </NavLink>
      </li>
      <li>
        <NavLink to="/about">সম্পর্কে</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink onClick={handleLogout} to="login">
            লগআউট{" "}
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login">লগইন</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className=" fixed navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <NavLink to="/">
          <div className=" mr-5 flex items-center justify-center">
            <img
              className=" md:w-32  w-16  lg:ml-10"
              src="https://i.ibb.co/DfV1YgM/3-a.png"
              alt=""
            />
            <a className=" text-xl md:text-2xl -ml-3 md:font-extrabold text-blue-700">
              স্বপ্নকুঞ্জ{" "}
            </a>
          </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-black space-x-2 font-semibold text-xl">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end ">
        {user && (
          <section className=" flex items-center">
            <h1 className=" hidden md:block mr-2 text-black"> {user.displayName} </h1>

            <div className="  avatar online lg:mr-10">
              <div className=" w-9 md:w-14 rounded-full ">
                <img
                  className=" w-32 mx-auto h-32  md:h-[150px] md:w-[150px] rounded-full"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/bFsc5qQ/7309681.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </section>
        )}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] 
        p-2 shadow bg-base-100 rounded-box w-28 space-y-2 -ml-16 "
          >
            {navLinks}
            
          </ul>
        </div>
        {/* <NavLink to='/login' className="btn btn-sm bg-black text-white">লগইন</NavLink> */}
      </div>
    </div>
  );
};

export default Header;
