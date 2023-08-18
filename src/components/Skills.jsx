import React from 'react'

import HTML from '../files/html.png'
import CSS from '../files/css.png'
import JavaScript from '../files/javascript.png'
import ReactImg from '../files/react.png'
import Node from '../files/node.png'
import AWS from '../files/aws.png'
import GitHub from '../files/github.png'
import Tailwind from '../files/tailwind.png'
import Mongo from '../files/mongo.png'
import Postgresql from '../files/postgresql.png'
import Python from '../files/python.png'
import Bootstrap from '../files/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
            <p className='py-4'>// These are the technologies I have worked with</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt='Node icon' />
                <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={AWS} alt='AWS icon' />
                <p className='my-4'>AWS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt='Github icon' />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt='Mongo DB icon' />
                <p className='my-4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                <p className='my-4'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Postgresql} alt='PostgreSql icon' />
                <p className='my-4'>POSTGRESQL</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto py-2' src={Bootstrap} alt='Bootstrap icon' />
                <p className='my-4'>BOOTSTRAP</p>
            </div>
        </div>    
    </div>
    </div>
  )
}

export default Skills