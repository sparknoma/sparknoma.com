import React from 'react';
import { ArrowRight, Cloud, Brain, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block"> 
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                <span>{t('hero.getStarted')}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
                {t('hero.viewWork')}
              </button>
            </div>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Cloud className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">{t('hero.awsCertified')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">{t('hero.aiPowered')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">{t('hero.customSolutions')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Simple Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                  <div className="bg-blue-100 h-4 rounded w-1/2"></div>
                  <div className="bg-gray-100 h-4 rounded w-2/3"></div>
                  <div className="bg-green-100 h-4 rounded w-1/3"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
              <Brain className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-lg shadow-lg animate-pulse">
              <Cloud className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;