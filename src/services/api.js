import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const loginUser = async (credentials) => {
    console.log(credentials)
    const response = await axios.post(`${API_BASE_URL}/user/create/`, credentials);
    return response.data;
};

export const registerUser = async (data) => {
    console.log(data)
    const response = await axios.post(`${API_BASE_URL}/user/create/`, data);
    return response.data;
};

export const fetchRecipes = async () => {
    const response = await axios.get(`${API_BASE_URL}/recipe/recipes`);
    return response.data;
};

export const fetchRecipeDetails = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/recipes/${id}`);
    return response.data;
};

export const createRecipe = async (recipe) => {
    const response = await axios.post(`${API_BASE_URL}/recipes`, recipe);
    return response.data;
};

export const updateRecipe = async (id, recipe) => {
    const response = await axios.put(`${API_BASE_URL}/recipes/${id}`, recipe);
    return response.data;
};

export const deleteRecipe = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/recipes/${id}`);
    return response.data;
};

export const fetchTags = async () => {
    const response = await axios.get(`${API_BASE_URL}/tags`);
    return response.data;
};

export const fetchIngredients = async () => {
    const response = await axios.get(`${API_BASE_URL}/ingredients`);
    return response.data;
};
