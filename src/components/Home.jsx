import React from "react";
import useAxios from "../hooks/useAxios";
import Loader from "./Loader";

const Home = () => {
  const { data, loading, error } = useAxios(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  );

  if (loading) return <Loader />;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
     
      <div className="flex flex-wrap gap-16 justify-center">
        {data?.meals.map((meal) => (
          
          <div
            key={meal.idMeal}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="/">
              <img className="rounded-t-lg" src={meal.strMealThumb} alt="" />
            </a>
            <div className="p-5">
              <a href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {meal.strMeal}
                </h5>
              </a>
              <a
                href="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
