import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/LOGO-SPARKNOMA.png" 
              alt="Sparknoma Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-gray-900">Sparknoma</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('header.home')}</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Experience</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('header.services')}</a>
            <a href="#training" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('header.training')}</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('header.about')}</a>
            <a href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-colors">{t('header.contact')}</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">{t('header.home')}</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">Experience</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">{t('header.services')}</a>
              <a href="#training" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">{t('header.training')}</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">{t('header.about')}</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">{t('header.contact')}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;