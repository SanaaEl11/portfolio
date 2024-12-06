import React from 'react'
import aboutimg from '../assets/about.jpg'
function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12'id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex '>
            <div className='my-auto mx-6 '>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a highly motivated and detail-oriented individual with a passion for web development. I have a
                    strong foundation in HTML, CSS, and JavaScript, and I am always looking to expand my skills
                    and knowledge in the field. I am a quick learner, a team player, and a creative
                    problem solver.
                </p>
            </div>
        </div>
      
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimg}alt=''width={300}height={300}/>
        </div>
    </div>
  )
}

export default About
