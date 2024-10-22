import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitGuest = () => {
        setEmail("guest@example.com");
        setPassword("123456");
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login to Zidio</CardTitle>
                    <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                        <Button variant="destructive" type="submit" onClick={submitGuest} className="w-full">Get Guest User Credentials</Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-primary hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}