import React from "react";
import {
  FaHome,
  FaKey,
  FaShoppingCart,
  FaTag,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const DashboardLayout = () => {
  const linkBase =
    "flex items-center gap-4 px-6 py-4 transition-all duration-300 border-r-4";
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? `${linkBase} bg-blue-50 text-blue-700 border-blue-600 font-semibold`
      : `${linkBase} text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-900`;
      const {logout} = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-72 bg-white flex flex-col shadow-xl z-20">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-blue-200 shadow-lg">
              <FaHome className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              RealHome
            </span>
          </div>
        </div>

        <nav className="flex-1 mt-4">
          <p className="px-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
            Properties
          </p>

          <NavLink to="/dashboard" end className={navLinkStyles}>
            <FaHome size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="buy" className={navLinkStyles}>
            <FaShoppingCart size={20} />
            <span>Buy Listings</span>
          </NavLink>

          <NavLink to="rent" className={navLinkStyles}>
            <FaKey size={20} />
            <span>Rental Units</span>
          </NavLink>

          <NavLink to="sell" className={navLinkStyles}>
            <FaTag size={20} />
            <span>My Inventory</span>
          </NavLink>
        </nav>
        <div className="p-6 border-t border-slate-100">
          <button onClick={()=> logout()} className="flex items-center gap-3 text-slate-500 hover:text-red-600 transition-colors font-medium">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="relative flex items-center w-full max-w-md group">
            <div className="absolute left-4 text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <FaSearch size={16} />
            </div>
            <input
              type="text"
              placeholder="Search by location or ZIP..."
              className="w-full bg-slate-100 border-2 border-transparent py-2.5 pl-12 pr-4 rounded-2xl text-sm text-slate-700 
               placeholder:text-slate-400 transition-all duration-300
               focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 outline-none"
            />
          </div>
        </header>

        <main className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back, Sarah
            </h2>
            <p className="text-slate-500 mt-1">
              Here is what's happening with your properties today.
            </p>
          </div>

          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
