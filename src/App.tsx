import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediInfo from './components/mediInfo/MediInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medi-info" element={<MediInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
