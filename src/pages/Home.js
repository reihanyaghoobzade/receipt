import { fetchRecipes } from '../services/api';
import { RecipeCard } from '../components/RecipeCard';
import { useEffect, useState } from 'react';

export function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getRecipes() {
            const data = await fetchRecipes();
            setRecipes(data);
        }
        getRecipes();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Recipes</h1>
            <div className="flex flex-wrap -mx-4">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
