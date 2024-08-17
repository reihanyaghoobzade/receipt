// import { useEffect, useState } from 'react';
// import { fetchUserRecipes } from '../services/api';
// import { RecipeCard } from './RecipeCard';

export function Profile() {
    // const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     async function getUserRecipes() {
    //         const data = await fetchUserRecipes();
    //         setRecipes(data);
    //     }
    //     getUserRecipes();
    // }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Recipes</h1>
            <div className="flex flex-wrap -mx-4">
                {/* {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))} */}
            </div>
        </div>
    );
}
