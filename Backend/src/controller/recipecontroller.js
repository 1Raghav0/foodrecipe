const Recipes = require("../../modals/recipeSchema");

const getRecipes = async (req,res) => {
    try {
        const recipes = await Recipes.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getRecipesById = async(req,res) => {
    const recipe = await Recipes.findById(req.params.id);
    if(recipe) {
        res.status(200).json(recipe);
    } else {
        res.status(404).json({ message: "Recipe not found" });
    }
}

const createRecipe = async (req,res) => {
    const { title, ingredients, instructions, time } = req.body;

    if(!title || !ingredients || !instructions || !time) {
         res.status(400).json({ message: "All fields are required" });
    }

    const newRecipe = await Recipes.create({
        title,
        ingredients,
        instructions,
        time,
    });
    return res.json(newRecipe);
} 

const updateRecipe = async (req,res) => {
    const { title, ingredients, instructions, time } = req.body;

    let recipe = await Recipes.findById(req.params.id);

    try {
        if(recipe) {
        const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedRecipe);
    }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteRecipe = (req,res) => {
    res.status(200).json({ message: `Recipe with ID: ${req.params.id} deleted successfully` });
};

module.exports = {
    getRecipes,
    getRecipesById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}