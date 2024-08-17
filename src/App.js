import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Auth';
import { Signup } from './components/Auth';
import { Home } from './pages/Home';
import { RecipeEdit } from './pages/RecipeEdit';
import { Profile } from './components/Profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recipe/edit/:id" element={<RecipeEdit />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
