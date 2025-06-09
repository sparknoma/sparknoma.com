import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.getInTouch')}</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-colors">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.email')}</p>
                    <p className="text-gray-600">sparknoma@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-colors">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.phone')}</p>
                    <p className="text-gray-600">+33 7 83-98-73-15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-colors">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.location')}</p>
                    <p className="text-gray-600">{t('contact.remote')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.whyChoose.title')}</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">{t('contact.whyChoose.expertArchitects')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">{t('contact.whyChoose.cuttingEdgeAI')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">{t('contact.whyChoose.rapidDevelopment')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-700">{t('contact.whyChoose.support247')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-medium flex items-center justify-center space-x-2 transition-all hover:scale-105"
              >
                <span>{t('contact.form.sendMessage')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;