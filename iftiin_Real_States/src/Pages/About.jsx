import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">RealHome</h1>
          <p className="tex-gray-400 text-center">
            RealHome is more than a real estate platform — it is a place where
            trust meets opportunity. We help individuals and families find the
            right property by offering honest listings, professional guidance,
            and a customer-first approach. Your property journey starts with
            confidence at RealHome.
          </p>
      </div>
      <div className="flex justify-center items-center flex-col p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Our Strengths</h1>
        <div className="flex flex-col gap-2">
        <span className="text-center">Honest and transparent listings</span>
        <span className="text-center">Client-first service</span>
        <span className="text-center">Strong local market knowledge</span>
        <span className="text-center">Properties in strategic locations</span>
         </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Why choose us</h1>
        <div className="grid grid-cols-1 gap-3 p-4 cursor-pointer transition sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="shadow-md bg-white p-4 rounded-md flex justify-center gap-3 items-center flex-col">
          <span className="text-blue-600 text-2xl">🏡</span>
          <p className="text-gray-700 font-medium">Wide range of properties</p>
        </div>
         <div className="shadow-md bg-white p-4 rounded-md flex justify-center gap-3 items-center flex-col">
          <span className="text-green-500 text-2xl">💼</span>
          <p className="text-gray-700 font-medium">Professional agents</p>
        </div>
         <div className="shadow-md bg-white p-4 rounded-md flex justify-center gap-3 items-center flex-col">
          <span className="text-orange-500 text-2xl">⭐</span>
          <p className="text-gray-700 font-medium">Trusted & verified listings</p>
        </div>
        <div className="shadow-md bg-white p-4 rounded-md flex justify-center gap-3 items-center flex-col">
          <span className="text-purple-500 text-2xl">📍</span>
          <p className="text-gray-700 font-medium">Properties in top locations</p>
        </div>
        </div>
         <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center mt-3">Frequantly asked questions</h1>
      </div>
    </div>
  );
};

export default About;
