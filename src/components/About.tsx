import React from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "50+", label: t('about.stats.projectsCompleted') },
    { number: "25+", label: t('about.stats.happyClients') },
    { number: "3+", label: t('about.stats.yearsExperience') },
    { number: "100%", label: t('about.stats.clientSatisfaction') }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: t('about.values.missionDriven.title'),
      description: t('about.values.missionDriven.description')
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: t('about.values.innovationFirst.title'),
      description: t('about.values.innovationFirst.description')
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t('about.values.clientFocused.title'),
      description: t('about.values.clientFocused.description')
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;