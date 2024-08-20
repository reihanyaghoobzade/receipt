import { Layout } from '../components/Layout';

export function Home() {
    return (
        <Layout>
            <section section className="bg-cover bg-center h-96 mb-12" style={{ backgroundImage: 'url(https://example.com/hero-image.jpg)' }}>
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to Recipe Master</h1>
                    <p className="text-lg md:text-xl text-white mb-6">Discover the best recipes from around the world.</p>
                    <a href="/recipes" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Explore Recipes</a>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://featuredish.com/wp-content/uploads/2013/02/Pasta-Aglio-e-Olio.jpg" alt="Recipe 1" className="w-full h-96 object-cover" />
                            <div className="p-4 flex flex-col justify-between h-[calc(100%-24rem)]">
                                <div>
                                    <h3 className="text-xl font-bold">Pasta Aglio e Olio (garlic and oil)</h3>
                                    <p className="text-gray-600">This Pasta Aglio e Olio recipe is a flavorful classic Italian dish that goes great as the main course or as a side dish to a chicken or meat entree. Aglio e Olio is Italian for “garlic and oil.” This tasty pasta recipe is very simple and easy to make.</p>
                                </div>
                                <a href="https://featuredish.com/pasta-aglio-e-olio-recipe/" target='_blank' rel='noreferrer' className="text-blue-500 hover:underline">
                                    View Recipe
                                </a>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="https://featuredish.com/wp-content/uploads/2013/06/Crispy-Fish-Tacos-with-Cilantro-Cream-Sauce.jpg" alt="Recipe 1" className="w-full h-96 object-cover" />
                            <div className="p-4 flex flex-col justify-between h-[calc(100%-24rem)]">
                                <div>
                                    <h3 className="text-xl font-bold">Crispy Fish Tacos with Cilantro Cream Sauce</h3>
                                    <p className="text-gray-600">This Crispy Fish Tacos with Cilantro Cream Sauce recipe packs a flavorful punch of fresh ingredients. The fish tacos are beer battered and fried for a crispy outside and flaky inside, while the cilantro sauce adds a spicy and creamy topping that brings this whole recipe together.</p>
                                </div>
                                <a href="https://featuredish.com/crispy-fish-tacos-cilantro-cream-sauce-recipe/" target='_blank' rel='noreferrer' className="text-blue-500 hover:underline">
                                    View Recipe
                                </a>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src="http://featuredish.com/wp-content/uploads/2016/05/image-1024x768.jpeg" alt="Recipe 1" className="w-full h-96 object-cover" />
                            <div className="p-4 flex flex-col justify-between h-[calc(100%-24rem)]">
                                <div>
                                    <h3 className="text-xl font-bold">Chicken Caprese Recipe</h3>
                                    <p className="text-gray-600">When I think of fresh Italian flavors, I think of tomatoes, basil, garlic, and mozzarella cheese.  All of these ingredients come together, along with a honey balsamic vinaigrette, as part of this amazing Chicken Caprese recipe.  This is one of my favorite recipes to make,and is best served alongside pasta and with a glass of red wine.  Enjoy!</p>
                                </div>
                                <a href="https://featuredish.com/chicken-caprese-recipe/" target='_blank' rel='noreferrer' className="text-blue-500 hover:underline">
                                    View Recipe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Scientific Articles</h2>
                <div className="container mx-auto flex">
                    <div className="space-y-4 basis-1/2">
                        <div className="flex items-center space-x-4">
                            <img src="https://images.newscientist.com/wp-content/uploads/2024/04/03110241/SEI_197480159.jpg?width=1674" alt="Article 1" className="w-32 h-32 object-cover rounded-lg" />
                            <div>
                                <h3 className="text-xl font-bold"><a href="https://www.newscientist.com/article/mg26234852-500-how-science-can-help-you-bake-a-delicious-vegan-carrot-cake/" target="_blank" rel="noopener noreferrer" className="hover:underline">How science can help you bake a delicious vegan carrot cake</a></h3>
                                <p className="text-gray-600">Unlike some sponges, making a vegan version of carrot cake is easy – if you add a little science, says Karmela Padavic-Callaghancake</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 basis-1/2">
                        <div className="flex items-center space-x-4">
                            <img src="https://images.newscientist.com/wp-content/uploads/2024/04/03110241/SEI_197480159.jpg?width=1674" alt="Article 1" className="w-32 h-32 object-cover rounded-lg" />
                            <div>
                                <h3 className="text-xl font-bold"><a href="https://www.newscientist.com/article/mg26234852-500-how-science-can-help-you-bake-a-delicious-vegan-carrot-cake/" target="_blank" rel="noopener noreferrer" className="hover:underline">How science can help you bake a delicious vegan carrot cake</a></h3>
                                <p className="text-gray-600">Unlike some sponges, making a vegan version of carrot cake is easy – if you add a little science, says Karmela Padavic-Callaghancake</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
