import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Analytics />
    </BrowserRouter>
  )
}

export default App
