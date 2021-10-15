import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css';
import About from './components/About';
import Features from './components/Features';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
