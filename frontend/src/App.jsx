import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage'
import AboutPage from './components/About'
import ServicesPage from './components/Services'
import ContactPage from './components/Contact'
import LoginPage from './components/authentication/Login'
import SignupPage from './components/authentication/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App