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
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-full w-64 fixed top-0 left-0 bg-blue-800 p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-8">
          <TbHexagonLetterMFilled className="text-white w-20 h-20" />
        </div>
        <Link
          to="#home"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaHome className="mr-2" /> Home
        </Link>
        <Link
          to="services"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaServicestack className="mr-2" /> Services
        </Link>
        <Link
          to="about"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaInfoCircle className="mr-2" /> About
        </Link>
        <Link
          to="#contact"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaEnvelope className="mr-2" /> Contact
        </Link>
        <Link
          to="#statistics"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <IoStatsChart className="mr-2" /> Statistics
        </Link>
        <Link
          to="calendar"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaCalendarAlt className="mr-2" /> Calendar
        </Link>
        <Link
          to="user"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <FaUserAlt className="mr-2" /> Login / SignUp
        </Link>
        <Link
          to="#log-out"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-white flex items-center"
        >
          <IoLogOutSharp className="mr-2" /> Log out
        </Link>
      </div>
      <div className="flex justify-center mb-8">
        <Link
          to="#settings"
          className="block p-4 rounded-full transition duration-200 hover:bg-gray-700 text-white"
        >
          <FaCog className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
