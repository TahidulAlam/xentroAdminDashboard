/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductModal from "./ProductModal";
import { MdDeleteForever } from "react-icons/md";
const ProductCard = ({ productsdata, handleDelete }) => {
  const { name, data } = productsdata || {};
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col justify-between gap-2">
      <h1>Name: {name}</h1>
      {data?.capacity && <h1>Capacity: {data?.capacity}</h1>}
      {data?.color && <h1>Color: {data?.color}</h1>}
      {data?.price && <h1>Price: {data?.price}</h1>}
      <div className="flex justify-between">
        <button
          type="button"
          className="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-blue-950 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none cursor-pointer "
          onClick={() => setShowModal(true)}
        >
          View full details
        </button>
        <button
          onClick={() => handleDelete(productsdata?.id)}
          className="text-2xl cursor-pointer"
        >
          <MdDeleteForever className="text-red-600" />
        </button>
        {showModal ? (
          <ProductModal setShowModal={setShowModal} data={productsdata} />
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
