import React, {useState} from 'react'
import * as faIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import {SidebarData} from "./SidebarData"
import { IconContext } from 'react-icons'

const Navbar = () => {

  return (
    <IconContext.Provider value={{color: "undefined"}}>
      <nav className={""}>
        <ul className="flex flex-col bg-gradient-to-t from-specialyellow to-specialgreen h-screen w-[calc(15%)] absolute items-center rounded-xl ml-[calc(1%)] xl:w-[calc(10%)]">
          {SidebarData.map((item, index) => {
            return (
                <li key={index} className=" flex shadow-2xl rounded-full font-Press justify-center my-8 p-4 bg-emerald-700 list-none hover:scale-110 transition ease-in-out md:w-[calc(50%)]">
                  <Link to={item.path}>
                    <span className='text-xl'>{item.icons}</span>
                  </Link>
                </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Navbar
