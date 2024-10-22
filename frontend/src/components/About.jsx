import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowRight, Award, Briefcase, Code, Users } from "lucide-react"
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">About Zidio</h1>
                    <p className="text-xl mb-8">Empowering businesses through innovative IT solutions</p>
                </section>

                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                            <p className="mb-4">
                                Founded in 2010, Zidio has been at the forefront of technological innovation, helping businesses transform their digital presence and streamline their operations.
                            </p>
                            <p className="mb-4">
                                Our team of expert developers, designers, and consultants work tirelessly to deliver cutting-edge solutions that drive growth and efficiency for our clients.
                            </p>
                            <Link to="/contact">
                                <Button>
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-full">
                            <img
                                src="/about.png"
                                alt="Zidio team"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Code, title: "Innovation", description: "Constantly pushing the boundaries of technology" },
                            { icon: Users, title: "Collaboration", description: "Working closely with clients to achieve their goals" },
                            { icon: Award, title: "Excellence", description: "Delivering high-quality solutions that exceed expectations" },
                            { icon: Briefcase, title: "Integrity", description: "Building trust through honesty and transparency" },
                        ].map((value, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <value.icon className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Web Development", skills: ["React", "Node.js", "PHP", "Python"] },
                            { title: "Mobile Development", skills: ["iOS (Swift)", "Android (Kotlin)", "React Native"] },
                            { title: "Cloud & DevOps", skills: ["AWS", "Azure", "Docker", "Kubernetes"] },
                        ].map((category, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside">
                                        {category.skills.map((skill, skillIndex) => (
                                            <li key={skillIndex}>{skill}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Work with Us?</h2>
                    <p className="mb-8">Let's discuss how we can help your business thrive in the digital world.</p>
                    <Link to="/contact">
                        <Button size="lg">
                            Contact Us
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </section>
            </main>

            <footer className="bg-primary text-primary-foreground mt-16 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 Zidio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}