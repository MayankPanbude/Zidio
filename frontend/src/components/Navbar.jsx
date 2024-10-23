import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { LogOut, Menu, X } from "lucide-react"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    const navItems = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Contact", path: "/contact" },
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/zidio.png" alt="Zidio Logo" className="h-10 w-25" />
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`text-sm font-medium hover:text-primary transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-gray-700'}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Button variant="outline" size="sm" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" /> Logout
                        </Button>
                    </div>
                    <button
                        className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </nav>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="block py-2 text-gray-700 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {isLoggedIn ? (
                                <Button variant="outline" size="sm" onClick={handleLogout} className="w-full mt-4">
                                    <LogOut className="mr-2 h-4 w-4" /> Logout
                                </Button>
                            ) : (
                                <div className="mt-4 space-y-2">
                                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button variant="outline" size="sm" className="w-full">Login</Button>
                                    </Link>
                                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button size="sm" className="w-full">Sign Up</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}