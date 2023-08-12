import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Joshua from "../files/joshua.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Joshua} alt="my face" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <div className="hidden md:flex">
        <ul className="md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center itmes-center'}>
          <li className="ey-6 text-4xl">Home</li>
          <li className="ey-6 text-4xl">About</li>
          <li className="ey-6 text-4xl">Skills</li>
          <li className="ey-6 text-4xl">Projects</li>
          <li className="ey-6 text-4xl">Contact</li>
        </ul>

      {/* Socials */}
      <div></div>
    </div>
  );
};

export default Navbar;
