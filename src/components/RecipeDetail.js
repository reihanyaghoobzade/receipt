import { useEffect, useState } from 'react';
import { fetchRecipeDetails, deleteRecipe } from '../services/api';

export function RecipeDetail({ recipeId }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function getRecipe() {
            const data = await fetchRecipeDetails(recipeId);
            setRecipe(data);
        }
        getRecipe();
    }, [recipeId]);

    const handleDelete = async () => {
        await deleteRecipe(recipeId);
        // Redirect or update the UI after deletion
    };

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img className="w-full h-64 object-cover mb-4" src={recipe.imageUrl} alt={recipe.title} />
            <p className="text-gray-700 text-base">{recipe.description}</p>
            <div className="mt-4">
                {recipe.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                ))}
            </div>
            <div className="mt-8">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleDelete}>Delete</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
            </div>
        </div>
    );
}
