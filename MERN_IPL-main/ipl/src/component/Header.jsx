import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import img1 from "../images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'HOME' },
    { id: 2, text: 'SCHEDULE' },
    { id: 3, text: 'STATS' },
    { id: 4, text: 'TEAMS' },
    { id: 5, text: 'VIDEOS' },
  ];

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white font-bold font-sans '>
      <img src={img1}className=' h-12 ' ></img>
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link to={'/'+item.text} >
          <li
            key={item.id}
            className='p-4 hover:bg-indigo-900 te rounded-xl m-2 cursor-pointer duration-300 '
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img src={img1}></img>
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={'/'+item.text} ><li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;