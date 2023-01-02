import React from 'react'
import githubLogo from "../assets/githubLogo.svg"
import arrow from "../assets/arrow.svg"

const Projects = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-items-start bg-gradient-to-t from-specialgreen to-specialyellow  text-black font-bold'>
      <h1 className='mt-4 mx-6 font-Press text-3xl text-center transition ease-in-out hover:text-teal-800 hover:scale-150 pb-8'>My Projects</h1>

        <div class="w-2/3 p-4 text-left bg-emerald-500 border rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Project Seeds</h5>
            <p class="mb-5 text-base text-white dark:text-white">Created with pure CSS & HTMl</p>
            <div class="items justify-center space-y-4 ">
                <a href="https://github.com/H4r0l/Project-Semillas.git" class="w-full  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div class="text-left flex flex-row">
                        <div class="-mt-1 font-sans text-sm font-semibold">Github Repository</div>
                        <img src={githubLogo} alt="" className='px-2'/>
                    </div>
                </a>
                <a href="https://proyecto-semillas.netlify.app/" class="w-full  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div class="text-left flex flex-row">
                        <div class="-mt-1 font-sans text-sm font-semibold">Deploy</div>
                        <img src={arrow} alt="" className='px-2' />
                    </div>
                </a>
            </div>
        </div>


        <div class="w-2/3 p-4 my-4 text-left bg-emerald-500 border rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Calculator</h5>
            <p class="mb-5 text-base text-white dark:text-white">Created with Tailwind & JavaScript</p>
            <div class="items-center justify-center space-y-4 ">
                <a href="https://github.com/H4r0l/Calculadora.git" class="w-full  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                    <div class="text-left flex flex-row">
                        <div class="-mt-1 font-sans text-sm font-semibold">Github Repository</div>
                        <img src={githubLogo} alt="" className='px-2'/>
                        <img src="" alt="" />
                    </div>
                </a>
                <a href="https://dev--calculad0ra-basica.netlify.app/" class="w-full  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <div class="text-left flex flex-row">
                        <div class="-mt-1 font-sans text-sm font-semibold">Deploy</div>
                        <img src={arrow} alt="" className='px-2' />
                    </div>
                </a>
            </div>
        </div>

      
    </div>
  )
}

export default Projects
