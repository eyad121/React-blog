import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [nav, setNav] =useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
        <h1 className='uppercase w-full text-3xl font-bold text-[#00df9a]'>react.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Home</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Company</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Resource</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>About</li>
            <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</li>
        </ul>
        <div className='block md:hidden' onClick={handleNav} >
            {nav ? <IoCloseSharp size={20}/> : <IoMenu  size={20}/>}
        </div>
            
        <div className={nav ? 'fixed left-0 top-0 border-r border-r-gray-900 w-[60%] h-full bg-[#000300] transition delay-150 duration-300 ease-in-out' : 'fixed hidden transition delay-150 duration-300 ease-in-out'}>
        <h1 className='uppercase w-full text-3xl font-bold text-[#00df9a] m-4'>react.</h1>

            <ul className='uppercase p-4 '>
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>Company</li>
                <li className='p-4 border-b border-b-gray-600'>Resource</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
// rafce