import React, { useState } from "react";

function AddRecipeForm() {
  // State for form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log({ title, ingredients, steps });
    alert("Recipe submitted successfully!");

    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter ingredients, separated by commas"
          rows="4"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter preparation steps"
          rows="4"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
