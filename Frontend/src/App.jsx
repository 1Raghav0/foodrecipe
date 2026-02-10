import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App