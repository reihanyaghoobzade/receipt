import { useEffect, useState } from 'react';
import { createRecipe, updateRecipe, fetchTags, fetchRecipeDetails } from '../services/api';

export function RecipeForm({ recipeId, onSave }) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function loadData() {
            const tagsData = await fetchTags();
            setTags(tagsData);
            if (recipeId) {
                const recipeData = await fetchRecipeDetails(recipeId);
                setTitle(recipeData.title);
                setImageUrl(recipeData.imageUrl);
                setSelectedTags(recipeData.tags);
                setDescription(recipeData.description);
            }
        }
        loadData();
    }, [recipeId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recipe = { title, imageUrl, tags: selectedTags, description };
        if (recipeId) {
            await updateRecipe(recipeId, recipe);
        } else {
            await createRecipe(recipe);
        }
        onSave();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{recipeId ? 'Edit Recipe' : 'Create Recipe'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">Image URL</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="imageUrl" type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">Tags</label>
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="tags" multiple value={selectedTags} onChange={e => setSelectedTags([...e.target.selectedOptions].map(o => o.value))}>
                        {tags.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
            </form>
        </div>
    );
}
