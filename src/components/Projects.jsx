import React from 'react'
import Development from '../files/Development.png'
// import project photos/////////
import CourtDate from '../files/CourtDate_Screenshot.jpeg'
import TicTacToe from '../files/TicTacToe_Screenshot.jpeg'
import Matching from '../files/Matching_Screenshot.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
{/*  //////////////////////////////////////////// */}

                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${CourtDate}`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Collab MERN Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://courtdate.netlify.app/' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/Tastebucket/FrontEnd-Court-Date' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Code
                                </button>
                            </a>  
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${Matching})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        JavaScript DOM Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='http://www.harrisjoshua.com/NBA-Card-Matching-Game/' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/joshuaharris1103/NBA-Card-Matching-Game' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Code
                                </button>
                            </a>
                            
                        </div>
                    </div>
                    

                </div>

                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${TicTacToe})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Simple JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='http://www.harrisjoshua.com/ttt-project/' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/joshuaharris1103/ttt-project'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700'>
                                    Code
                                </button>
                            </a>
                            
                        </div>
                    </div>
                    

                </div>
                
                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${Development})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Application in Development
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
                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${Development})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Application in Development
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
                {/* Card Item */}
                <div 
                style={{backgroundImage:`url(${Development})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Application in Development
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