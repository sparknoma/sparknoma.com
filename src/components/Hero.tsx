import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">
          {/* Main Headline */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
              {t('hero.title')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <span>{t('hero.getStarted')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <Play className="h-5 w-5 ml-0.5" />
              </div>
              <span className="font-medium">{t('hero.viewWork')}</span>
            </button>
          </div>

          {/* Certifications */}
          <div className="pt-16">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">AWS</span>
                </div>
                <span className="font-medium">AWS Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">AZ</span>
                </div>
                <span className="font-medium">Azure Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">ISTQB</span>
                </div>
                <span className="font-medium">ISTQB Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">ML</span>
                </div>
                <span className="font-medium">ML Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;