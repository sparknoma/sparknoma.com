import React from 'react';
import { Cloud, Zap, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Sparknoma</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@sparknoma.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>{t('contact.remote')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('header.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.awsCloud.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.aiMl.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.webDev.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.customSoftware.title')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.training')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#training" className="hover:text-white transition-colors">{t('training.cloudTraining.title')}</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">{t('training.kubernetesTraining.title')}</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">{t('training.devopsTraining.title')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('header.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.technologies')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Cloud className="h-4 w-4" />
                <span>{t('footer.amazonWebServices')}</span>
              </li>
              <li>React & TypeScript</li>
              <li>Python & Node.js</li>
              <li>Kubernetes & Docker</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;