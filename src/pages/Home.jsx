/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo } from "react";
import { getUserData } from "../api/getApi";
import UserCard from "../components/ui/UserCard";
import { useOutletContext } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Modal from "../components/ui/Modal";
const Home = () => {
  const [userData, setUserData] = useState([]);
  const { searchText, sortOrder } = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserData();
        setUserData(res.data || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = useMemo(() => {
    return userData
      .filter((user) =>
        user?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [userData, searchText, sortOrder]);

  return (
    <div className="bg-white">
      <div className="lg:m-5 m-2.5 lg:mt-5 mt-16 p-5 rounded-2xl bg-blue-50">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {filteredUsers.map((user, index) => (
            <UserCard usersdata={user} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
