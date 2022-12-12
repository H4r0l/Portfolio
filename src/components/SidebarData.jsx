import React from 'react'
import * as faIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "H",
        path: "/",
        icons: <AiIcons.AiFillHome/>,
        cName: "nav-text flex items-center justify-start h-16 py-2 pr-0 pl-4 list-none",
    },
    {
        title: "About",
        path: "/About",
        icons: <faIcons.FaQuestion/>,
        cName: "nav-text flex items-center justify-start h-16 py-2 pr-0 pl-4 list-none",
    },
    {
        title: "Projects",
        path: "/Projects",
        icons: <faIcons.FaFolder/>,
        cName: "nav-text flex items-center justify-start h-16 py-2 pr-0 pl-4 list-none",
    },
    {
        title: "Cv",
        path: "/Cv",
        icons: <faIcons.FaElementor/>,
        cName: "nav-text flex items-center justify-start h-16 py-2 pr-0 pl-4 list-none",
    },

]