/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoSearchCircle } from "react-icons/io5";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export const SearchContext = createContext();
const DashBoard = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  const handleSearchClick = () => {
    setSearchText(searchQuery);
  };
  const navlinks = (
    <>
      <li className="relative px-2 py-1">
        <NavLink
          defaultChecked
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center bg-blue-200 w-48 pl-2 py-1.5 pr-2 rounded text-blue-950 hover:text-blue-600 text-base"
              : "inline-flex items-center pl-2 py-1.5 hover:text-blue-400 text-base"
          }
          to="/"
        >
          <span className="ml-4">All users</span>
        </NavLink>
      </li>
      <li className="relative px-2 py-1">
        <NavLink
          defaultChecked
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center bg-blue-200 w-48 pl-2 py-1.5 pr-2 rounded text-blue-950 hover:text-blue-400 text-base"
              : "inline-flex items-center pl-2 py-1.5 hover:text-blue-400 text-base"
          }
          to="/products"
        >
          <span className="ml-4">Products</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <SearchContext.Provider value={searchQuery}>
      <div className="flex h-screen bg-white">
        <aside className="z-20 flex-shrink-0 fixed hidden w-[250px] overflow-y-auto bg-blue-50 lg:block">
          <div className="h-screen py-3 pl-3 flex flex-col gap-9 shadow-xl">
            <div className="flex flex-col justify-start">
              <h1 className="text-blue-950 font-semibold text-2xl py-1.5">
                Admin Dashboard
              </h1>
              <ul className="leading-10 text-blue-950">{navlinks}</ul>
            </div>
          </div>
        </aside>
        <aside
          className={`mt-16 lg:mt-0 z-20 fixed w-64 duration-300 inset-y-0 ease-in-out overflow-y-auto bg-blue-50 ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="h-screen py-3 pl-3 flex flex-col justify-between shadow-xl ">
            <div className="flex flex-col justify-between">
              <ul className="leading-10">{navlinks}</ul>
            </div>
          </div>
        </aside>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <header className="z-50 py-5 fixed top-0 lg:hidden">
            <div className="flex items-center justify-between h-8 px-6 mx-auto">
              <button
                className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                onClick={toggleSideMenu}
                aria-label="Menu"
              >
                {isSideMenuOpen ? (
                  <FaXmark className="w-6 h-6" />
                ) : (
                  <FaBarsStaggered className="w-6 h-6" />
                )}
              </button>
            </div>
          </header>
          <main className="scroll-smooth">
            <div className="fixed w-full flex lg:justify-end justify-around z-40 lg:bg-blue-50 py-2">
              <div className="lg:ml-[250px] ml-6 mt-2 lg:mt-0 flex items-center gap-1 max-w-lg rounded-lg overflow-hidden px-2 py-1 justify-between bg-white">
                <input
                  className="text-base text-gray-600 flex-grow outline-none px-2 "
                  type="text"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <div className="ms:flex items-center lg:px-2 px-0 rounded-lg lg:space-x-4 space-x-0">
                  <select
                    id="sort"
                    className="text-base text-blue-950 outline-none border-2 lg:px-4 px-0 lg:py-2 py-0 rounded-lg"
                    value={sortOrder}
                    onChange={handleSortChange}
                  >
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                  </select>
                </div>
                <button
                  onClick={handleSearchClick}
                  className="px-2 lg:py-2 py-0.5  text-base bg-blue-950 text-white rounded-lg font-thin cursor-pointer"
                >
                  search
                </button>
              </div>
            </div>
            <div className="lg:ml-[250px] bg-slate-50 h-screen mt-20">
              <Outlet context={{ searchText, sortOrder }} />
            </div>
          </main>
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default DashBoard;
