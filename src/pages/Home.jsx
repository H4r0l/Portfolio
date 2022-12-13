import React from 'react'
import logo from "../assets/image.svg"

const Home = () => {
 
  return (
    <div className='flex flex-col w-full h-screen items-center justify-items-start bg-gradient-to-t from-specialgreen to-specialyellow  text-black font-bold'>
      <img src={logo} alt="" className='w-2/4 p-8 lg:w-1/4'/>
      <h1 className='font-Press text-3xl text-black underline decoration-solid transition ease-in-out hover:text-teal-800 hover:scale-150 h-20'>Welcome.</h1>

      <p className='mx-16 font-Alata font-regular text-xl text-center lg:text-2xl'>Here you will see my work, projects and skills</p>
    </div>
  )
}

export default Home
