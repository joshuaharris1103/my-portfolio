import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs'
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
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
