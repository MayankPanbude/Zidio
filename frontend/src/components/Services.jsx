import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ArrowRight, Code, Globe, Laptop, Smartphone, Server, Users, Zap } from "lucide-react"
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl mb-8">Comprehensive IT solutions tailored to your business needs</p>
                </section>

                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "Web Development",
                                description: "Custom web applications, e-commerce solutions, and content management systems.",
                                features: [
                                    "Responsive design",
                                    "User-friendly interfaces",
                                    "Scalable architecture",
                                    "SEO optimization"
                                ]
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile App Development",
                                description: "Native and cross-platform mobile applications for iOS and Android.",
                                features: [
                                    "Intuitive UI/UX design",
                                    "Performance optimization",
                                    "Push notifications",
                                    "Offline functionality"
                                ]
                            },
                            {
                                icon: Code,
                                title: "Custom Software Development",
                                description: "Tailor-made software solutions to address your unique business challenges.",
                                features: [
                                    "Requirements analysis",
                                    "Agile development",
                                    "Quality assurance",
                                    "Ongoing support"
                                ]
                            },
                            {
                                icon: Server,
                                title: "Cloud Solutions",
                                description: "Cloud migration, infrastructure management, and optimization services.",
                                features: [
                                    "AWS and Azure expertise",
                                    "Scalable architecture",
                                    "Security best practices",
                                    "Cost optimization"
                                ]
                            },
                            {
                                icon: Users,
                                title: "IT Consulting",
                                description: "Strategic technology advice to drive your business forward.",
                                features: [
                                    "Digital transformation",
                                    "Technology roadmaps",
                                    "Process optimization",
                                    "Vendor selection"
                                ]
                            },
                            {
                                icon: Zap,
                                title: "Maintenance and Support",
                                description: "Ongoing maintenance and support for your IT systems and applications.",
                                features: [
                                    "24/7 technical support",
                                    "Regular updates",
                                    "Performance monitoring",
                                    "Security patches"
                                ]
                            }
                        ].map((service, index) => (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <service.icon className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="list-disc list-inside space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>{feature}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "1. Requirements Gathering", description: "We work closely with you to understand your needs and objectives." },
                            { title: "2. Planning & Design", description: "Our team creates a detailed project plan and design mockups." },
                            { title: "3. Development & Testing", description: "We build your solution using agile methodologies and rigorous testing." },
                            { title: "4. Deployment & Support", description: "We launch your project and provide ongoing maintenance and support." },
                        ].map((step, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Technologies We Use</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "React", "Node.js", "Python", "Java",
                            "Swift", "Kotlin", "Angular", "Vue.js",
                            "PHP", ".NET", "AWS", "Azure",
                            "Docker", "Kubernetes", "MongoDB", "MySQL"
                        ].map((tech, index) => (
                            <Card key={index} className="flex items-center justify-center p-4">
                                <span className="font-semibold">{tech}</span>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
                    <p className="mb-8">Let's discuss how our services can help you achieve your business goals.</p>
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