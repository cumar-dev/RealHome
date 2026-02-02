import React, { useState } from "react";
import { addNewProperty } from "../Lib/sell";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";
import { uploadImageToBucket } from "../Lib/sell_images";

const Sell = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    type: "sell",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const imageUrl = await uploadImageToBucket(image, user.id);
      await addNewProperty({
        title: form.title,
        description: form.description,
        price: Number(form.price),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        area: Number(form.area),
        type: form.type,
        image: imageUrl,
        user_id: user.id,
      });

      toast.success("Property saved successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 p-4">
      <p className="text-lg fontsemibold mb-5">Here is the place which every one needs to sell a properties can display here</p>
      <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Add New Property
        </h1>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Property title"
          className="w-full border p-3 rounded-md"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-3 rounded-md h-24"
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-3 rounded-md"
          required
        />

        <div className="grid grid-cols-3 gap-3">
          <input
            type="number"
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            placeholder="Beds"
            className="border p-3 rounded-md"
          />
          <input
            type="number"
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            placeholder="Baths"
            className="border p-3 rounded-md"
          />
          <input
            type="number"
            name="area"
            value={form.area}
            onChange={handleChange}
            placeholder="Area (sqm)"
            className="border p-3 rounded-md"
          />
        </div>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        >
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>

        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V12m0 0V8m0 4h4m-4 0H3m14 0h4m-4 0v4m0-4V8"
                />
              </svg>

              <p className="mb-1 text-sm text-gray-600">
                <span className="font-semibold">Click to upload</span> or drag &
                drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, JPEG (Max 5MB)</p>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>
        {image && (
          <p className="text-sm text-green-600 font-medium">
            Selected: {image.name}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-[#AB1A1F] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          {isLoading ? "Submitting..." : "Submit Property"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default Sell;
