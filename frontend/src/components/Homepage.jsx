import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Globe, Mail, Phone, Star, Code, Smartphone, Server, Users, Linkedin, Facebook, Twitter, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { motion } from "framer-motion"

export default function HomePage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        { name: "John Doe", company: "ABC Corp", text: "Zidio delivered an outstanding web application that exceeded our expectations." },
        { name: "Jane Smith", company: "XYZ Inc", text: "The mobile app developed by Zidio has significantly improved our customer engagement." },
        { name: "Mike Johnson", company: "123 Tech", text: "Zidio's cloud solutions have transformed our IT infrastructure, improving efficiency and reducing costs." },
        { name: "Emily Brown", company: "Tech Innovators", text: "Working with Zidio has been a game-changer for our business. Their expertise and dedication are unmatched." },
        { name: "Alex Lee", company: "Future Systems", text: "Zidio's custom software solution streamlined our operations and boosted our productivity significantly." },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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
                        <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Welcome to Zidio</h1>
                        <p className="text-2xl mb-10 text-gray-700 max-w-2xl mx-auto">Your trusted partner in innovative IT solutions and cutting-edge services</p>
                        <Link to="/about">
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 transform -skew-y-6"></div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                    >
                        <ArrowDown className="h-8 w-8 text-gray-400" />
                    </motion.div>
                </section>

                <section className="mb-32">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: Globe, title: "Web Development", description: "Custom web solutions tailored to your business needs." },
                            { icon: Smartphone, title: "Mobile Apps", description: "Innovative mobile applications for iOS and Android platforms." },
                            { icon: Server, title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure for your business." },
                            { icon: Code, title: "Custom Software", description: "Bespoke software solutions to address unique challenges." },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
                                    <CardHeader>
                                        <div className="mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:animate-pulse">
                                            <service.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform -skew-y-6"></div>
                    <div className="relative z-10 py-16">
                        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Why Choose Zidio?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                { title: "Experienced Team", description: "Our team of experts brings years of industry experience to every project." },
                                { title: "Cutting-edge Technology", description: "We stay ahead of the curve with the latest technologies and best practices." },
                                { title: "Timely Delivery", description: "We pride ourselves on delivering projects on time and within budget." },
                                { title: "24/7 Support", description: "Our dedicated support team is always available to assist you." },
                                { title: "Customized Solutions", description: "We tailor our solutions to meet your specific business needs." },
                                { title: "Quality Assurance", description: "Rigorous testing ensures the highest quality of our deliverables." },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2 mt-1">
                                                    <CheckCircle className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-32">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { step: 1, title: "Requirement Gathering", description: "We work closely with you to understand your needs and objectives." },
                            { step: 2, title: "Planning & Design", description: "Our team creates a detailed project plan and design mockups." },
                            { step: 3, title: "Development & Testing", description: "We build your solution using agile methodologies and rigorous testing." },
                            { step: 4, title: "Deployment & Support", description: "We launch your project and provide ongoing maintenance and support." },
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="relative overflow-hidden group bg-white dark:bg-gray-800">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-4">
                                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600">{process.step}</span>
                                            <span className="text-2xl">{process.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-32">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { name: "Animesh Singh", role: "Full Stack Web Developer", image: "/animesh.png", facebook: "#", twitter: "#" },
                            { name: "Salma Husna Salsabila", role: "UI/UX Designer", image: "/salma.png", facebook: "#", twitter: "#" },
                            { name: "Chandan Mishara", role: "Data Scientist", image: "/chandan.png", facebook: "#", twitter: "#" },
                            { name: "Harsa Dash", role: "Developer Team Lead", image: "/harsa.png", facebook: "#", twitter: "#" },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden group bg-white dark:bg-gray-800">
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden">
                                            <img src={member.image} alt={member.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                <div className="flex space-x-4">
                                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                                                        <Facebook className="h-6 w-6" />
                                                    </a>
                                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                                                        <Twitter className="h-6 w-6" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-32 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transform -skew-y-6"></div>
                    <div className="relative z-10 py-16">
                        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Customer Testimonials</h2>
                        <div className="max-w-4xl mx-auto">
                            <Card className="bg-white dark:bg-gray-800">
                                <CardContent className="p-10">
                                    <div className="flex justify-between items-center mb-6">
                                        <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                            <ChevronLeft className="h-8 w-8" />
                                        </button>
                                        <div className="flex items-center justify-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                            <ChevronRight className="h-8 w-8" />
                                        </button>
                                    </div>
                                    <motion.div
                                        key={currentTestimonial}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <p className="mb-6 text-xl text-gray-700 dark:text-gray-300 italic text-center">"{testimonials[currentTestimonial].text}"</p>
                                        <div className="text-center">
                                            <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].company}</p>
                                        </div>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="mb-32">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Get in Touch</h2>
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-10 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <Mail className="h-6 w-6" />
                                            <span>support@zidio.in</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <Phone className="h-6 w-6" />
                                            <span>+918455807965</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <Globe className="h-6 w-6" />
                                            <span>www.zidio.in</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-3xl font-semibold mb-6">Send us a message</h3>
                                    <form className="space-y-6">
                                        <Input placeholder="Your Name" className="bg-gray-100 dark:bg-gray-700" />
                                        <Input placeholder="Your Email" type="email" className="bg-gray-100 dark:bg-gray-700" />
                                        <Input placeholder="Your Phone" type="tel" className="bg-gray-100 dark:bg-gray-700" />
                                        <textarea placeholder="Your Message" className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-gray-300" required></textarea>
                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">About Zidio</h3>
                            <p className="text-gray-300">Zidio is your trusted partner for innovative IT solutions. We deliver cutting-edge technology services to help businesses thrive in the digital age.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
                                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link></li>
                                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</Link></li>
                                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <Mail className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <p>&copy; 2023 Zidio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}