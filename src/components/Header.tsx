import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Sparknoma</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.home')}</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.services')}</a>
            <a href="#training" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.training')}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.about')}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.contact')}</a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('header.home')}</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('header.services')}</a>
              <a href="#training" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('header.training')}</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('header.about')}</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('header.contact')}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;