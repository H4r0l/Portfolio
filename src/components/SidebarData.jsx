import React from 'react'
import * as faIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome/>,
        cName: "flex flex-row gap-2 shadow-2xl rounded-3xl m-4 border-black font-Press items-center justify-start h-16 py-2 pr-0 pl-6 list-none",
    },
    {
        title: "About",
        path: "/About",
        icons: <faIcons.FaQuestion/>,
        cName: "flex flex-row gap-2 shadow-2xl rounded-3xl m-4 border-black font-Press items-center justify-start h-16 py-2 pr-0 pl-6 list-none",
    },
    {
        title: "Projects",
        path: "/Projects",
        icons: <faIcons.FaFolder/>,
        cName: "flex flex-row gap-2 shadow-2xl rounded-3xl m-4 border-black font-Press items-center justify-start h-16 py-2 pr-0 pl-6 list-none",
    },
    {
        title: "Cv",
        path: "/Cv",
        icons: <faIcons.FaElementor/>,
        cName: "flex flex-row gap-2 shadow-2xl rounded-3xl m-4 border-black font-Press items-center justify-start h-16 py-2 pr-0 pl-6 list-none",
    },

]