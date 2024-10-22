import React, { useState } from 'react'
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () => {
        // Implement logout logic here
        setIsLoggedIn(false)
    }

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/placeholder.svg?height=40&width=40" alt="Zidio Logo" className="h-10 w-10" />
                        <span className="text-2xl font-bold text-primary">Zidio</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
                        <Link to="/about" className="text-sm font-medium hover:text-primary">About</Link>
                        <Link to="/services" className="text-sm font-medium hover:text-primary">Services</Link>
                        <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
                        {isLoggedIn ? (
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" /> Logout
                            </Button>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="outline" size="sm">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button size="sm">Sign Up</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}