import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Lightbulb, Target, Zap } from "lucide-react"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-24 relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 py-24"
                    >
                        <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Zidio</h1>
                        <p className="text-2xl mb-10 text-gray-700 max-w-2xl mx-auto">Empowering businesses with innovative IT solutions since 2020</p>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 transform -skew-y-6"></div>
                </section>

                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Story</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Founded in 2020, Zidio has been at the forefront of technological innovation, helping businesses transform their digital landscape. Our journey began with a simple mission: to provide cutting-edge IT solutions that drive growth and efficiency for our clients.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Over the years, we've expanded our expertise across various domains, from web and mobile development to cloud solutions and custom software. Our team of passionate technologists continues to push the boundaries of what's possible in the digital realm.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/about.png" alt="Zidio team" className="rounded-lg shadow-2xl" />
                        </motion.div>
                    </div>
                </section>

                <section className="mb-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform -skew-y-6"></div>
                    <div className="relative z-10 py-16">
                        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Users, title: "Client-Centric", description: "We put our clients' needs at the heart of everything we do." },
                                { icon: Lightbulb, title: "Innovation", description: "We constantly seek new and better ways to solve problems." },
                                { icon: Target, title: "Excellence", description: "We strive for the highest quality in all our deliverables." },
                                { icon: Zap, title: "Agility", description: "We adapt quickly to changing technologies and market demands." },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                                                <value.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <CardTitle className="text-xl">{value.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Web Development",
                            "Mobile App Development",
                            "Cloud Solutions",
                            "Custom Software",
                            "UI/UX Design",
                            "DevOps",
                            "Data Analytics",
                            "Artificial Intelligence",
                            "Internet of Things",
                        ].map((expertise, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <CheckCircle className="h-6 w-6 text-green-500" />
                                            <span className="text-lg font-semibold">{expertise}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="text-center mb-24">
                    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Ready to Transform Your Business?</h2>
                    <p className="text-xl mb-10 text-gray-700 max-w-2xl mx-auto">
                        Let's collaborate to bring your digital vision to life. Our team of experts is ready to help you navigate the ever-evolving tech landscape.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                            Get in Touch
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </section>
            </main>

            <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg mb-4">&copy; 2024 Zidio. All rights reserved.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com/people/Zidio-Development/61556709391417/" className="hover:text-blue-200 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://x.com/zidioDev" className="hover:text-blue-200 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/zidio-development/" className="hover:text-blue-200 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}