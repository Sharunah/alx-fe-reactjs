import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Initial state for the recipes
  searchTerm: '', // Initial state for the search term
  filteredRecipes: [], // Initial state for the filtered recipes

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // Action to set the list of recipes
  setRecipes: (recipes) => set({ recipes }),

  // Action to delete a recipe by its id
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Action to update a recipe by its id
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
}));

export default useRecipeStore;
