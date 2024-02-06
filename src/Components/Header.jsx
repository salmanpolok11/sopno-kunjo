import { NavLink } from "react-router-dom";

const Header = () => {

  const  navLinks = <>
       <li><NavLink>হোম </NavLink></li>
       <li><NavLink>প্রোফাইল  </NavLink></li>
       <li><NavLink>পরিক্ষা সমূহ </NavLink></li>
       <li><NavLink>কন্টাক্ট </NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100 shadow-md">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        </ul>
      </div>
    <div className=" flex items-center justify-center">
       <img className=" w-24  lg:ml-10" src="https://i.ibb.co/DfV1YgM/3-a.png" alt="" />
    <a className="text-xl -ml-3 font-extrabold text-blue-700">স্বপ্নকুঞ্জ </a>
    </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal  text-white space-x-4">
        {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn btn-sm bg-black text-white">লগইন</a>
    </div>
  </div>
  );
};

export default Header;