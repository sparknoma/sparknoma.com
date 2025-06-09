import React from 'react';
import { GraduationCap, Container, GitBranch, Calendar, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrainingPrograms = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <GraduationCap className="h-12 w-12 text-cyan-600" />,
      title: t('training.cloudTraining.title'),
      description: t('training.cloudTraining.description'),
      features: t('training.cloudTraining.features') as string[],
      duration: t('training.cloudTraining.duration'),
      level: t('training.cloudTraining.level')
    },
    {
      icon: <Container className="h-12 w-12 text-teal-600" />,
      title: t('training.kubernetesTraining.title'),
      description: t('training.kubernetesTraining.description'),
      features: t('training.kubernetesTraining.features') as string[],
      duration: t('training.kubernetesTraining.duration'),
      level: t('training.kubernetesTraining.level')
    },
    {
      icon: <GitBranch className="h-12 w-12 text-pink-600" />,
      title: t('training.devopsTraining.title'),
      description: t('training.devopsTraining.description'),
      features: t('training.devopsTraining.features') as string[],
      duration: t('training.devopsTraining.duration'),
      level: t('training.devopsTraining.level')
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="h-4 w-4" />
            <span>{t('training.badge')}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('training.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('training.subtitle')}
          </p>
        </div>

        {/* Training Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('training.features.flexible.title')}</h3>
            <p className="text-sm text-gray-600">{t('training.features.flexible.description')}</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('training.features.expert.title')}</h3>
            <p className="text-sm text-gray-600">{t('training.features.expert.description')}</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('training.features.certification.title')}</h3>
            <p className="text-sm text-gray-600">{t('training.features.certification.description')}</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('training.features.handson.title')}</h3>
            <p className="text-sm text-gray-600">{t('training.features.handson.description')}</p>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {program.level}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {program.duration}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              
              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-gray-900">{t('training.curriculum')}:</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md hover:shadow-lg">
                {t('training.enrollNow')}
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t('training.cta.title')}</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('training.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg">
              {t('training.cta.schedule')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all">
              {t('training.cta.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;