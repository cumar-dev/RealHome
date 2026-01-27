import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1e293B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <h1 className="font-bold text-2xl hover:text-blue-700">
              RealHome
            </h1>
            <p className="text-base font-semibold mt-1">
              Find your dream home eazily
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md text-gray-600 hover:text-white hover:bg-blue-600 transition"
              >
                <FaFacebook className="text-white text-[25px]" />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md text-gray-600 hover:text-white hover:bg-gray-800 transition"
              >
                <FaGithub className="text-[25px]" />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md text-gray-600 hover:text-white hover:bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] transition"
              >
                <FaInstagram className="text-white text-[25px]" />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md text-gray-600 hover:text-white hover:bg-green-500 transition"
              >
                <FaWhatsapp className="text-white text-[25px]" />
              </a>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl hover:text-blue-700">Links</h1>
            <div className="flex flex-col gap-4 mt-2">
              <Link
                className="text-base font-semibold hover:text-indigo-800"
                to={"/buy"}
              >
                Buy
              </Link>
              <Link
                className="text-base font-semibold hover:text-indigo-800"
                to={"/rent"}
              >
                Rent
              </Link>
              <Link
                className="text-base font-semibold hover:text-indigo-800"
                to={"/sell"}
              >
                sell
              </Link>
              <Link
                className="text-base font-semibold hover:text-indigo-800"
                to={"/about"}
              >
                About
              </Link>
              <Link
                className="text-base font-semibold hover:text-indigo-800"
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl hover:text-blue-700">Contact</h1>
            <div className="flex flex-col gap-4 mt-2">
              <p className="flex items-center gap-1">
                <MdOutlineMail />
                <span className="text-base font-semibold hover:text-indigo-800">
                  OmarAbdi123@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-1">
                <MdOutlinePhoneAndroid />
                <span className="text-base font-semibold hover:text-indigo-800">
                  +251618753623
                </span>
              </p>
              <p className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="text-base font-semibold hover:text-indigo-800">
                  123 Main Street, Mogadishu
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
