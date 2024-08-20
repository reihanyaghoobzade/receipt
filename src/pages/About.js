// /src/pages/About.js

import React from 'react';
import { Layout } from '../components/Layout';

export function About() {
    return (
        <Layout>
            <section className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-crayfish-food-food-condiment-black-horizontal-banner-goodsseasoningblackhorizontal-bannerdelicious-image_50376.jpg)' }}>
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl">Learn more about our journey and what drives us</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        At Recipe Master, we believe in bringing people together through the love of food. Our mission is to provide a platform where cooking enthusiasts can share their favorite recipes, discover new dishes, and connect with a community that shares their passion.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://www.citadel.com/wp-content/uploads/2017/10/Ken_Griffin-2.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
                            <p className="text-gray-600 mb-4">Founder & CEO</p>
                            <p className="text-gray-700">John is a passionate chef and entrepreneur with over 15 years of experience in the culinary industry.</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://6845225.fs1.hubspotusercontent-na1.net/hub/6845225/hubfs/1.%20Webb%202023/XMR%20People/Management%20Team/Johanna%20Edepil.jpeg?width=900&height=1096&name=Johanna%20Edepil.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
                            <p className="text-gray-600 mb-4">Chief Marketing Officer</p>
                            <p className="text-gray-700">Jane has a deep understanding of digital marketing and has been instrumental in growing our community.</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://dam.malt.com/eb097138-2459-4497-97f5-3c5a3510687d?gravity=face&func=face&face_margin=60&w=360&h=360&q=90" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">Mark Taylor</h3>
                            <p className="text-gray-600 mb-4">Head of Product</p>
                            <p className="text-gray-700">Mark is the brain behind the user-friendly interface of Recipe Master, ensuring a seamless experience for all.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                        We'd love to hear from you! Whether you have a question about our platform, want to share your feedback, or just want to chat about your favorite recipes, feel free to reach out to us.
                    </p>
                    <a href="mailto:contact@recipemaster.com" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">
                        Contact Us
                    </a>
                </div>
            </section>
        </Layout>
    );
}
