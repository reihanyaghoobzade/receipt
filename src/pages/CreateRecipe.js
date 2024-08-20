import { RecipeForm } from '../components/RecipeForm';
import { useNavigate } from 'react-router-dom';

export function CreateRecipe() {
    const navigate = useNavigate();

    const handleSave = () => {
        navigate('/recipes')
    }

    return (
        <div>
            <RecipeForm onSave={handleSave} />
        </div>
    );
}
