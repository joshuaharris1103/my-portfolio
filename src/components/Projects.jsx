import React from 'react'
import Joshua from '../files/joshua.jpg'
// import project photos/////////

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

{/*  <div style={{backgroundImage:`url(${projectimg})`}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> */}
        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${Joshua})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Code
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects