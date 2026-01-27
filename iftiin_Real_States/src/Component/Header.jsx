import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { isLoggedIn, profile } = useAuth();
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0 flex">
              <Link
                to={"/"}
                className="text-3xl font-bold text-[#1E3A8A] text-primary tracking-wide"
              >
                RealHome
              </Link>
            </div>
            <nav className="flex items-center gap-5">
              <NavLink
                to={"/"}
                className={({
                  isActive,
                }) => ` px-1 pt-1 border-b-2 font-semibold text-gray-900 font-medium
        ${isActive ? "border-green-700 text-green-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
        `}
              >
                Home
              </NavLink>

              <NavLink
                to={"/about"}
                className={({
                  isActive,
                }) => ` px-1 pt-1 border-b-2 font-semibold  text-sm font-medium
        ${isActive ? "border-green-700 text-green-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
        `}
              >
                About
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  to={"/dashboard"}
                  className={({
                    isActive,
                  }) => ` px-1 pt-1 border-b-2 font-semibold  text-sm font-medium
        ${isActive ? "border-green-700 text-green-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
        `}
                >
                  Dashboard
                </NavLink>
              )}

              <NavLink
                to={"/contact"}
                className={({
                  isActive,
                }) => ` px-1 pt-1 border-b-2 font-semibold  text-sm font-medium
        ${isActive ? "border-green-700 text-green-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
        `}
              >
                Contact
              </NavLink>
            </nav>

            <div className="flex items-center gap-4">
             {
              isLoggedIn ? (
                <div className="flex items-center gap-1">
                <FaUser className="text-gray-600 cursor-pointer" />
                 <span className="text-blue-700 cursor-pointer hover:text-blue-900">{profile?.username}</span>
                  </div>
              ): (
                  <>
                  <NavLink
                    to="/signIn"
                    className="px-4 py-3 border-[#1E3A8A] text-[#1E3A8A] font-semibold border-2 rounded-md w-[130px] text-center"
                  >
                    Sign In
                  </NavLink>

                  <NavLink
                    to="/getStarted"
                    className="px-4 py-3 bg-[#1E3A8A] text-white font-semibold rounded-md w-[130px] text-center"
                  >
                    Get Started
                  </NavLink>
                </>
              )
             }
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
