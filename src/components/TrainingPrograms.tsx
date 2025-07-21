import React from 'react';
import { GraduationCap, Container, GitBranch, Calendar, Users, Award, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrainingPrograms = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: t('training.cloudTraining.title'),
      description: t('training.cloudTraining.description'),
      features: t('training.cloudTraining.features') as string[],
      duration: t('training.cloudTraining.duration'),
      level: t('training.cloudTraining.level'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: t('training.kubernetesTraining.title'),
      description: t('training.kubernetesTraining.description'),
      features: t('training.kubernetesTraining.features') as string[],
      duration: t('training.kubernetesTraining.duration'),
      level: t('training.kubernetesTraining.level'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: t('training.devopsTraining.title'),
      description: t('training.devopsTraining.description'),
      features: t('training.devopsTraining.features') as string[],
      duration: t('training.devopsTraining.duration'),
      level: t('training.devopsTraining.level'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: t('training.features.flexible.title'),
      description: t('training.features.flexible.description')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('training.features.expert.title'),
      description: t('training.features.expert.description')
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t('training.features.certification.title'),
      description: t('training.features.certification.description')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('training.features.handson.title'),
      description: t('training.features.handson.description')
    }
  ];

  return (
    <section id="training" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Hidden badge - commented out for later use */}
          {/* <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4" />
            <span>{t('training.badge')}</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight px-2">
            {t('training.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
            {t('training.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors mb-4">
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-3xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gray-100 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${program.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              
              {/* Badges */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border">
                  {program.level}
                </span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border">
                  {program.duration}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-8">
                  {program.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="group/btn w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>{t('training.enrollNow')}</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">{t('training.cta.title')}</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              {t('training.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-medium transition-all hover:scale-105">
                {t('training.cta.schedule')}
              </button>
              <button className="border border-gray-600 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl font-medium transition-all">
                {t('training.cta.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;