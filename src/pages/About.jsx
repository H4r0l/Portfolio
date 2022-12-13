import React from 'react'
import reactLogo from "../assets/myReactLogo.svg"
import javascriptLogo from "../assets/JavascriptLogo.svg"
import tailwindLogo from "../assets/tailwindLogo.svg"
import cssLogo from "../assets/cssLogo.svg"
import gitLogo from "../assets/gitLogo.svg"

const About = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-items-start bg-gradient-to-t from-specialgreen to-specialyellow  text-black font-bold'>
      <h1 className='m-6 font-Press text-3xl text-black underline decoration-solid transition ease-in-out hover:text-teal-800 hover:scale-150'>About Me</h1>

      <p className='mx-12 mt-4 pb-2 font-Alata font-regular text-xl text-center lg:text-2xl leading-[2rem] lg:mx-32'>I am a web developer with a full stack learning path and a focus on project methodology and collaborative work.</p>
      <div className=''>
        <div className='flex flex-row flex-wrap justify-around items-center px-12 pt-4 pb-4'>
        <img src={javascriptLogo} alt="" className='w-1/3 m-2 hover:scale-150 transition ease-in-out'/>
        <img src={reactLogo} alt="" className='w-1/3 m-2 hover:scale-150 transition ease-in-out'/>
        <img src={tailwindLogo} alt="" className='w-1/3 m-2 hover:scale-150 transition ease-in-out'/>
        <img src={cssLogo} alt="" className='w-1/3 m-2 hover:scale-150 transition ease-in-out'/>
        <img src={gitLogo} alt="" className='w-1/3 m-2 hover:scale-150 transition ease-in-out'/>
        </div>
      </div>
    </div>
  )
}

export default About
