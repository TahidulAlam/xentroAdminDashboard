/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import postApi from "../../api/postApi";

const Modal = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    color: "",
    model: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const allData = {
      id: formData.id,
      name: formData.name,
      data: {
        color: formData.color,
        capacity: formData.capacity,
      },
    };

    try {
      const response = await postApi(
        "https://api.restful-api.dev/objects",
        allData
      );
      console.log(response.data);
      setShowModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700/30 backdrop-blur-md z-50">
      <div
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Enter Products Details
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        <div className="space-y-4">
          <input
            className="w-full p-2 border rounded text-gray-700"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <input
            className="w-full p-2 border rounded text-gray-700"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <div className="flex gap-2">
            <input
              className="w-1/2 p-2 border rounded text-gray-700"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Color"
            />
            <input
              className="w-1/2 p-2 border rounded text-gray-700"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Model"
            />
          </div>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
