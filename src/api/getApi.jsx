import axios from "axios";
const axiosUsersData = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const axiosProductsData = axios.create({
  baseURL: "https://api.restful-api.dev",
});

export const getUserData = () => {
  return axiosUsersData.get("/users");
};

export const getProductData = () => {
  return axiosProductsData.get("/objects");
};

export const deleteSingleProduct = (id) => {
  return axiosProductsData.delete(`https://api.restful-api.dev/objects/${id}`);
};
