/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { deleteSingleProduct, getProductData } from "../api/getApi";
import ProductCard from "../components/ui/ProductCard";
import { useOutletContext } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Modal from "../components/ui/Modal";
import Swal from "sweetalert2";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const { searchText, sortOrder } = useOutletContext();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductData();
        setProductsData(res.data || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) =>
        product?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [productsData, searchText, sortOrder]);

  const handleDelete = (id) => {
    console.log("Deleting product with ID:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSingleProduct(id)
          .then((res) => {
            console.log("Delete Response:", res);
            if (res.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Product has been deleted..!",
                icon: "success",
              });
              setProductsData((prev) =>
                prev.filter((product) => product.id !== id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            Swal.fire("Error!", "Failed to delete the product.", "error");
          });
      }
    });
  };

  return (
    <div className="bg-white">
      <div className="lg:m-5 m-2.5 lg:mt-5 mt-16 p-5 rounded-2xl bg-blue-50">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {filteredProducts?.map((productsData, index) => {
            return (
              <ProductCard
                productsdata={productsData}
                key={index}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
      <div className="fixed bottom-10 end-10 ">
        <button
          className="neon transition duration-300 ease-in-out text-white animate-bounce focus:animate-none hover:animate-none bg-blue-950  p-4 text-3xl rounded-full cursor-pointer shadow-2xs shadow-blue-950"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <MdOutlineAddShoppingCart />
        </button>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>
    </div>
  );
};

export default Products;
