import { Link } from 'react-router-dom';
import recipes from '../data.json';

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
