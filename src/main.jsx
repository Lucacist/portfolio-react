import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import CompetencesPage from './pages/CompetencesPage.jsx'
import ProjetsPage from './pages/ProjetsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-react">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/projets" element={<ProjetsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
