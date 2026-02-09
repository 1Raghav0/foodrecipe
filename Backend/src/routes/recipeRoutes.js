const express = require('express');
const { getRecipes, getRecipesById, createRecipe, updateRecipe, deleteRecipe } = require('../controller/recipecontroller');
const router = express.Router();

router.get('/', getRecipes);

router.get('/:id', getRecipesById);

router.post('/', createRecipe);

router.put('/:id', updateRecipe);

router.delete('/:id', deleteRecipe);

module.exports = router;