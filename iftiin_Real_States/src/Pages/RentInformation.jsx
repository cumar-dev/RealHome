import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { PiLessThanLight } from "react-icons/pi";
import toast from "react-hot-toast";
import { usersBuyingOrRentingData } from "../Lib/current_users_buyed_or_rented_Data";

const RentInformation = () => {
  const rentData = [
    {
      id: 1,
      image:
        "/../public/Rent/16a881ab06128f904dcbd84b62b382efl-m1338688971rd-w480_h360.jpg",
      description:
        "A modern apartment located in the heart of the city, offering comfortable living spaces with easy access to shops and services.",
      price: 900,
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 2,
      image:
        "/../public/Rent/31f137238c19a9dfc045337e3b687147c-f3348980042rd-w480_h360.jpg",
      description:
        "A luxury villa for rent featuring spacious rooms, high-end finishes, and a peaceful environment ideal for premium living.",
      price: 2500,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 3,
      image:
        "/../public/Rent/342eef09dea9026b362f75d21010cfdbl-m3165639764rd-w480_h360.jpg",
      description:
        "A cozy family house with a practical layout, perfect for comfortable family living in a quiet neighborhood.",
      price: 1200,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 4,
      image:
        "/../public/Rent/399ad7f7550457c2ef7e984eab24de9bc-f3515815654rd-w480_h360.jpg",
      description:
        "A beautiful beachside rental home offering spacious interiors and a relaxing lifestyle close to the sea.",
      price: 1800,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 5,
      image:
        "/../public/Rent/853f0f3f1d2aeeea3a5e46e329ae9049l-m2557997177rd-w480_h360.jpg",
      description:
        "An affordable apartment ideal for singles or couples, offering simple comfort at a budget-friendly rental price.",
      price: 650,
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      id: 6,
      image:
        "/../public/Rent/2899432424d7819e50f96ed2d24c47c8c-f4101090818rd-w480_h360.jpg",
      description:
        "A spacious duplex house designed for families, providing generous living areas and multiple bedrooms.",
      price: 1600,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 7,
      image:
        "/../public/Rent/a72cbc28f5059ac8ab8cf4b6712e0ed3l-m547207634rd-w480_h360.jpg",
      description:
        "A modern studio apartment with a compact and efficient design, perfect for city living and short-term stays.",
      price: 500,
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      id: 8,
      image:
        "/../public/Rent/a665ee3a4d689bf9a4a1d7933282788cl-m1540984680rd-w480_h360.jpg",
      description:
        "A family-friendly villa with a private garden, offering comfort, space, and a peaceful living environment.",
      price: 2000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 9,
      image:
        "/../public/Rent/f77b5020edf97f33447e7a5c14910d70l-m1202305871rd-w480_h360.jpg",
      description:
        "A city residential house located in a convenient area, suitable for families seeking accessibility and comfort.",
      price: 1100,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 10,
      image:
        "/../public/Rent/f77b5020edf97f33447e7a5c14910d70l-m1202305871rd-w480_h360.jpg",
      description:
        "A premium penthouse apartment offering luxury living, large spaces, and stunning views in an exclusive setting.",
      price: 2800,
      bedrooms: 4,
      bathrooms: 3,
    },
  ];

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSucess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("");
  const [userId, setUserId] = useState(null);
  const [propertyName, setPropertyName] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user]);

  const { id } = useParams();
  const filteredData = rentData.find((rent) => rent.id === Number(id));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await usersBuyingOrRentingData({
        full_name: fullName,
        Email: email,
        property_name: propertyName,
        option: type,
        message: message,
        current_users_id: userId,
      });
      setSucess(true);
      toast.success("your request processing is successfully submitted", {
        position: "top-right",
      });
      setFullName('');
      setEmail('');
      setType('');
      setMessage('');
      setPropertyName('');
    } catch (error) {
      toast.error("during the process failed", { position: "top-right" });
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="bg-gray-50 p-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-1 mb-2">
            <PiLessThanLight />
            <a
              href="#"
              onClick={() => navigate(-1)}
              className="underline font-semibold text-[rgb(105, 97, 89)]"
            >
              Back
            </a>
          </div>
          {filteredData && (
            <div key={filteredData.id}>
              <div className="flex gap-6 sm:flex-col md:flex-col lg:flex-row">
                <div>
                  <img
                    className="rounded-lg w-[825px] h-[420px] mb-1"
                    src={filteredData.image}
                    alt="not found the image"
                  />
                  <a className="underline text-[rgb(105, 97, 89) mb-1" href="#">
                    How much You can afford?
                  </a>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-700"></div>
                    <span className="text-[rgb(43, 43, 43)] font-[400px]">
                      House For sell
                    </span>
                  </div>
                  <span className="font-semibold mb-1">
                    {filteredData.description}
                  </span>
                  <p className="text-xl font-bold text-gray-900 mb-1">
                    ${filteredData.price.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-3">
                    <p>
                      <span className="font-semibold">
                        {filteredData.bedrooms}
                      </span>{" "}
                      bed
                    </p>
                    <p>
                      <span className="font-semibold">
                        {filteredData.bathrooms}
                      </span>{" "}
                      bath
                    </p>
                  </div>
                </div>
                {/* form data */}
                <div className="max-w-2xs w-full">
                  <div className="bg-white shadow-md border rounded-lg p-4 border-[rgb(211, 207, 202);] transition hover:shdow-lg">
                    <h1 className="text-[20px] mb-2 font-bold text-[rgb(43,43,43)]">
                      More About This Property
                    </h1>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6 w-full"
                    >
                      <div className="w-full">
                        <input
                          className="border-1 w-full border-[rgb(149, 138, 127);] py-3 px-4 rounded-md focus:outline-none"
                          type="text"
                          placeholder="Full name *"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="border-1 w-full border-[rgb(149, 138, 127);] py-3 px-4 rounded-md focus:outline-none"
                          type="email"
                          placeholder="Email *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="border-1 w-full border-[rgb(149, 138, 127);] py-3 px-4 rounded-md focus:outline-none"
                          type="text"
                          placeholder="property name *"
                          value={propertyName}
                          onChange={(e) => setPropertyName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <select
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          className="border-1 w-full border-[rgb(149, 138, 127);] py-3 px-4 rounded-md focus:outline-none"
                          required
                        >
                          <option disabled value="select option">
                            select option
                          </option>
                          <option value="Buy">Buy</option>
                          <option value="Rent">Rent</option>
                        </select>
                      </div>
                      <div>
                        <textarea
                          className="border-1 w-full h-20  border-[rgb(149, 138, 127);] py-3 px-4 rounded-md focus:outline-none"
                          placeholder="how can i help you?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <button
                        className="py-3 px-4 bg-[#AB1A1F] font-semibold text-white text-center rounded-2xl"
                        type="submit"
                      >
                        {isLoading ? "submitting..." : "submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RentInformation;
