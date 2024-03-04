import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import "./Global.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const[menu,setMenu]=useState(false);
  return (
    <>
      <nav className="w-screen h-24 border-2 border-black flex justify-around items-center relative shadow-md"style={{background:"rgba(10, 61, 98,1.0)"}}>
        <div className="p-3">
          <h3 className="text-2xl font-bold text-red-400"><NavLink className=" hover:text-red-400" to="/">MyPortFolio</NavLink></h3>
        </div>

        <div className="h-12 w-50 Right-Navbar">
          <ul className="flex justify-between 
            items-center pt-2 
            text-2xl font-serif
          text-white
            text-nowrap
            cursor-pointer"
          >
            <li>
              <NavLink to="/" className="hover:text-red-400">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Skills" className="hover:text-red-400">Skills</NavLink> 
            </li>
            <li>
              <NavLink to="/About" className="hover:text-red-400">About Me</NavLink>
            </li>

            <li>
            <NavLink to="/Project" className="hover:text-red-400">Projects</NavLink>
            </li>

            <li>
              <NavLink to="/Contact" className="hover:text-red-400">Contact</NavLink>
            </li>


             <CiMenuFries className="text-4xl Menu-icon" onClick={()=>setMenu(!menu)}/>
          </ul>
        </div>
      </nav>

      <div className={`h-screen w-52 p-3 border-4 border-black 
           ${menu===false ? "hidden" : "block"}  
            absolute 
            top-0
            right-0`} style={{background:"rgba(10, 61, 98,1.0)"}}>
      <ul className="flex justify-between
            flex-col
            items-center pt-2 
            text-xl font-serif
          text-white
            text-nowrap
            cursor-pointer
            gap-3
            "
          >
            <li>
              <NavLink to="/" className="hover:text-red-400"  onClick={()=>setMenu(false)}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/Skills" className="hover:text-red-400"  onClick={()=>setMenu(false)}>Skills</NavLink> 
            </li>
            <li>
              <NavLink to="/About" className="hover:text-red-400"  onClick={()=>setMenu(false)}>About Me</NavLink>
            </li>

            <li>
            <NavLink to="/Project" className="hover:text-red-400"  onClick={()=>setMenu(false)}>Projects</NavLink>
            </li>

            <li>
            <NavLink to="/Contact" className="hover:text-red-400">Contact</NavLink>
            </li>

             <MdCancel className="text-4xl absolute top-0 right-0 hover:text-red-500" onClick={()=>setMenu(false)}/>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
