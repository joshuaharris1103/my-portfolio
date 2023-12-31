import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import Joshua from '../files/joshua.jpg'



const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hello World, my name is</p>
        <h1 className="text- text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Joshua Harris
        </h1>
        <h2 className="text- text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <div>
        <img src={Joshua} alt="my face" style={{ width: "250px"}} />
        </div>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) digital experiences. Currently, I'm focused on buidling
          responsive full-stack web applications.
        </p>
        <div>
        <button>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View My Projects
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 " />
            </span> 
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
