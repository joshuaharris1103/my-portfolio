import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Joshua from '../files/joshua.jpg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
        <img src={Joshua} alt='my face' style={{width: '50px'}}/>
        </div>

        {/* menu */}
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* Hamburger */}
        {/* Mobile Menu */}
        {/* Socials */}
    </div>
  )
}

export default Navbar