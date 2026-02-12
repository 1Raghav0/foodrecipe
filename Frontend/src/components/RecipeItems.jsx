import { Clock, Calendar, Trash2, Heart } from "lucide-react";
import { useState } from "react";

const RecipeItems = ({ recipe, setRecipes }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5">

      {/* Favorite Icon */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white shadow hover:scale-110 transition"
      >
        <Heart
          size={20}
          className={`${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      {/* Circular Image */}
      <div className="flex justify-center -mt-16">
        <div className="w-32 h-32 rounded-full border-2 border-orange-400 shadow-lg overflow-hidden bg-white">
          <img
            src={recipe.image || "./food.jpg"}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">
          {recipe.title}
        </h3>

        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          <span className="font-semibold">Ingredients:</span> {recipe.ingredients}
        </p>

        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
          <span className="font-semibold">Instructions:</span> {recipe.instructions}
        </p>

        {/* Meta info */}
        <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {recipe.time}
          </span>

          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(recipe.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Action */}
        <button
          onClick={() =>
            setRecipes((prev) => prev.filter((r) => r._id !== recipe._id))
          }
          className="mt-5 flex items-center justify-center gap-2 mx-auto bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm transition duration-300 hover:scale-105"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeItems;
