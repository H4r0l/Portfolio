import React from 'react'
import { useParams } from 'react-router'
import logo from "../assets/image.svg"

const Home = () => {
  useParams()
  return (
    
    <div className='w-[calc(83%)] float-right flex flex-col flex-nowrap h-screen items-center bg-gradient-to-t from-specialgreen to-specialyellow  text-black font-bold rounded-xl xl:w-[calc(88%)]'>
      <img src={logo} alt="" className='w-2/4 p-8 md:w-1/4 hover:animate-[spin_1s_ease-in-out]'/>
      <h1 className='font-Press text-3xl text-black underline decoration-solid transition ease-in-out hover:text-teal-800 hover:scale-150 h-20'>Welcome.</h1>

      <p className='mx-16 font-Alata font-regular text-xl text-center lg:text-2xl'>Here you will see my work, projects and skills</p>
    </div>
  )
}

export default Home
