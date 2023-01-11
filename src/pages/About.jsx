import React from 'react'
import reactLogo from "../assets/myReactLogo.svg"
import javascriptLogo from "../assets/JavascriptLogo.svg"
import tailwindLogo from "../assets/tailwindLogo.svg"
import cssLogo from "../assets/cssLogo.svg"
import gitLogo from "../assets/gitLogo.svg"

const About = () => {
  return (
    <div className='flex flex-col h-screen items-center w-[calc(83%)] float-right justify-items-start bg-gradient-to-t from-specialgreen to-specialyellow  text-black font-bold rounded-xl xl:w-[calc(88%)]'>
      <h1 className='m-6 font-Press text-3xl text-black underline decoration-solid transition ease-in-out hover:text-teal-800 hover:scale-150 md:text-4xl'>About Me</h1>

      <p className='mx-12 mt-4 pb-2 font-Alata font-regular text-xl text-center  leading-[2rem] md:text-3xl md:mx-[calc(40%)]'>I am a web developer with a full stack learning path and a focus on project methodology and collaborative work.</p>
      <div className=''>
        <div className='flex flex-row flex-wrap justify-around items-center px-12 pt-4 pb-4'>
        <img src={javascriptLogo} alt="" className='w-[calc(40%)] sm:w-[calc(15%)] md:w-[calc(20%)] m-2 animate-spin-slow '/>
        <img src={reactLogo} alt="" className='w-[calc(40%)] sm:w-[calc(15%)] md:w-[calc(20%)] m-2 animate-spin-slow '/>
        <img src={tailwindLogo} alt="" className='w-[calc(40%)] sm:w-[calc(15%)] md:w-[calc(20%)] m-2 animate-spin-slow '/>
        <img src={cssLogo} alt="" className='w-[calc(40%)] sm:w-[calc(15%)] md:w-[calc(20%)] m-2 animate-spin-slow '/>
        <img src={gitLogo} alt="" className='w-[calc(40%)] sm:w-[calc(15%)] md:w-[calc(20%)] m-2 animate-spin-slow '/>
        </div>
      </div>
    </div>
  )
}

export default About
