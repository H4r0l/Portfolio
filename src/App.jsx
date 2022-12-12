import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {

const Applayout = () => (
  <>
    <Navbar/>
    <Outlet/>
  </>
)

  const router = createBrowserRouter([
    {
      element: <Applayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "About",
          element: <About/>,
        },
        {
          path: "Projects",
          element: <Projects/>
        },
        {
          path: "Cv",
          element: <Cv/>
        }
      ]
    },

  ]);
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
