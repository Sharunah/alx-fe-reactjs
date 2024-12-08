import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipes from '../data.json'; // Import the mock data

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const foundRecipe = recipes.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-red-500">Recipe not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg my-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients:</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Instructions:</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-600">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
