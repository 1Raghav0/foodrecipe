import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeItems from "../components/RecipeItems";

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const respone = await axios.get("http://localhost:5000/recipes/"); 
                console.log(respone.data);
                setRecipes(respone.data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                // Simulate API call
                setLoading(false);
            }
        };
        fetchRecipes();

    },[]);
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex flex-col justify-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Welcome to <span className="text-orange-500">Food Recipes</span>
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-lg">
              Discover delicious, easy-to-cook recipes from around the world and
              share your own creations with food lovers.
            </p>

            <button className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              🍽️ Share Your Recipe
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-86 h-[480px]">
              <img
                src="./food.jpg"
                alt="Food"
                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-orange-400"
              />

              {/* Optional overlay */}
              <div className="absolute inset-0 bg-black/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 py-12">
        <div className="container mx-auto px-6">
          {loading && <div>Loading...</div> }

          {recipes.length > 0 && !loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <RecipeItems key={recipe._id} recipe={recipe} setRecipes={setRecipes}/>
                ))}
            </div>
          )}
          </div>
        </div> 

      {/* Wave Divider */} 
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff7ed"
            fillOpacity="1"
            d="M0,64L60,101.3C120,139,240,213,360,218.7C480,224,600,160,720,144C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
};

export default Homepage;
