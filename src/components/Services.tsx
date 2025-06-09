import React from 'react';
import { Cloud, Brain, Globe, Code, Database, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: t('services.awsCloud.title'),
      description: t('services.awsCloud.description'),
      features: t('services.awsCloud.features') as string[]
    },
    {
      icon: <Brain className="h-12 w-12 text-orange-600" />,
      title: t('services.aiMl.title'),
      description: t('services.aiMl.description'),
      features: t('services.aiMl.features') as string[]
    },
    {
      icon: <Globe className="h-12 w-12 text-green-600" />,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      features: t('services.webDev.features') as string[]
    },
    {
      icon: <Code className="h-12 w-12 text-purple-600" />,
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      features: t('services.customSoftware.features') as string[]
    },
    {
      icon: <Database className="h-12 w-12 text-indigo-600" />,
      title: t('services.dataSolutions.title'),
      description: t('services.dataSolutions.description'),
      features: t('services.dataSolutions.features') as string[]
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: t('services.security.title'),
      description: t('services.security.description'),
      features: t('services.security.features') as string[]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;