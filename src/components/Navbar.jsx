import React, {useState} from "react";
import logo from "../assets/ramzilogo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#102b53] text-gray-300">
      <div>
        <img
          src={logo}
          alt="My Logo"
          style={{ width: "250px" }}
        />
      </div>
      {/* Menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>

      {/* Menu Icons*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#102b53] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
          hover:ml-[-10px] duration-300 bg-blue-600">
          <a className='flex justify-between items-center w-full text-gray-300' 
          href="/">
          LinkedIn <FaLinkedin size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
          hover:ml-[-10px] duration-300 bg-[#333333]">
          <a className='flex justify-between items-center w-full text-gray-300' 
          href="/">
          GitHub <FaGithub size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
          hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a className='flex justify-between items-center w-full text-gray-300' 
          href="/">
          Email <HiOutlineMail size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
          hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a className='flex justify-between items-center w-full text-gray-300' 
          href="/">
          Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
