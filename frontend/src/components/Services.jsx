import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Server, Code, Database, Shield, Cpu, BarChart } from "lucide-react"
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    const services = [
        { icon: Globe, title: "Web Development", description: "Custom web solutions tailored to your business needs, from responsive websites to complex web applications." },
        { icon: Smartphone, title: "Mobile App Development", description: "Innovative mobile applications for iOS and Android platforms, designed to engage your audience and drive growth." },
        { icon: Server, title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure to optimize your operations and reduce costs." },
        { icon: Code, title: "Custom Software Development", description: "Bespoke software solutions to address your unique business challenges and streamline processes." },
        { icon: Database, title: "Database Management", description: "Efficient database design, implementation, and optimization to ensure your data is secure and accessible." },
        { icon: Shield, title: "Cybersecurity Services", description: "Comprehensive security solutions to protect your digital assets and maintain customer trust." },
        { icon: Cpu, title: "AI & Machine Learning", description: "Cutting-edge AI and machine learning solutions to automate processes and gain valuable insights." },
        { icon: BarChart, title: "Data Analytics", description: "Advanced data analytics services to help you make data-driven decisions and uncover new opportunities." },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
            <Navbar />

            <main className="container mx-auto px-4 py-24">
                <motion.section className="text-center mb-16" {...fadeIn}>
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Services</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
                        Discover our comprehensive range of IT solutions designed to propel your business into the digital future.
                    </p>
                </motion.section>

                <motion.section className="mb-16" {...fadeIn}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center  justify-center mb-4">
                                            <service.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section className="mb-16" {...fadeIn}>
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Consultation</h3>
                            <p className="text-gray-700">We begin with a thorough consultation to understand your business needs, challenges, and goals. This allows us to tailor our services to your specific requirements.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Custom Solution Design</h3>
                            <p className="text-gray-700">Our expert team designs a custom solution that addresses your unique challenges and aligns with your business objectives.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Agile Development</h3>
                            <p className="text-gray-700">We employ agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
                            <p className="text-gray-700">Rigorous testing and quality assurance processes ensure that our solutions meet the highest standards of performance and reliability.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section {...fadeIn}>
                    <h2 className="text-3xl font-semibold mb-8 text-center">Ready to Transform Your Business?</h2>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
                        Let's discuss how our services can help you achieve your business goals and stay ahead in the digital landscape.
                    </p>
                    <div className="text-center">
                        <Link to="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                            Get in Touch
                        </Link>
                    </div>
                </motion.section>
            </main>

            <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Zidio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}