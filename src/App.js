import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import HooksPage from './components/pages/HooksPage/HooksPage.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hooks" element={<HooksPage />} />
      </Routes>
    </Router>
  )
}

export default App
