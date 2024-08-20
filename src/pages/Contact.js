// /src/pages/Contact.js

import React from 'react';
import { Layout } from '../components/Layout';

export function Contact() {
    return (
        <Layout>
            <section className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://st3.depositphotos.com/1010613/32552/i/450/depositphotos_325526072-stock-photo-white-popular-contact-web-icons.jpg)' }}>
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl">We'd love to hear from you. Get in touch with us!</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Send Message</button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
                            <p className="text-lg mb-4">
                                <strong>Address:</strong> 123 Recipe Lane, Food City, FC 12345
                            </p>
                            <p className="text-lg mb-4">
                                <strong>Email:</strong> <a href="mailto:contact@recipemaster.com" className="text-blue-600 hover:underline">contact@recipemaster.com</a>
                            </p>
                            <p className="text-lg mb-4">
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </p>
                            <div className="flex space-x-4 mt-8">
                                <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="https://twitter.com" className="text-blue-600 hover:text-blue-800"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="https://instagram.com" className="text-blue-600 hover:text-blue-800"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800"><i className="fab fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Location</h2>
                    <div className="w-full h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8370549081555!2d-122.08424938468127!3d37.42206597982502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba021806dc5b%3A0x0!2zTWFuYWdlciwgUHJvZ3JhbW1pbmcgSW5zdGl0dXRlIG9mIFN0YW5mb3JkIFVuaXZlcnNpdHk!5e0!3m2!1sen!2sus!4v1617125840325!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
