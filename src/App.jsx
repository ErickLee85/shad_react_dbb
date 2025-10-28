import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
