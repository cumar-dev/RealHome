import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { rentData } from "../Lib/Rent";
import { uploadedRentLocalImageToBucket } from "../Lib/rent_images";

const Rent = () => {
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSucess] = useState(false);
    const [userId, setUserId] = useState(null);
  const rentProperties = [
    {
      id: 1,
      image:
        "/Rent/16a881ab06128f904dcbd84b62b382efl-m1338688971rd-w480_h360.jpg",
      title: "Modern Apartment in City Center",
      price: 900,
      bedrooms: 2,
      bathrooms: 1,
      area: 120,
    },
    {
      id: 2,
      image:
        "/Rent/31f137238c19a9dfc045337e3b687147c-f3348980042rd-w480_h360.jpg",
      title: "Luxury Villa for Rent",
      price: 2500,
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
    },
    {
      id: 3,
      image:
        "/Rent/342eef09dea9026b362f75d21010cfdbl-m3165639764rd-w480_h360.jpg",
      title: "Cozy Family House",
      price: 1200,
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
    },
    {
      id: 4,
      image:
        "/Rent/399ad7f7550457c2ef7e984eab24de9bc-f3515815654rd-w480_h360.jpg",
      title: "Beachside Rental Home",
      price: 1800,
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
    },
    {
      id: 5,
      image:
        "/Rent/853f0f3f1d2aeeea3a5e46e329ae9049l-m2557997177rd-w480_h360.jpg",
      title: "Affordable Apartment",
      price: 650,
      bedrooms: 1,
      bathrooms: 1,
      area: 80
    },
    {
      id: 6,
      image:
        "/Rent/2899432424d7819e50f96ed2d24c47c8c-f4101090818rd-w480_h360.jpg",
      title: "Spacious Duplex House",
      price: 1600,
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
    },
    {
      id: 7,
      image:
        "/Rent/a72cbc28f5059ac8ab8cf4b6712e0ed3l-m547207634rd-w480_h360.jpg",
      title: "Modern Studio Apartment",
      price: 500,
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
    },
    {
      id: 8,
      image:
        "/Rent/a665ee3a4d689bf9a4a1d7933282788cl-m1540984680rd-w480_h360.jpg",
      title: "Family Villa with Garden",
      price: 2000,
      bedrooms: 5,
      bathrooms: 4,
      area: 420,
    },
    {
      id: 9,
      image:
        "/Rent/d62d1c2f11ebf086d00914df4c927106l-m2558544331rd-w480_h360.jpg",
      title: "City Residential House",
      price: 1100,
      bedrooms: 3,
      bathrooms: 2,
      area: 210,
    },
    {
      id: 10,
      image:
        "/Rent/f77b5020edf97f33447e7a5c14910d70l-m1202305871rd-w480_h360.jpg",
      title: "Premium Penthouse Apartment",
      price: 2800,
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
    },
  ];
  
  const {user} = useAuth();
  const navigate = useNavigate();
  useEffect(()=> {
    if(user) {
      setUserId(user.id);
    }
  }, [user])
  const handleUploadData = async (rent) => {
     if(!user) {
      toast.error('please you are not logged in go signIn page..', {position:"top-right"});
      navigate('/signIn');
      return
     }

     setIsLoading(true);
     setError(null);
     try {
      const publicUrl = await uploadedRentLocalImageToBucket(
        rent.image,
        `rent-${rent.id}.jpg`,
      )
       if (!publicUrl) throw new Error("Failed to upload image");
      await rentData(
        {
          image: publicUrl,
          title: rent.title,
          price: rent.price,
          bedrooms: rent.bedrooms,
          bathrooms: rent.bathrooms,
          area: rent.area,
          current_id: userId
        }
      )
      setSucess(true);
      toast.success('property uploaded successfully', {position: "top-right"});
     } catch (error) {
      toast.error('error happend during uploading data in supabase ...', {position:"top-right"})
      setError(error.message);
     }finally {
      setIsLoading(false);
     }
  }
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
          {rentProperties.map((rent) => (
            <div
              key={rent.id}
              className="bg-white shadow-md rounded-2xl transition overflow-hidden flex flex-col hover:shadow-lg "
            >
              <Link
                to={`/dashboard/rent/${rent.id}`}
                className="cursor-pointer flex-1"
              >
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={rent.image}
                    alt={rent.title}
                  />
                </div>
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  New
                </span>

                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                  <FaHeart className="text-gray-600" />
                </button>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {rent.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    {rent.price.toLocaleString()} / month
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">{rent.bedrooms}</span>{" "}
                      bed
                    </p>
                    <p>
                      <span className="font-semibold">
                        {rent.bathrooms}
                      </span>{" "}
                      bath
                    </p>
                    <p>
                      <span className="font-semibold">{rent.area.toLocaleString()} sqm</span>
                    </p>
                  </div>
                </div>
              </Link>
              <button 
              onClick={()=> handleUploadData(rent)}
              className="mt-auto mx-5 mb-5 py-2 w-auto cursor-pointer text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center justify-center">
                <div className="flex justify-center items-center gap-3">
                  <FaKey className="ml-2" size={18} />
                  <span>{isLoading ? "submitting.." : "Rent Now"}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rent;
