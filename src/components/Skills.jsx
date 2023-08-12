import React from 'react'

import HTML from '../files/html.png'
import CSS from '../files/html.png'
import JavaScript from '../files/javascript.png'
import ReactImg from '../files/react.png'
import Node from '../files/node.png'
import AWS from '../files/aws.png'
import GitHub from '../files/github.png'
import Tailwind from '../files/tailwind.png'
import Mongo from '../files/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
    <div className='max-w-[100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
            <p className='py-4'>// These are the technologies I have worked with</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills