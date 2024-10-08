import React, { useEffect, useRef } from "react";
import useAxios from "../hooks/useAxios";
import gsap from "gsap";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const Post = () => {
  const { PostId } = useParams();
  const { data, loading, error } = useAxios(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${PostId}`
  );
  const postRef = useRef();
  useEffect(() => {
    if (postRef.current) {
      gsap.from(postRef.current, {
        duration: 1,
        opacity: 0,
        y: 100,
        x: 100,
        ease: "power3.out",
       
        scale: 0.8,
        
      });
    }
  }, [data]);

  if (error) return <p>Error fetching data: {error.message}</p>;
  if (loading) return <Loader />;
  return (
    <div ref={postRef}  >
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.history.back()}>Back</button>
      {data &&
        data?.meals.map((meal) => {
          return     <div key={meal.idMeal} className="p-8 bg-gray-900 text-gray-200 min-h-screen">
          <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
              <p className="text-gray-400 mb-4">
                <strong>Category:</strong> {meal.strCategory} <br />
                <strong>Area:</strong> {meal.strArea}
              </p>
             
             
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <p className="text-gray-400 mb-4 whitespace-pre-line">{meal.strInstructions}</p>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
        }
      )}

    </div>
  );
};

export default Post;
