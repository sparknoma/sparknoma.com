import React from 'react';
import { Globe } from 'lucide-react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {languages.find(lang => lang.code === currentLanguage)?.flag}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => onLanguageChange(language.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;