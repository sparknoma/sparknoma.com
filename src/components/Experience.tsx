import React from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const companies = [
    {
      name: "Airbus",
      location: "Aerospace Sector",
      period: "5+ Years",
      type: "Aerospace Engineering",
      description: "Mission-critical applications using AWS, SAFe Agile methodology, and event-driven architectures",
      color: "from-blue-500 to-cyan-500",
      logo: "A"
    },
    {
      name: "ETT S.p.A.",
      location: "Genoa, Italy", 
      period: "2017-2022",
      type: "Technology Partner",
      description: "Fullstack development with .NET and Angular, delivering enterprise solutions across multiple industries",
      color: "from-purple-500 to-pink-500",
      logo: "ETT"
    },
    {
      name: "Prada",
      location: "Global",
      period: "2019-2020",
      type: "Luxury Brand",
      description: "Digital signage CMS for worldwide stores, managing multimedia content with .NET and Angular",
      color: "from-green-500 to-emerald-500",
      logo: "P"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Engineers Worked At Companies Like
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Bringing expertise from aerospace, technology, and luxury brands to deliver world-class solutions
          </p>
        </div>

        {/* Companies */}
        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Logo */}
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} text-white items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="font-bold text-lg">{company.logo}</span>
                </div>
                
                {/* Company Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h3>
                
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{company.type}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{company.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;