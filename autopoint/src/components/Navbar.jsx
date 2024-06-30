import React from "react";
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";
import { TbHexagonLetterMFilled } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="h-full w-64 fixed top-0 left-0 bg-blue-800 p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-8">
          <TbHexagonLetterMFilled className="text-white w-20 h-20" />
        </div>
        <a
          href="#home"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaHome className="mr-2" /> Home
        </a>
        <a
          href="#services"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaServicestack className="mr-2" /> Services
        </a>
        <a
          href="#about"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaInfoCircle className="mr-2" /> About
        </a>
        <a
          href="#contact"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaEnvelope className="mr-2" /> Contact
        </a>
        <a
          href="#statistics"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <IoStatsChart className="mr-2" /> Statistics
        </a>
        <a
          href="#calendar"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaCalendarAlt className="mr-2" /> Calendar
        </a>
        <a
          href="#user"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaUserAlt className="mr-2" /> User
        </a>
        <a
          href="#log-out"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <IoLogOutSharp className="mr-2" /> Log out
        </a>
      </div>
      <div className="flex justify-center mb-8">
        <a
          href="#settings"
          className="block p-4 rounded-full transition duration-200 hover:bg-gray-700 text-white"
        >
          <FaCog className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
