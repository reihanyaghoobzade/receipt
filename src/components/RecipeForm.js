import { useEffect, useState } from 'react';
import { createRecipe, fetchRecipeDetails, updateRecipe } from '../services/api';

export function RecipeForm({ recipeId, onSave }) {
    const [title, setTitle] = useState('');
    const [timeMinutes, setTimeMinutes] = useState(0);
    const [price, setPrice] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([{ name: '' }]);
    const [ingredients, setIngredients] = useState([{ name: '' }]);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (recipeId) {
            async function getRecipe() {
                const data = await fetchRecipeDetails(recipeId);
                setTitle(data.title)
                setDescription(data.description)
                data.tags.length && setTags(data.tags)
                data.ingredients.length && setIngredients(data.ingredients)
                setLink(data.link)
                setTimeMinutes(data.time_minutes)
                setPrice(data.price)
                // setImage(data.image)
            }
            getRecipe();
        }
    }, [recipeId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Add your other form fields
        formData.append('title', title);
        formData.append('time_minutes', timeMinutes);
        formData.append('price', +price);
        formData.append('link', link);
        formData.append('description', description);
        formData.append('tags', tags); // Assuming tags is an array
        formData.append('ingredients', JSON.stringify(ingredients)); // Assuming ingredients is an array

        // Add the image file directly to FormData
        formData.append('image', image);  // image should be a File object

        for (var [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = recipeId
                ? await updateRecipe(recipeId, formData)
                : await createRecipe(formData);

            if (response) {
                // Optionally handle the response, e.g., call onSave();
                // const response2 = recipeId
                //     ? await updateRecipe(recipeId, {
                //         ...formData,
                //         tags,
                //         ingredients
                //     })
                //     : await createRecipe({
                //         formData,
                //         tags,
                //         ingredients
                //     });

                // if (response2) {
                //     //test
                // }
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };


    const handleTagChange = (index, event) => {
        const updatedTags = [...tags];
        console.log(updatedTags)
        updatedTags[index] = { name: event.target.value };
        setTags(updatedTags);
    };

    const addTagField = () => {
        setTags([...tags, { name: '' }]);
    };

    const handleIngredientChange = (index, event) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = { name: event.target.value };
        setIngredients(updatedIngredients);
    };

    const addIngredientField = () => {
        setIngredients([...ingredients, { name: '' }]);
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]); // Store the selected file
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Create a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeMinutes">Time (Minutes)</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="timeMinutes"
                        type="number"
                        value={timeMinutes}
                        onChange={(e) => setTimeMinutes(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">Link</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="link"
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">Tags</label>
                    {tags.map((tag, index) => (
                        <div key={index} className="flex mb-2">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={`tag-${index}`}
                                name="name"
                                type="text"
                                value={tag.name}
                                onChange={(e) => handleTagChange(index, e)}
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addTagField}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                        Add Tag
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">Ingredients</label>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="flex mb-2">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={`ingredient-${index}`}
                                name="name"
                                type="text"
                                value={ingredient.name}
                                onChange={(e) => handleIngredientChange(index, e)}
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addIngredientField}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                        Add Ingredient
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Upload Image</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Create Recipe
                </button>
            </form>
        </div>
    );
}
