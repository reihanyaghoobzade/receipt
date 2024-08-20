import { useNavigate, useParams } from 'react-router-dom';
import { RecipeForm } from '../components/RecipeForm';
import { Layout } from '../components/Layout';

export function RecipeEdit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSave = () => {
        navigate(`/recipe/${id}`)

    };

    return (
        <Layout>
            <RecipeForm recipeId={id} onSave={handleSave} />
        </Layout>
    );
}
