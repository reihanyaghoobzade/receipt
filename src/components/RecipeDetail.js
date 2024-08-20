import { useEffect, useState } from 'react';
import { fetchRecipeDetails, deleteRecipe } from '../services/api';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Layout } from './Layout';

export function RecipeDetail() {
    const [recipe, setRecipe] = useState(null);
    let { id: recipeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getRecipe() {
            const data = await fetchRecipeDetails(recipeId);
            setRecipe(data);
        }
        getRecipe();
    }, [recipeId]);

    const handleDelete = async () => {
        await deleteRecipe(recipeId);
        navigate("/recipes");
        // Redirect or update the UI after deletion
    };

    if (!recipe) return <div>Loading...</div>;

    return (
        <Layout>
            (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header Section */}
                    <header className="bg-gray-800 text-white p-4 text-center">
                        <h1 className="text-3xl font-bold">{recipe.title}</h1>
                    </header>

                    {/* Recipe Image */}
                    <div className="p-4">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-64 object-cover rounded"
                        />
                    </div>

                    {/* Recipe Details */}
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-700 font-semibold">Time: {recipe.time_minutes} minutes</span>
                            <span className="text-gray-700 font-semibold">Price: {recipe.price}</span>
                            {recipe.link && (
                                <a
                                    href={recipe.id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    Recipe Link
                                </a>
                            )}
                        </div>

                        {/* Ingredients */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                            <ul className="list-disc list-inside pl-5">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="text-gray-800">{ingredient.name}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Description</h2>
                            <p className="text-gray-800">{recipe.description}</p>
                        </div>

                        {/* Tags */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {recipe.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author Actions */}
                        <div className="flex gap-4">
                            <Link
                                to={`/recipe/edit/${recipe.id}`}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Edit Recipe
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Delete Recipe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            );
        </Layout>
    );
}
