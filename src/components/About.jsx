import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
<div className='sm:text-right text-4xl font-bold '>
    <p>Hi, I'm Joshua, nice to meet you. Feel free to take a look around.</p>
</div>
<div>
    <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating full-stack software that could help a variety of people from individuals to businesses, to corporations alike. How could I be of assistance?</p>
</div>
            </div>
            </div>
        </div>
  )
}

export default About