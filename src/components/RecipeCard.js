export function RecipeCard({ recipe }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={recipe.imageUrl} alt={recipe.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{recipe.title}</div>
                <p className="text-gray-700 text-base">{recipe.shortDescription}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {recipe.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                ))}
            </div>
        </div>
    );
}
