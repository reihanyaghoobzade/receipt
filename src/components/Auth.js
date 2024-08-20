import { useState } from "react";
import { loginUser, registerUser } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({ email, password });
        if (response.token) {
            localStorage.setItem('authToken', response.token); // Store token in localStorage
            navigate("/");
            onLogin?.(response.token); // Optionally pass the token to the parent component
        } else {
            // Handle login error
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <input
                    className="mb-4 p-2 w-full border rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border rounded"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Login
                </button>
                <div className="flex gap-2 mt-4">
                    <p>Don't have an account?</p>
                    <Link to='/signup' className="text-blue-500 underline">Make one</Link>
                </div>
            </form>

        </div>
    );
}


export function Signup({ onSignup }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerUser({ name, email, password });
        if (response) {
            onSignup(response.token); // Handle the authentication token
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <input
                    className="mb-4 p-2 w-full border rounded"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="mb-4 p-2 w-full border rounded"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Sign Up
                </button>
                <div className="flex gap-2 mt-4">
                    <p>Already have an account?</p>
                    <Link to='/login' className="text-blue-500 underline">Log in</Link>
                </div>
            </form>
        </div>
    );
}
