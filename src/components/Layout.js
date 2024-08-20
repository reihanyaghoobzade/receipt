import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Layout({ children }) {
    const navigate = useNavigate()

    const isLoggedIn = useMemo(() => localStorage.getItem('authToken'), [localStorage.getItem('authToken')])

    const handleLogin = () => {
        if (isLoggedIn) {
            localStorage.removeItem('authToken')
        }
        navigate('/login')
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <Link to="/">Recipe Master</Link>
                    </div>
                    <nav className="space-x-4">
                        <Link to="/" className="hover:text-gray-200">Home</Link>
                        <Link to="/recipes" className="hover:text-gray-200">Recipes</Link>
                        {/* <Link to={{
                            pathname: "/",
                            hash: "#articles",
                        }} className="hover:text-gray-200">Articles</Link> */}
                        <span onClick={handleLogin} className="hover:text-gray-200 cursor-pointer">{isLoggedIn ? 'Log Out' : 'Log In'}</span>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-blue-800 text-white py-8">
                <div className="container mx-auto text-center">
                    <div className="space-x-4 mb-4">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    </div>
                    <div className="space-x-4 mb-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://clipart.info/images/minicovers/1534043161Twitter-Bird-Png.png" alt="Twitter" className="w-5 h-5 inline-block rounded" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://clipart.info/images/ccovers/1509135360facebook-logo-png-white.png" alt="Facebook" className="w-6 h-6 bg-black inline-block rounded" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://clipart.info/images/ccovers/1516920570Instagram-logo-version-2.png" alt="Facebook" className="w-6 h-6 inline-block rounded" />
                        </a>
                    </div>
                    <p>&copy; 2024 Recipe Master. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
