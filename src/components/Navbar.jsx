import React, {useState} from 'react'
import * as faIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import {SidebarData} from "./SidebarData"
import { IconContext } from 'react-icons'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{color: "undefined"}}>
      <div className='Navbar bg-white h-20 flex justify-start items-center'>
        <Link to="#" className='menu-bars ml-8 text-3xl bg-none text-black'>
        <faIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active duration-700  bg-white flex justify-center h-screen fixed top-0 w-64 left-[-100%]" : "nav-menu duration-300 left-0"}>
        <ul className="nav-menu-items w-full" onClick={showSidebar}>
          <li className="navbar-toggle bg-white flex items-center justify-start h-20 w-full">
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                {item.icon}
                  <span className='ml-[16px]'>{item.title}</span>
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
