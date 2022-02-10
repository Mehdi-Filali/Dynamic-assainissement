import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer'


ReactDOM.render(
  <Router>

    <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />
  </Router>,
  document.getElementById('root')
)