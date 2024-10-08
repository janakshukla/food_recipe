import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [SearchValue, setSearchValue] = useState();
  const navigate = useNavigate();

const handleclick =async ()=>{
  try {
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchValue}`)
    navigate(`/post/${data.data.meals[0].idMeal}`)
  } catch (error) {
    console.log(error)
  }
}
const handlechange = (e)=>{
  setSearchValue(e.target.value)
}





  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/janakdadhaba.webp" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hidden md:block dark:text-white">
            JanakDaDhaba
          </span>
        </a>
        <div className="flex gap-3 md:order-2">
          <div className="relative md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={handlechange}
            />
          </div>
          <button
            className="px-3 py-1 bg-blue-500 font-semibold text-white rounded-lg  "
            onClick={handleclick}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
