import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { buyerData } from "../Lib/Buy";
import { uploadLocalImageToBucket } from "../Lib/Storage";
const Buy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSucess] = useState(false);
  const [userId, setUserId] = useState(null);
  const buyProperies = [
    {
      id: 1,
      image:
        "../public/Buy/4bfbc2e8818db0166f01183d190878b0l-m1229898593rd-w480_h360.jpg",
      title: "Modern Family House",
      price: 150000,
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
    },
    {
      id: 2,
      image:
        "../public/Buy/4d8054f46decc3f2710d8941bf2f3765l-b2956316570rd-w480_h360.jpg",
      title: "Beachside Villa",
      price: 180000,
      bedrooms: 5,
      bathrooms: 4,
      area: 320,
    },
    {
      id: 3,
      image:
        "../public/Buy/8d0b15d91b741947f9616528b57966a6l-m3931962803rd-w480_h360.jpg",
      title: "Elegant Townhouse",
      price: 160000,
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
    },
    {
      id: 4,
      image:
        "../public/Buy/43d6fa7211147b995b9739b5a9903115l-m1524037929rd-w480_h360.jpg",
      title: "Luxury Villa with Garden",
      price: 450000,
      bedrooms: 6,
      bathrooms: 5,
      area: 520,
    },
    {
      id: 5,
      image:
        "../public/Buy/46edca8ec8902d700f610a009e93c152l-b13643347rd-w480_h360.jpg",
      title: "New Duplex House",
      price: 210000,
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
    },
    {
      id: 6,
      image:
        "../public/Buy/94fbf7b6d9fafc3bd61aa8a63c93678al-m1312707416rd-w480_h360.jpg",
      title: "City Residential House",
      price: 130000,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
    },
    {
      id: 7,
      image:
        "../public/Buy/99da02d7f46dbae2846b13c3a681f3ffl-m1670888686rd-w480_h360 (1).jpg",
      title: "Premium Family Villa",
      price: 280000,
      bedrooms: 4,
      bathrooms: 4,
      area: 300,
    },
    {
      id: 8,
      image:
        "../public/Buy/136cd05487e07acb8bcefef2bfee9b4al-m2565456609rd-w480_h360.jpg",
      title: "Classic Family Home",
      price: 140000,
      bedrooms: 3,
      bathrooms: 2,
      area: 190,
    },
    {
      id: 9,
      image:
        "../public/Buy/80485b93ac0c5023717248800707a385l-m2812939151rd-w480_h360.jpg",
      title: "Modern City Villa",
      price: 260000,
      bedrooms: 4,
      bathrooms: 4,
      area: 310,
    },
    {
      id: 10,
      image:
        "../public/Buy/87370bcdd802de0f45f143ea329ba975l-m2900544046rd-w480_h360.jpg",
      title: "Spacious Duplex Residence",
      price: 230000,
      bedrooms: 5,
      bathrooms: 4,
      area: 360,
    },
    {
      id: 11,
      image:
        "../public/Buy/97875c4452c40e18ef46e8cb0c6fd5f2l-b1634647691rd-w480_h360 (1).jpg",
      title: "Luxury Urban House",
      price: 320000,
      bedrooms: 4,
      bathrooms: 5,
      area: 400,
    },
    {
      id: 12,
      image:
        "../public/Buy/805251ff0fc9f3d65da76fe31ea849a5l-m1004254964rd-w480_h360 (1).jpg",
      title: "Affordable Family House",
      price: 110000,
      bedrooms: 3,
      bathrooms: 2,
      area: 170,
    },
    {
      id: 13,
      image:
        "../public/Buy/18437876bfee3b407919a84ed8e6b0c3l-m1228867737rd-w480_h360.jpg",
      title: "Elegant Modern Villa",
      price: 380000,
      bedrooms: 6,
      bathrooms: 5,
      area: 480,
    },
    {
      id: 14,
      image:
        "../public/Buy/d33314bf54690718dca93c07897967e4l-m2423621771rd-w480_h360.jpg",
      title: "Contemporary Smart Home",
      price: 295000,
      bedrooms: 4,
      bathrooms: 3,
      area: 290,
    },
    {
      id: 15,
      image:
        "../public/Buy/46edca8ec8902d700f610a009e93c152l-b13643347rd-w480_h360.jpg",
      title: "Premium Garden Residence",
      price: 340000,
      bedrooms: 5,
      bathrooms: 4,
      area: 420,
    },
    {
      id: 16,
      image:
        "../public/Buy/45ebd8d4d03a586da359a13d062373a4l-m4259845349rd-w480_h360.jpg",
      title: "Modern Corner Villa",
      price: 410000,
      bedrooms: 5,
      bathrooms: 4,
      area: 460,
    },
    {
      id: 17,
      image:
        "../public/Buy/10272abaa00526778dda070d137fcb42l-m3869285732rd-w480_h360.jpg",
      title: "Minimalist Family Residence",
      price: 125000,
      bedrooms: 3,
      bathrooms: 2,
      area: 185,
    },
  ];

  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user]);
  const handleUploadData = async (property) => {
    if (!user) {
      toast.error("please you are not logged in please go sigIn page..");
      navigate("/signIn");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const publicUrl = await uploadLocalImageToBucket(
        property.image,
        `property-${property.id}.jpg`,
      );
      if (!publicUrl) throw new Error("Failed to upload image");
      await buyerData({
        image: publicUrl,
        title: property.title,
        price: property.price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        area: property.area,
        auther_buyer_id: userId,
        // property_id: property.property_id
      });
      setSucess(true);
      toast.success("property uploaded successfully", {
        position: "top-right",
      });
    } catch (error) {
      setError(
        "error happened during storing the new data in supabase..",
        error.message,
      );
      toast.error("error happened during the process..", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="bg-gray-50 py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
            {buyProperies.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl sm:w-0 md:w-full shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <Link
                  to={`/dashboard/buy/${property.id}`}
                  className="cursor-pointer flex-1"
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 sm:h-56 object-cover"
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

                  <div className="p-4 sm:p-5 space-y-1 sm:space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {property.title}
                    </h3>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">
                      ${property.price.toLocaleString()}
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
                        <span className="font-semibold">
                          {property.area.toLocaleString()} sqm
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => handleUploadData(property)}
                  className="mt-auto mx-4 sm:mx-5 mb-4 sm:mb-5 py-3 w-full sm:w-auto cursor-pointer text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <div className="flex justify-center items-center gap-3">
                    <FaShoppingCart className="text-base sm:text-lg"  />
                    <span>{isLoading ? "submitting..." : "Buy Now"}</span>
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
