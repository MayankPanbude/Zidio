import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage'
import AboutPage from './components/About'
import ServicesPage from './components/Services'
import ContactPage from './components/Contact'
import LoginPage from './components/authentication/Login'
import SignupPage from './components/authentication/Signup'

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<HomePage />} />}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  )
}

export default App