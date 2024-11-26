import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(editedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={editedRecipe.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={editedRecipe.ingredients}
          onChange={handleChange}
        />
      </label>
      <label>
        Instructions:
        <textarea
          name="instructions"
          value={editedRecipe.instructions}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm

