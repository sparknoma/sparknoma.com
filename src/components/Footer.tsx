import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/LOGO-SPARKNOMA.png" 
                alt="Sparknoma Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Sparknoma</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>sparknoma@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+33 7 83-98-73-15</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{t('contact.remote')}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('header.services')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.awsCloud.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.aiMl.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.webDev.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.devops.title')}</a></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.training')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#training" className="hover:text-white transition-colors">{t('training.cloudTraining.title')}</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">{t('training.kubernetesTraining.title')}</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">{t('training.devopsTraining.title')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('header.contact')}</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.technologies')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{t('footer.amazonWebServices')}</li>
              <li>React & TypeScript</li>
              <li>Python & Node.js</li>
              <li>Kubernetes & Docker</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;