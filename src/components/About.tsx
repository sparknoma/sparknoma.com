import React from 'react';
import { Users, Award, Target, Lightbulb, ArrowUpRight, Code, Cloud, Database, Cog, Rocket, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "AWS Cloud Architecture",
      description: "5+ years with CDK, CloudFormation, Terraform. Event-driven architectures for scalable applications",
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "DevOps & Infrastructure",
      description: "Jenkins CI/CD, Kubernetes orchestration, Infrastructure as Code with enterprise-grade scalability",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Microservices Architecture",
      description: "Event-driven microservices using Agile methodology for distributed and resilient systems",
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: ".NET backend, Angular/Next.js frontend, delivering production-ready applications",
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Modern Tech Stack",
      description: "Supabase, PostgreSQL, MySQL with clean architecture and best practices",
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Azure Active Directory integration, secure authentication, and compliance standards",
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Sparknoma DNA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {t('about.dnaTitle')}
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  {t('about.dnaDescription1')}
                </p>
                <p>
                  {t('about.dnaDescription2')}
                </p>
                <p>
                  {t('about.dnaDescription3')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Expertise */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.technicalExpertise')}</h3>
              <div className="space-y-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;