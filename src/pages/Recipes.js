import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { fetchRecipes } from '../services/api';
import { RecipeCard } from '../components/RecipeCard';
import { Link } from 'react-router-dom';

export function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getRecipes() {
            const data = await fetchRecipes();
            setRecipes(data);
        }
        getRecipes();
    }, []);

    return (
        <Layout>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-3xl font-bold mb-8">Recipes</h1>
                        <Link to="/recipe/create" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
                            Create New Recipe
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recipes.map(recipe => (
                            <RecipeCard key={recipe.link} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
