import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { PiLessThanLight } from "react-icons/pi";
const BuyerInformation = () => {
  const buyerData = [
    {
      id: 1,
      image:
        "/../src/Buy/4bfbc2e8818db0166f01183d190878b0l-m1229898593rd-w480_h360.jpg",
      description:
        "A modern family house offering spacious rooms, a comfortable living area, and a practical layout ideal for everyday family life.",
      price: 150000,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 2,
      image:
        "/../src/Buy/4d8054f46decc3f2710d8941bf2f3765l-b2956316570rd-w480_h360.jpg",
      description:
        "A beautiful beachside villa with open living spaces, large bedrooms, and a relaxing environment close to the sea.",
      price: 180000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 3,
      image:
        "/../src/Buy/8d0b15d91b741947f9616528b57966a6l-m3931962803rd-w480_h360.jpg",
      description:
        "An elegant townhouse designed with a modern interior, perfect for families seeking comfort in a quiet neighborhood.",
      price: 160000,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 4,
      image:
        "/../src/Buy/43d6fa7211147b995b9739b5a9903115l-m1524037929rd-w480_h360.jpg",
      description:
        "A luxury villa featuring a large private garden, premium finishes, and spacious rooms for high-end living.",
      price: 210000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 5,
      image:
        "/../src/Buy/46edca8ec8902d700f610a009e93c152l-b13643347rd-w480_h360.jpg",
      description:
        "A newly built duplex house with modern architecture, offering generous space and comfort for large families.",
      price: 210000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 6,
      image:
        "/../src/Buy/94fbf7b6d9fafc3bd61aa8a63c93678al-m1312707416rd-w480_h360.jpg",
      description:
        "A practical city residence located in a convenient area, suitable for small families or first-time buyers.",
      price: 130000,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 7,
      image:
        "/../src/Buy/99da02d7f46dbae2846b13c3a681f3ffl-m1670888686rd-w480_h360 (1).jpg",
      description:
        "A premium family villa offering modern design, spacious rooms, and a comfortable lifestyle for growing families.",
      bedrooms: 4,
      bathrooms: 4,
    },
    {
      id: 8,
      image:
        "/../src/Buy/136cd05487e07acb8bcefef2bfee9b4al-m2565456609rd-w480_h360.jpg",
      description:
        "A classic family home with a simple and functional layout, perfect for comfortable and affordable living.",
      price: 140000,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 9,
      image:
        "/../src/Buy/80485b93ac0c5023717248800707a385l-m2812939151rd-w480_h360.jpg",
      description:
        "A modern city villa featuring stylish interiors, large living areas, and excellent urban accessibility.",
      price: 260000,
      bedrooms: 4,
      bathrooms: 4,
    },
    {
      id: 10,
      image:
        "/../src/Buy/87370bcdd802de0f45f143ea329ba975l-m2900544046rd-w480_h360.jpg",
      description:
        "A spacious duplex residence designed for comfort, offering multiple bedrooms and generous living spaces.",
      price: 230000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 11,
      image:
        "/../src/Buy/97875c4452c40e18ef46e8cb0c6fd5f2l-b1634647691rd-w480_h360 (1).jpg",
      description:
        "A luxury urban house with high-quality finishes, modern design, and ample space for upscale city living.",
      price: 110000,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 12,
      image:
        "/../src/Buy/805251ff0fc9f3d65da76fe31ea849a5l-m1004254964rd-w480_h360 (1).jpg",
      description:
        "An affordable family house offering comfortable living spaces and great value for budget-conscious buyers.",
      price: 110000,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 13,
      image:
        "/../src/Buy/18437876bfee3b407919a84ed8e6b0c3l-m1228867737rd-w480_h360.jpg",
      description:
        "An elegant modern villa featuring luxurious interiors, spacious rooms, and a refined living experience.",
      price: 380000,
      bedrooms: 6,
      bathrooms: 5,
    },
    {
      id: 14,
      image:
        "/../src/Buy/d33314bf54690718dca93c07897967e4l-m2423621771rd-w480_h360.jpg",
      description:
        "A contemporary smart home designed with modern technology, comfort, and energy-efficient living in mind.",
      price: 295000,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 15,
      image:
        "/../src/Buy/45ebd8d4d03a586da359a13d062373a4l-m4259845349rd-w480_h360.jpg",
      description:
        "A premium residence surrounded by garden space, offering privacy, elegance, and family-friendly living.",
      price: 340000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 16,
      image:
        "/../src/Buy/45ebd8d4d03a586da359a13d062373a4l-m4259845349rd-w480_h360.jpg",
      description:
        "A modern corner villa with excellent natural lighting, spacious interiors, and a unique architectural design.",
      price: 410000,
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 17,
      image:
        "/../src/Buy/10272abaa00526778dda070d137fcb42l-m3869285732rd-w480_h360.jpg",
      description:
        "A minimalist family residence offering a clean design, efficient layout, and comfortable living space.",
      price: 125000,
      bedrooms: 3,
      bathrooms: 2,
    },
  ];

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSucess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      toast.error("please you are not logged in..");
      navigate("/signIn");
    }
  }, [user, navigate]);

  const { id } = useParams();
  const filteredData = buyerData.find((buy) => buy.id === Number(id));

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
              <div className="flex gap-6 sm:flex-col md:flex-row">
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
                  <h1 className="text-[20px] mb-2 font-bold text-[rgb(43,43,43)]">More About This Property</h1>
                  <form className="flex flex-col gap-6 w-full">
                    <div className="w-full">
                      <input className="border-1 w-full border-[rgb(149, 138, 127);] p-y-3 px-4 rounded-md focus:outline-none" type="text" placeholder="Full name *" value={fullName} onChange={(e)=> setFullName(e.target.value)} />
                    </div>
                    <div>
                      <input className="border-1 w-full border-[rgb(149, 138, 127);] p-y-3 px-4 rounded-md focus:outline-none" type="email" placeholder="Email *" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                      <textarea className="border-1 w-full h-20  border-[rgb(149, 138, 127);] p-y-3 px-4 rounded-md focus:outline-none" placeholder="how can i help you?" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                      </div>
                      <button className="py-3 px-4 bg-[#AB1A1F] font-semibold text-white text-center rounded-2xl" type="submit">{isLoading ? "submitting..." : "submit"}</button>
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

export default BuyerInformation;
