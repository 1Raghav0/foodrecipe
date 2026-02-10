const RecipeItems = ({ recipe, setRecipes }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5">
      
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
        <div className="flex justify-center gap-4 mt-3 text-xs text-gray-500">
          <span>⏱ {recipe.time}</span>
          <span>
            📅 {new Date(recipe.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Action */}
        <button
          onClick={() =>
            setRecipes((prev) => prev.filter((r) => r._id !== recipe._id))
          }
          className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm transition duration-300 hover:scale-105"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeItems;
