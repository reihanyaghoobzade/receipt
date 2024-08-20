import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const loginUser = async (credentials) => {
    console.log(credentials)
    const response = await apiClient.post(`/user/token/`, credentials);
    return response.data;
};

export const registerUser = async (data) => {
    console.log(data)
    const response = await apiClient.post(`/user/create/`, data);
    loginUser({ ...data, name: undefined })
    return response.data;
};

export const fetchRecipes = async () => {
    const response = await apiClient.get(`/recipe/recipes`);
    return response.data;
};

export const fetchRecipeDetails = async (id) => {
    const response = await apiClient.get(`/recipe/recipes/${id}`);
    return response.data;
};

export const createRecipe = async (recipe) => {
    const response = await apiClient.post(`/recipe/recipes/`, recipe);
    return response.data;
};

export const updateRecipe = async (id, recipe) => {
    const response = await apiClient.put(`/recipe/recipes/${id}/`, recipe);
    return response.data;
};

export const deleteRecipe = async (id) => {
    const response = await apiClient.delete(`/recipe/recipes/${id}`);
    return response.data;
};

// export const editRecipe = async (id) => {
//     const response = await apiClient.patch(`/recipe/recipes/${id}`, recipe);
//     return response.data;
// };

export const fetchTags = async () => {
    const response = await apiClient.get(`/recipe/tags`);
    return response.data;
};

export const fetchIngredients = async () => {
    const response = await apiClient.get(`/ingredients`);
    return response.data;
};
