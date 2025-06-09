import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainingPrograms from './components/TrainingPrograms';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <TrainingPrograms />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;