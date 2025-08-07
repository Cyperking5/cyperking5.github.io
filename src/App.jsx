import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Basics from './components/pages/Basics';
import GettingStarted from './components/pages/GettingStarted';
import UseCases from './components/pages/UseCases';
import TipsAndTricks from './components/pages/TipsAndTricks';
import Advanced from './components/pages/Advanced';
import Limitations from './components/pages/Limitations';
import FAQ from './components/pages/FAQ';
import Resources from './components/pages/Resources';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grundlagen" element={<Basics />} />
            <Route path="/erste-schritte" element={<GettingStarted />} />
            <Route path="/anwendungsbereiche" element={<UseCases />} />
            <Route path="/tipps-tricks" element={<TipsAndTricks />} />
            <Route path="/fortgeschrittene" element={<Advanced />} />
            <Route path="/grenzen-sicherheit" element={<Limitations />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ressourcen" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

