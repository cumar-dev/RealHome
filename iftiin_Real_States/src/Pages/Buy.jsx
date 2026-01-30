import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Buy = () => {
  const buyProperies = [
    {
      id: 1,
      image:
        "../src/Buy/4bfbc2e8818db0166f01183d190878b0l-m1229898593rd-w480_h360.jpg",
      title: "Modern Family House",
      price: "$150,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "250 sqm",
    },
    {
      id: 2,
      image:
        "../src/Buy/4d8054f46decc3f2710d8941bf2f3765l-b2956316570rd-w480_h360.jpg",
      title: "Beachside Villa",
      price: "$180,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "320 sqm",
    },
    {
      id: 3,
      image:
        "../src/Buy/8d0b15d91b741947f9616528b57966a6l-m3931962803rd-w480_h360.jpg",
      title: "Elegant Townhouse",
      price: "$160,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "200 sqm",
    },
    {
      id: 4,
      image:
        "../src/Buy/43d6fa7211147b995b9739b5a9903115l-m1524037929rd-w480_h360.jpg",
      title: "Luxury Villa with Garden",
      price: "$450,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "520 sqm",
    },
    {
      id: 5,
      image:
        "../src/Buy/46edca8ec8902d700f610a009e93c152l-b13643347rd-w480_h360.jpg",
      title: "New Duplex House",
      price: "$210,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "350 sqm",
    },
    {
      id: 6,
      image:
        "../src/Buy/94fbf7b6d9fafc3bd61aa8a63c93678al-m1312707416rd-w480_h360.jpg",
      title: "City Residential House",
      price: "$130,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "180 sqm",
    },
    {
      id: 7,
      image:
        "../src/Buy/99da02d7f46dbae2846b13c3a681f3ffl-m1670888686rd-w480_h360 (1).jpg",
      title: "Premium Family Villa",
      price: "$280,000",
      bedrooms: 4,
      bathrooms: 4,
      area: "300 sqm",
    },
    {
      id: 8,
      image:
        "../src/Buy/136cd05487e07acb8bcefef2bfee9b4al-m2565456609rd-w480_h360.jpg",
      title: "Classic Family Home",
      price: "$140,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "190 sqm",
    },
    {
      id: 9,
      image:
        "../src/Buy/80485b93ac0c5023717248800707a385l-m2812939151rd-w480_h360.jpg",
      title: "Modern City Villa",
      price: "$260,000",
      bedrooms: 4,
      bathrooms: 4,
      area: "310 sqm",
    },
    {
      id: 10,
      image:
        "../src/Buy/87370bcdd802de0f45f143ea329ba975l-m2900544046rd-w480_h360.jpg",
      title: "Spacious Duplex Residence",
      price: "$230,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "360 sqm",
    },
    {
      id: 11,
      image:
        "../src/Buy/97875c4452c40e18ef46e8cb0c6fd5f2l-b1634647691rd-w480_h360 (1).jpg",
      title: "Luxury Urban House",
      price: "$320,000",
      bedrooms: 4,
      bathrooms: 5,
      area: "400 sqm",
    },
    {
      id: 12,
      image:
        "../src/Buy/805251ff0fc9f3d65da76fe31ea849a5l-m1004254964rd-w480_h360 (1).jpg",
      title: "Affordable Family House",
      price: "$110,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "170 sqm",
    },
    {
      id: 13,
      image:
        "../src/Buy/18437876bfee3b407919a84ed8e6b0c3l-m1228867737rd-w480_h360.jpg",
      title: "Elegant Modern Villa",
      price: "$380,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "480 sqm",
    },
    {
      id: 14,
      image:
        "../src/Buy/d33314bf54690718dca93c07897967e4l-m2423621771rd-w480_h360.jpg",
      title: "Contemporary Smart Home",
      price: "$295,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "290 sqm",
    },
    {
      id: 15,
      image:
        "../src/Buy/46edca8ec8902d700f610a009e93c152l-b13643347rd-w480_h360.jpg",
      title: "Premium Garden Residence",
      price: "$340,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "420 sqm",
    },
    {
      id: 16,
      image:
        "../src/Buy/45ebd8d4d03a586da359a13d062373a4l-m4259845349rd-w480_h360.jpg",
      title: "Modern Corner Villa",
      price: "$410,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "460 sqm",
    },
    {
      id: 17,
      image:
        "../src/Buy/10272abaa00526778dda070d137fcb42l-m3869285732rd-w480_h360.jpg",
      title: "Minimalist Family Residence",
      price: "$125,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "185 sqm",
    },
  ];
  return (
    <>
      <div className="bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buyProperies.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <Link
                  to={`/dashboard/buy/${property.id}`}
                  className="cursor-pointer flex-1"
                >
                  <div className="relative">
                    <img
                      className="w-full h-56 object-cover"
                      src={property.image}
                      alt={property.title}
                    />

                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      New
                    </span>

                    <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                      <FaHeart className="text-gray-600" />
                    </button>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {property.title}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      {property.price}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">
                          {property.bedrooms}
                        </span>{" "}
                        bed
                      </p>
                      <p>
                        <span className="font-semibold">
                          {property.bathrooms}
                        </span>{" "}
                        bath
                      </p>
                      <p>
                        <span className="font-semibold">{property.area}</span>
                      </p>
                    </div>
                  </div>
                </Link>

                <button className="mt-auto mx-5 mb-5 py-2 w-auto cursor-pointer text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center justify-center">
                  <div className="flex justify-center items-center gap-3">
                    <FaShoppingCart className="ml-2" size={18} />
                    <span>Buy Now</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
