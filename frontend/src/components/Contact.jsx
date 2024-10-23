import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Navbar from '@/components/Navbar'

export default function ContactPage() {
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
                        <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600  to-purple-600">Contact Us</h1>
                        <p className="text-2xl mb-10 text-gray-700 max-w-2xl mx-auto">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 transform -skew-y-6"></div>
                </section>

                <section className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="bg-white dark:bg-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Get in Touch</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input id="name" placeholder="Your Name" className="bg-gray-100 dark:bg-gray-700" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="Your Email" className="bg-gray-100 dark:bg-gray-700" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                            <Input id="subject" placeholder="Subject" className="bg-gray-100 dark:bg-gray-700" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                                            <Textarea id="message" placeholder="Your Message" className="bg-gray-100 dark:bg-gray-700 h-32" />
                                        </div>
                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                                            Send Message
                                            <Send className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="bg-white dark:bg-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-gray-600 dark:text-gray-300">support@zidio.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <p className="text-gray-600 dark:text-gray-300">+918455807965</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Address</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Jigani, Bengaluru, Karnataka 560105</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                            <Clock className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Business Hours</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9am - 5pm</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="mt-8">
                                <Card className="bg-white dark:bg-gray-800">
                                    <CardContent className="p-0">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772.1099258362381!2d77.62869122686807!3d12.76613984330768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84179333b909112d%3A0x99b7aa8200259bb9!2sZidio%20Development%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1723539051372!5m2!1sen!2sin"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
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