import React from 'react';
import { Cloud, Brain, Code, GitBranch, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: t('services.awsCloud.title'),
      description: t('services.awsCloud.description'),
      features: t('services.awsCloud.features') as string[],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('services.aiMl.title'),
      description: t('services.aiMl.description'),
      features: t('services.aiMl.features') as string[],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      features: t('services.webDev.features') as string[],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: t('services.devops.title'),
      description: t('services.devops.description'),
      features: t('services.devops.features') as string[],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight px-2">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <button className="group/btn flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;