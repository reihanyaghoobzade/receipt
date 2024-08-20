import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Signup } from './components/Auth';
import { Home } from './pages/Home';
import { RecipeEdit } from './pages/RecipeEdit';
import { CreateRecipe } from './pages/CreateRecipe';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './components/RecipeDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/recipe/edit/:id" element={<RecipeEdit />} />
                <Route path="/recipe/create" element={<CreateRecipe />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
