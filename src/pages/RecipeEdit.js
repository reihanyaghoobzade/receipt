import { useParams } from 'react-router-dom';
import { RecipeForm } from '../components/RecipeForm';

export function RecipeEdit() {
    const { id } = useParams();

    const handleSave = () => {
        // Redirect to home or show success message after saving
    };

    return (
        <div>
            <RecipeForm recipeId={id} onSave={handleSave} />
        </div>
    );
}
