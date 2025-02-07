/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const UserModal = ({ setShowModal, data }) => {
  console.log("object");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700/30 backdrop-blur-md z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Products Details
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        <div className="space-y-4">
          <h1 className="text-gray-900">
            Name:{" "}
            <span className="text-gray-700 font-semibold">{data?.name}</span>{" "}
          </h1>
          <h1 className="text-gray-900">
            User Name:
            <span className="text-gray-700 font-semibold">
              {data?.username}
            </span>
          </h1>
          <h1 className="text-gray-900">
            Email:{" "}
            <span className="text-gray-700 font-semibold">{data?.email}</span>
          </h1>
          <h1 className="text-gray-900">
            Phone:{" "}
            <span className="text-gray-700 font-semibold">{data?.phone}</span>{" "}
          </h1>
          {/* <div className="flex gap-2"></div> */}
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
