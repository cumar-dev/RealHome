import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import supabase from "../Lib/supabse";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaHeart, FaHome } from "react-icons/fa";

const Home = () => {
  const [buyerData, setBuyerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchBuyData = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("BuyerData")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);
      if (error) throw error;
      setBuyerData(data || []);
    } catch (error) {
      console.error("failed fetching buying data");
    } finally {
      setIsLoading(false);
    }
  };
 useEffect(() => {
  if (!user) {
    toast.error("Please sign in first");
    navigate("/signIn");
    return;
  }

  const fetchData = async () => {
    await fetchBuyData();
  };

  fetchData();
}, [user]);

  return (
    <div className="bg-gray-50">
      <div
        className="h-[450px] bg-center bg-cover flex items-center justify-center mb-4"
        style={{
          backgroundImage:
            "url('https://static.rdc.moveaws.com/images/hero/default/2025-10/jpg/hp-hero-desktop.jpg')",
        }}
      >
        <div className="flex justify-center items-center flex-col gap-2 text-center px-4">
          <h1 className="text-white text-[56px] leading-[67px] font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-gray-200 text-[rgb(190, 184, 176)] leading-[24px] text-[16px] text-center">
            Explore verified properties for buying, renting, and selling — all
            in one place.
          </p>
          <Link to={`/dashboard`}>
            <button className="bg-[#AB1A1F] mt-1 text-white px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-red-700 transition">
              Explore Properties
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-4">
        <div className="p-4 flex items-center gap-1 mt-2 mb-4">
          <FaHome className="text-gray-800 text-xl" />
          <h1 className="text-[24px] font-bold leading-[28px]">New Listings</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 p-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buyerData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-2xl transition overflow-hidden flex flex-col hover:shadow-lg "
              >
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    New
                  </span>
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                    <FaHeart className="text-red-600" />
                  </button>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    {item.price.toLocaleString()}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">{item.bedrooms}</span> bed
                    </p>
                    <p>
                      <span className="font-semibold">{item.bathrooms}</span>{" "}
                      bath
                    </p>
                    <p>
                      <span className="font-semibold">
                        {item.area.toLocaleString()} sqm
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
