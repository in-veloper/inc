import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.tsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
