import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getBuyData } from "../Lib/Buy";
import { getRentData } from "../Lib/Rent";
import { getSellData } from "../Lib/sell";

const Dashboard = () => {
  const [buyerData, setBuyerData] = useState([]);
  const [rentData, setRentData] = useState([]);
  const [sellData, setSellData] = useState([]);

  const [buyLoading, setBuyLoading] = useState(true);
  const [rentLoading, setRentLoading] = useState(true);
  const [sellLoading, setSellLoading] = useState(true);

  useEffect(() => {
    const fetchBuy = async () => {
      try {
        const data = await getBuyData();
        setBuyerData(data || []);
      } catch (err) {
        toast.error("Failed fetching buy data");
      } finally {
        setBuyLoading(false);
      }
    };

    const fetchRent = async () => {
      try {
        const data = await getRentData();
        setRentData(data || []);
      } catch (err) {
        toast.error("Failed fetching rent data");
      } finally {
        setRentLoading(false);
      }
    };

    const fetchSell = async () => {
      try {
        const data = await getSellData();
        setSellData(data || []);
      } catch (err) {
        toast.error("Failed fetching sell data");
      } finally {
        setSellLoading(false);
      }
    };

    fetchBuy();
    fetchRent();
    fetchSell();
  }, []);

  const totalBuy = buyerData.reduce((acc, item) => acc + (item.price || 0), 0);
  const totalRent = rentData.reduce((acc, item) => acc + (item.price || 0), 0);
  const totalSell = sellData.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Buy</h3>
            <p className="text-2xl font-bold text-gray-900">
              {buyerData.length} properties
            </p>
            <p className="text-gray-600">Total: ${totalBuy.toLocaleString()}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Rent</h3>
            <p className="text-2xl font-bold text-gray-900">
              {rentData.length} properties
            </p>
            <p className="text-gray-600">
              Total: ${totalRent.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Sell</h3>
            <p className="text-2xl font-bold text-gray-900">
              {sellData.length} properties
            </p>
            <p className="text-gray-600">
              Total: ${totalSell.toLocaleString()}
            </p>
          </div>
        </div>

        <h1 className="mb-3 text-2xl font-semibold">
          Latest properties bought by us
        </h1>
        {buyLoading ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {buyerData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold mb-1">
                    ${item.price?.toLocaleString()}
                  </p>
                  <p>
                    {item.bedrooms} bed • {item.bathrooms} bath
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <h1 className="mb-3 text-2xl font-semibold">
          Latest properties rented by us
        </h1>
        {rentLoading ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {rentData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold mb-1">
                    ${item.price?.toLocaleString()}
                  </p>
                  <p>
                    {item.bedrooms} bed • {item.bathrooms} bath
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <h1 className="mb-3 text-2xl font-semibold">
          Latest properties we sell
        </h1>
        {sellLoading ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {sellData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    ${item.price?.toLocaleString()}
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
                        {item.area?.toLocaleString()}
                      </span>{" "}
                      sqm
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

export default Dashboard;
