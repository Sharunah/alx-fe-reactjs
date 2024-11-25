import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
//    Action to delete a recipe by its id 
   deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })), 
   // Action to update a recipe by its id
    updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe ) })),
  
}));

export default useRecipeStore