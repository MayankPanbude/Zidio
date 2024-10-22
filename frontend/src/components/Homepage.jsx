import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowRight, CheckCircle, Globe, Mail, Phone, Star, Code, Smartphone, Server, Users, Linkedin, Twitter } from "lucide-react"
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Zidio</h1>
                    <p className="text-xl mb-8">Your trusted partner in IT solutions and services</p>
                    <Link to="/about">
                        <Button size="lg">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </section>

                {/* Services Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, title: "Web Development", description: "Custom web solutions tailored to your business needs." },
                            { icon: Smartphone, title: "Mobile Apps", description: "Innovative mobile applications for iOS and Android platforms." },
                            { icon: Server, title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure for your business." },
                            { icon: Code, title: "Custom Software", description: "Bespoke software solutions to address unique challenges." },
                        ].map((service, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <service.icon className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Why Choose Zidio Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Zidio?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Experienced Team", description: "Our team of experts brings years of industry experience to every project." },
                            { title: "Cutting-edge Technology", description: "We stay ahead of the curve with the latest technologies and best practices." },
                            { title: "Timely Delivery", description: "We pride ourselves on delivering projects on time and within budget." },
                            { title: "24/7 Support", description: "Our dedicated support team is always available to assist you." },
                            { title: "Customized Solutions", description: "We tailor our solutions to meet your specific business needs." },
                            { title: "Quality Assurance", description: "Rigorous testing ensures the highest quality of our deliverables." },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-2">
                                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: "Requirement Gathering", description: "We work closely with you to understand your needs and objectives." },
                            { step: 2, title: "Planning & Design", description: "Our team creates a detailed project plan and design mockups." },
                            { step: 3, title: "Development & Testing", description: "We build your solution using agile methodologies and rigorous testing." },
                            { step: 4, title: "Deployment & Support", description: "We launch your project and provide ongoing maintenance and support." },
                        ].map((process, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span className="text-3xl font-bold text-primary">{process.step}</span>
                                        <span>{process.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{process.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "John Doe", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300", linkedin: "#", twitter: "#" },
                            { name: "Jane Smith", role: "CTO", image: "/placeholder.svg?height=300&width=300", linkedin: "#", twitter: "#" },
                            { name: "Mike Johnson", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300", linkedin: "#", twitter: "#" },
                            { name: "Sarah Brown", role: "UX Designer", image: "/placeholder.svg?height=300&width=300", linkedin: "#", twitter: "#" },
                        ].map((member, index) => (
                            <Card key={index}>
                                <CardContent className="p-6 text-center">
                                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                                    <div className="flex justify-center space-x-2">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Customer Testimonials Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Customer Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "John Doe", company: "ABC Corp", text: "Zidio delivered an outstanding web application that exceeded our expectations." },
                            { name: "Jane Smith", company: "XYZ Inc", text: "The mobile app developed by Zidio has significantly improved our customer engagement." },
                            { name: "Mike Johnson", company: "123 Tech", text: "Zidio's cloud solutions have transformed our IT infrastructure, improving efficiency and reducing costs." },
                        ].map((testimonial, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="mb-4">"{testimonial.text}"</p>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Get in Touch Section */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
                    <Card>
                        <CardContent className="p-6">
                            <Tabs defaultValue="contact" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="contact">Contact Us</TabsTrigger>
                                    <TabsTrigger value="quote">Request a Quote</TabsTrigger>
                                </TabsList>
                                <TabsContent value="contact">
                                    <div className="space-y-4 mt-4">
                                        <div className="flex items-center space-x-2">
                                            <Mail className="h-5 w-5" />
                                            <span>info@zidio.in</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Phone className="h-5 w-5" />
                                            <span>+91 123 456 7890</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Globe className="h-5 w-5" />
                                            <span>www.zidio.in</span>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="quote">
                                    <form className="space-y-4 mt-4">
                                        <Input placeholder="Your Name" />
                                        <Input placeholder="Your Email" type="email" />
                                        <Input placeholder="Your Phone" type="tel" />
                                        <Button type="submit" className="w-full">Submit Request</Button>
                                    </form>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
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