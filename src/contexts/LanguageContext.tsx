import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('sparknoma-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('sparknoma-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    header: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      training: "Training"
    },
    
    // Hero
    hero: {
      title: "Spark Your Digital",
      titleHighlight: "Transformation",
      subtitle: "We craft cutting-edge technology solutions powered by AWS cloud infrastructure and artificial intelligence to accelerate your business growth and digital innovation.",
      getStarted: "Get Started Today",
      viewWork: "View Our Portfolio",
      awsCertified: "AWS Certified",
      aiPowered: "AI Powered",
      customSolutions: "Custom Solutions"
    },
    
    // Services
    services: {
      title: "Our Expertise",
      subtitle: "We deliver comprehensive technology solutions that combine the power of cloud computing, artificial intelligence, and modern web development to transform your business operations.",
      
      awsCloud: {
        title: "AWS Cloud Architecture",
        description: "Enterprise-grade cloud infrastructure design, seamless migration, and performance optimization using Amazon Web Services for scalable, secure, and cost-effective digital transformation.",
        features: ["Cloud Migration Strategy", "Infrastructure as Code", "Auto-Scaling Solutions", "Cost Optimization"]
      },
      
      aiMl: {
        title: "AI & Machine Learning",
        description: "Intelligent automation solutions powered by cutting-edge artificial intelligence and machine learning algorithms to streamline operations and unlock valuable business insights.",
        features: ["Custom AI Models", "Predictive Analytics", "Process Automation", "Data Intelligence"]
      },
      
      webDev: {
        title: "Modern Web Development",
        description: "High-performance, responsive web applications built with the latest technologies and frameworks, delivering exceptional user experiences across all devices.",
        features: ["Responsive Design", "Performance Optimization", "SEO Excellence", "Modern Frameworks"]
      },
      
      customSoftware: {
        title: "Custom Software Solutions",
        description: "Bespoke software applications designed and developed specifically for your unique business requirements with scalable architecture and maintainable code.",
        features: ["Tailored Development", "API Integration", "Scalable Architecture", "Ongoing Support"]
      },
      
      dataSolutions: {
        title: "Data Analytics & BI",
        description: "Comprehensive data management, advanced analytics, and business intelligence solutions to transform raw data into actionable insights for strategic decision-making.",
        features: ["Data Warehousing", "Real-time Analytics", "Interactive Dashboards", "Business Intelligence"]
      },
      
      security: {
        title: "Cybersecurity & Compliance",
        description: "Robust security frameworks and compliance solutions to safeguard your digital assets, protect sensitive data, and meet industry regulatory standards.",
        features: ["Security Assessments", "Compliance Management", "Data Protection", "Risk Mitigation"]
      }
    },

    // Training Programs
    training: {
      badge: "On-Demand Training",
      title: "Professional Training Programs",
      subtitle: "Accelerate your team's expertise with our comprehensive, hands-on training programs designed by industry experts. Available on-demand to fit your schedule and business needs.",
      curriculum: "What You'll Learn",
      enrollNow: "Enroll Now",
      
      features: {
        flexible: {
          title: "Flexible Scheduling",
          description: "Train on your timeline with customizable schedules"
        },
        expert: {
          title: "Expert Instructors",
          description: "Learn from certified professionals with real-world experience"
        },
        certification: {
          title: "Industry Certifications",
          description: "Prepare for official certifications and career advancement"
        },
        handson: {
          title: "Hands-On Labs",
          description: "Practice with real projects and live environments"
        }
      },

      cloudTraining: {
        title: "AWS Cloud Training",
        description: "Master cloud computing with comprehensive AWS training covering architecture, services, and best practices for modern infrastructure management.",
        features: ["AWS Core Services", "Cloud Architecture Design", "Security & Compliance", "Cost Optimization", "Hands-on Labs", "Certification Preparation"],
        duration: "4-6 Weeks",
        level: "Beginner to Advanced"
      },

      kubernetesTraining: {
        title: "Kubernetes Training",
        description: "Become proficient in container orchestration with expert-led Kubernetes training covering deployment, scaling, and production management.",
        features: ["Container Fundamentals", "Cluster Management", "Deployment Strategies", "Service Mesh", "Monitoring & Logging", "Production Best Practices"],
        duration: "3-4 Weeks",
        level: "Intermediate to Advanced"
      },

      devopsTraining: {
        title: "DevOps Training",
        description: "Transform your development workflow with comprehensive DevOps training covering automation, CI/CD, and collaborative practices.",
        features: ["CI/CD Pipeline Design", "Infrastructure as Code", "Monitoring & Alerting", "Security Integration", "Team Collaboration", "Agile Methodologies"],
        duration: "5-6 Weeks",
        level: "Beginner to Advanced"
      },

      cta: {
        title: "Ready to Upskill Your Team?",
        description: "Join hundreds of professionals who have advanced their careers with our expert-led training programs. Start your learning journey today.",
        schedule: "Schedule Consultation",
        learnMore: "Learn More"
      }
    },
    
    // About
    about: {
      title: "About Sparknoma",
      description1: "At Sparknoma, we are passionate about harnessing the transformative power of technology to drive business success. We specialize in creating innovative, scalable solutions that leverage cutting-edge cloud computing and artificial intelligence to help organizations thrive in today's digital landscape.",
      description2: "Our diverse team of expert developers, certified cloud architects, and AI specialists collaborate to deliver world-class solutions that not only meet the highest technical standards but also align perfectly with your strategic business objectives and growth aspirations.",
      
      stats: {
        projectsCompleted: "Projects Delivered",
        happyClients: "Satisfied Clients",
        yearsExperience: "Years of Excellence",
        clientSatisfaction: "Success Rate"
      },
      
      values: {
        missionDriven: {
          title: "Mission-Driven Excellence",
          description: "We are committed to delivering technology solutions that create tangible business value, drive meaningful outcomes, and contribute to your long-term success."
        },
        innovationFirst: {
          title: "Innovation Leadership",
          description: "We stay at the forefront of emerging technologies, ensuring our clients benefit from the latest innovations in cloud computing, AI, and digital transformation."
        },
        clientFocused: {
          title: "Client-Centric Approach",
          description: "Your success is our ultimate priority. We work as your trusted technology partner, understanding your unique challenges and delivering tailored solutions."
        },
        excellence: {
          title: "Uncompromising Quality",
          description: "We maintain the highest standards of excellence in every aspect of our work, from code quality and security to customer service and project delivery."
        }
      }
    },
    
    // Contact
    contact: {
      title: "Let's Build Something Amazing Together",
      subtitle: "Ready to transform your business with innovative technology solutions? Connect with our experts today and let's discuss how we can accelerate your digital journey.",
      getInTouch: "Get In Touch",
      email: "Email",
      phone: "Phone",
      location: "Location",
      remote: "Global Remote Services",
      
      form: {
        name: "Full Name",
        subject: "Project Subject",
        message: "Tell us about your project",
        sendMessage: "Send Message"
      },
      
      whyChoose: {
        title: "Why Partner with Sparknoma?",
        expertArchitects: "Certified AWS cloud architects",
        cuttingEdgeAI: "Advanced AI & ML expertise",
        rapidDevelopment: "Agile development methodology",
        support247: "Comprehensive support & maintenance"
      }
    },
    
    // Footer
    footer: {
      description: "Empowering businesses worldwide through innovative cloud computing and artificial intelligence solutions.",
      company: "Company",
      training: "Training Programs",
      technologies: "Technologies",
      amazonWebServices: "Amazon Web Services",
      copyright: "2025 Sparknoma. All rights reserved. Crafted with innovation and excellence.",
      privacyPolicy: "Privacy Policy"
    }
  },
  
  fr: {
    // Header
    header: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      training: "Formation"
    },
    
    // Hero
    hero: {
      title: "Déclenchez votre",
      titleHighlight: "Transformation Numérique",
      subtitle: "Nous concevons des solutions technologiques de pointe alimentées par l'infrastructure cloud AWS et l'intelligence artificielle pour accélérer la croissance et l'innovation numérique de votre entreprise.",
      getStarted: "Commencer Maintenant",
      viewWork: "Voir Notre Portfolio",
      awsCertified: "Certifié AWS",
      aiPowered: "Alimenté par l'IA",
      customSolutions: "Solutions Sur Mesure"
    },
    
    // Services
    services: {
      title: "Notre Expertise",
      subtitle: "Nous proposons des solutions technologiques complètes qui combinent la puissance du cloud computing, de l'intelligence artificielle et du développement web moderne pour transformer vos opérations commerciales.",
      
      awsCloud: {
        title: "Architecture Cloud AWS",
        description: "Conception d'infrastructure cloud de niveau entreprise, migration transparente et optimisation des performances utilisant Amazon Web Services pour une transformation numérique évolutive, sécurisée et rentable.",
        features: ["Stratégie de Migration Cloud", "Infrastructure as Code", "Solutions d'Auto-Scaling", "Optimisation des Coûts"]
      },
      
      aiMl: {
        title: "IA et Apprentissage Automatique",
        description: "Solutions d'automatisation intelligente alimentées par des algorithmes d'intelligence artificielle et d'apprentissage automatique de pointe pour rationaliser les opérations et débloquer des insights commerciaux précieux.",
        features: ["Modèles IA Personnalisés", "Analyse Prédictive", "Automatisation des Processus", "Intelligence des Données"]
      },
      
      webDev: {
        title: "Développement Web Moderne",
        description: "Applications web haute performance et réactives construites avec les dernières technologies et frameworks, offrant des expériences utilisateur exceptionnelles sur tous les appareils.",
        features: ["Design Réactif", "Optimisation des Performances", "Excellence SEO", "Frameworks Modernes"]
      },
      
      customSoftware: {
        title: "Solutions Logicielles Sur Mesure",
        description: "Applications logicielles personnalisées conçues et développées spécifiquement pour vos exigences commerciales uniques avec une architecture évolutive et un code maintenable.",
        features: ["Développement Personnalisé", "Intégration API", "Architecture Évolutive", "Support Continu"]
      },
      
      dataSolutions: {
        title: "Analyse de Données et BI",
        description: "Solutions complètes de gestion des données, d'analyse avancée et d'intelligence d'affaires pour transformer les données brutes en insights exploitables pour la prise de décision stratégique.",
        features: ["Entrepôt de Données", "Analyse en Temps Réel", "Tableaux de Bord Interactifs", "Intelligence d'Affaires"]
      },
      
      security: {
        title: "Cybersécurité et Conformité",
        description: "Cadres de sécurité robustes et solutions de conformité pour protéger vos actifs numériques, sécuriser les données sensibles et respecter les normes réglementaires de l'industrie.",
        features: ["Évaluations de Sécurité", "Gestion de la Conformité", "Protection des Données", "Atténuation des Risques"]
      }
    },

    // Training Programs
    training: {
      badge: "Formation à la Demande",
      title: "Programmes de Formation Professionnelle",
      subtitle: "Accélérez l'expertise de votre équipe avec nos programmes de formation complets et pratiques conçus par des experts de l'industrie. Disponibles à la demande pour s'adapter à votre emploi du temps et aux besoins de votre entreprise.",
      curriculum: "Ce que Vous Apprendrez",
      enrollNow: "S'inscrire Maintenant",
      
      features: {
        flexible: {
          title: "Horaires Flexibles",
          description: "Formez-vous selon votre calendrier avec des horaires personnalisables"
        },
        expert: {
          title: "Instructeurs Experts",
          description: "Apprenez de professionnels certifiés avec une expérience du monde réel"
        },
        certification: {
          title: "Certifications Industrielles",
          description: "Préparez-vous aux certifications officielles et à l'avancement de carrière"
        },
        handson: {
          title: "Laboratoires Pratiques",
          description: "Pratiquez avec de vrais projets et des environnements en direct"
        }
      },

      cloudTraining: {
        title: "Formation AWS Cloud",
        description: "Maîtrisez le cloud computing avec une formation AWS complète couvrant l'architecture, les services et les meilleures pratiques pour la gestion d'infrastructure moderne.",
        features: ["Services AWS Essentiels", "Conception d'Architecture Cloud", "Sécurité et Conformité", "Optimisation des Coûts", "Laboratoires Pratiques", "Préparation Certification"],
        duration: "4-6 Semaines",
        level: "Débutant à Avancé"
      },

      kubernetesTraining: {
        title: "Formation Kubernetes",
        description: "Devenez compétent en orchestration de conteneurs avec une formation Kubernetes dirigée par des experts couvrant le déploiement, la mise à l'échelle et la gestion de production.",
        features: ["Fondamentaux des Conteneurs", "Gestion de Clusters", "Stratégies de Déploiement", "Service Mesh", "Surveillance et Journalisation", "Meilleures Pratiques Production"],
        duration: "3-4 Semaines",
        level: "Intermédiaire à Avancé"
      },

      devopsTraining: {
        title: "Formation DevOps",
        description: "Transformez votre flux de développement avec une formation DevOps complète couvrant l'automatisation, CI/CD et les pratiques collaboratives.",
        features: ["Conception Pipeline CI/CD", "Infrastructure as Code", "Surveillance et Alertes", "Intégration Sécurité", "Collaboration d'Équipe", "Méthodologies Agiles"],
        duration: "5-6 Semaines",
        level: "Débutant à Avancé"
      },

      cta: {
        title: "Prêt à Améliorer les Compétences de Votre Équipe?",
        description: "Rejoignez des centaines de professionnels qui ont fait progresser leur carrière avec nos programmes de formation dirigés par des experts. Commencez votre parcours d'apprentissage aujourd'hui.",
        schedule: "Planifier une Consultation",
        learnMore: "En Savoir Plus"
      }
    },
    
    // About
    about: {
      title: "À propos de Sparknoma",
      description1: "Chez Sparknoma, nous sommes passionnés par l'exploitation du pouvoir transformateur de la technologie pour stimuler le succès commercial. Nous nous spécialisons dans la création de solutions innovantes et évolutives qui exploitent le cloud computing de pointe et l'intelligence artificielle pour aider les organisations à prospérer dans le paysage numérique d'aujourd'hui.",
      description2: "Notre équipe diversifiée de développeurs experts, d'architectes cloud certifiés et de spécialistes en IA collaborent pour livrer des solutions de classe mondiale qui non seulement répondent aux plus hauts standards techniques mais s'alignent aussi parfaitement avec vos objectifs commerciaux stratégiques et vos aspirations de croissance.",
      
      stats: {
        projectsCompleted: "Projets Livrés",
        happyClients: "Clients Satisfaits",
        yearsExperience: "Années d'Excellence",
        clientSatisfaction: "Taux de Réussite"
      },
      
      values: {
        missionDriven: {
          title: "Excellence Axée sur la Mission",
          description: "Nous nous engageons à livrer des solutions technologiques qui créent une valeur commerciale tangible, génèrent des résultats significatifs et contribuent à votre succès à long terme."
        },
        innovationFirst: {
          title: "Leadership en Innovation",
          description: "Nous restons à la pointe des technologies émergentes, garantissant que nos clients bénéficient des dernières innovations en cloud computing, IA et transformation numérique."
        },
        clientFocused: {
          title: "Approche Centrée Client",
          description: "Votre succès est notre priorité absolue. Nous travaillons comme votre partenaire technologique de confiance, comprenant vos défis uniques et livrant des solutions sur mesure."
        },
        excellence: {
          title: "Qualité Sans Compromis",
          description: "Nous maintenons les plus hauts standards d'excellence dans tous les aspects de notre travail, de la qualité du code et la sécurité au service client et à la livraison de projet."
        }
      }
    },
    
    // Contact
    contact: {
      title: "Construisons Quelque Chose d'Extraordinaire Ensemble",
      subtitle: "Prêt à transformer votre entreprise avec des solutions technologiques innovantes ? Connectez-vous avec nos experts aujourd'hui et discutons de la façon dont nous pouvons accélérer votre parcours numérique.",
      getInTouch: "Entrer en Contact",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      remote: "Services Mondiaux à Distance",
      
      form: {
        name: "Nom Complet",
        subject: "Sujet du Projet",
        message: "Parlez-nous de votre projet",
        sendMessage: "Envoyer le Message"
      },
      
      whyChoose: {
        title: "Pourquoi S'Associer avec Sparknoma ?",
        expertArchitects: "Architectes cloud AWS certifiés",
        cuttingEdgeAI: "Expertise avancée en IA et ML",
        rapidDevelopment: "Méthodologie de développement agile",
        support247: "Support et maintenance complets"
      }
    },
    
    // Footer
    footer: {
      description: "Autonomiser les entreprises du monde entier grâce à des solutions innovantes de cloud computing et d'intelligence artificielle.",
      company: "Entreprise",
      training: "Programmes de Formation",
      technologies: "Technologies",
      amazonWebServices: "Amazon Web Services",
      copyright: "2025 Sparknoma. Tous droits réservés. Conçu avec innovation et excellence.",
      privacyPolicy: "Politique de Confidentialité"
    }
  },
  
  ar: {
    // Header
    header: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      contact: "تواصل معنا",
      training: "التدريب"
    },
    
    // Hero
    hero: {
      title: "أشعل شرارة",
      titleHighlight: "التحول الرقمي",
      subtitle: "نحن نصمم حلول تقنية متطورة مدعومة بالبنية التحتية السحابية لـ AWS والذكاء الاصطناعي لتسريع نمو أعمالك والابتكار الرقمي.",
      getStarted: "ابدأ رحلتك اليوم",
      viewWork: "استعرض أعمالنا",
      awsCertified: "معتمد من AWS",
      aiPowered: "مدعوم بالذكاء الاصطناعي",
      customSolutions: "حلول مخصصة"
    },
    
    // Services
    services: {
      title: "خبراتنا المتخصصة",
      subtitle: "نقدم حلول تقنية شاملة تجمع بين قوة الحوسبة السحابية والذكاء الاصطناعي وتطوير الويب الحديث لتحويل عمليات أعمالك.",
      
      awsCloud: {
        title: "هندسة السحابة AWS",
        description: "تصميم بنية تحتية سحابية على مستوى المؤسسات، وهجرة سلسة، وتحسين الأداء باستخدام خدمات أمازون الويب للحصول على تحول رقمي قابل للتوسع وآمن وفعال من حيث التكلفة.",
        features: ["استراتيجية الهجرة السحابية", "البنية التحتية كرمز", "حلول التوسع التلقائي", "تحسين التكاليف"]
      },
      
      aiMl: {
        title: "الذكاء الاصطناعي والتعلم الآلي",
        description: "حلول أتمتة ذكية مدعومة بخوارزميات الذكاء الاصطناعي والتعلم الآلي المتطورة لتبسيط العمليات وإطلاق رؤى تجارية قيمة.",
        features: ["نماذج ذكاء اصطناعي مخصصة", "التحليل التنبؤي", "أتمتة العمليات", "ذكاء البيانات"]
      },
      
      webDev: {
        title: "تطوير الويب الحديث",
        description: "تطبيقات ويب عالية الأداء ومتجاوبة مبنية بأحدث التقنيات والأطر، تقدم تجارب مستخدم استثنائية عبر جميع الأجهزة.",
        features: ["تصميم متجاوب", "تحسين الأداء", "تميز في محركات البحث", "أطر عمل حديثة"]
      },
      
      customSoftware: {
        title: "حلول برمجية مخصصة",
        description: "تطبيقات برمجية مخصصة مصممة ومطورة خصيصاً لمتطلبات أعمالك الفريدة مع هندسة قابلة للتوسع وكود قابل للصيانة.",
        features: ["تطوير مخصص", "تكامل واجهات برمجة التطبيقات", "هندسة قابلة للتوسع", "دعم مستمر"]
      },
      
      dataSolutions: {
        title: "تحليل البيانات وذكاء الأعمال",
        description: "حلول شاملة لإدارة البيانات والتحليل المتقدم وذكاء الأعمال لتحويل البيانات الخام إلى رؤى قابلة للتنفيذ لاتخاذ القرارات الاستراتيجية.",
        features: ["مستودع البيانات", "التحليل في الوقت الفعلي", "لوحات تحكم تفاعلية", "ذكاء الأعمال"]
      },
      
      security: {
        title: "الأمن السيبراني والامتثال",
        description: "أطر أمان قوية وحلول امتثال لحماية أصولك الرقمية وتأمين البيانات الحساسة وتلبية المعايير التنظيمية للصناعة.",
        features: ["تقييمات الأمان", "إدارة الامتثال", "حماية البيانات", "تخفيف المخاطر"]
      }
    },

    // Training Programs
    training: {
      badge: "تدريب عند الطلب",
      title: "برامج التدريب المهنية",
      subtitle: "عزز خبرة فريقك مع برامج التدريب الشاملة والعملية المصممة من قبل خبراء الصناعة. متاحة عند الطلب لتناسب جدولك الزمني واحتياجات عملك.",
      curriculum: "ما ستتعلمه",
      enrollNow: "سجل الآن",
      
      features: {
        flexible: {
          title: "جدولة مرنة",
          description: "تدرب وفقاً لجدولك الزمني مع جداول قابلة للتخصيص"
        },
        expert: {
          title: "مدربون خبراء",
          description: "تعلم من محترفين معتمدين بخبرة عملية حقيقية"
        },
        certification: {
          title: "شهادات الصناعة",
          description: "استعد للشهادات الرسمية والتقدم المهني"
        },
        handson: {
          title: "مختبرات عملية",
          description: "مارس مع مشاريع حقيقية وبيئات مباشرة"
        }
      },

      cloudTraining: {
        title: "تدريب AWS السحابي",
        description: "أتقن الحوسبة السحابية مع تدريب AWS شامل يغطي الهندسة والخدمات وأفضل الممارسات لإدارة البنية التحتية الحديثة.",
        features: ["خدمات AWS الأساسية", "تصميم هندسة السحابة", "الأمان والامتثال", "تحسين التكاليف", "مختبرات عملية", "إعداد الشهادات"],
        duration: "4-6 أسابيع",
        level: "مبتدئ إلى متقدم"
      },

      kubernetesTraining: {
        title: "تدريب Kubernetes",
        description: "كن ماهراً في تنسيق الحاويات مع تدريب Kubernetes بقيادة خبراء يغطي النشر والتوسع وإدارة الإنتاج.",
        features: ["أساسيات الحاويات", "إدارة المجموعات", "استراتيجيات النشر", "شبكة الخدمات", "المراقبة والتسجيل", "أفضل ممارسات الإنتاج"],
        duration: "3-4 أسابيع",
        level: "متوسط إلى متقدم"
      },

      devopsTraining: {
        title: "تدريب DevOps",
        description: "حول سير عمل التطوير الخاص بك مع تدريب DevOps شامل يغطي الأتمتة وCI/CD والممارسات التعاونية.",
        features: ["تصميم خط أنابيب CI/CD", "البنية التحتية كرمز", "المراقبة والتنبيهات", "تكامل الأمان", "تعاون الفريق", "المنهجيات الرشيقة"],
        duration: "5-6 أسابيع",
        level: "مبتدئ إلى متقدم"
      },

      cta: {
        title: "مستعد لتطوير مهارات فريقك؟",
        description: "انضم إلى مئات المحترفين الذين طوروا مسيراتهم المهنية مع برامج التدريب بقيادة خبرائنا. ابدأ رحلة التعلم اليوم.",
        schedule: "جدولة استشارة",
        learnMore: "تعلم المزيد"
      }
    },
    
    // About
    about: {
      title: "حول سبارك نوما",
      description1: "في سبارك نوما، نحن متحمسون لاستغلال القوة التحويلية للتكنولوجيا لدفع النجاح التجاري. نحن متخصصون في إنشاء حلول مبتكرة وقابلة للتوسع تستفيد من الحوسبة السحابية المتطورة والذكاء الاصطناعي لمساعدة المؤسسات على الازدهار في المشهد الرقمي اليوم.",
      description2: "فريقنا المتنوع من المطورين الخبراء ومهندسي السحابة المعتمدين وأخصائيي الذكاء الاصطناعي يتعاونون لتقديم حلول عالمية المستوى لا تلبي فقط أعلى المعايير التقنية ولكن تتماشى أيضاً بشكل مثالي مع أهدافك التجارية الاستراتيجية وطموحات النمو.",
      
      stats: {
        projectsCompleted: "مشاريع منجزة",
        happyClients: "عملاء راضون",
        yearsExperience: "سنوات من التميز",
        clientSatisfaction: "معدل النجاح"
      },
      
      values: {
        missionDriven: {
          title: "التميز المدفوع بالمهمة",
          description: "نحن ملتزمون بتقديم حلول تقنية تخلق قيمة تجارية ملموسة وتحقق نتائج ذات معنى وتساهم في نجاحك طويل المدى."
        },
        innovationFirst: {
          title: "ريادة الابتكار",
          description: "نبقى في المقدمة من التقنيات الناشئة، مما يضمن استفادة عملائنا من أحدث الابتكارات في الحوسبة السحابية والذكاء الاصطناعي والتحول الرقمي."
        },
        clientFocused: {
          title: "نهج محوره العميل",
          description: "نجاحك هو أولويتنا المطلقة. نعمل كشريكك التقني الموثوق، نفهم تحدياتك الفريدة ونقدم حلول مصممة خصيصاً."
        },
        excellence: {
          title: "جودة بلا تنازلات",
          description: "نحافظ على أعلى معايير التميز في جميع جوانب عملنا، من جودة الكود والأمان إلى خدمة العملاء وتسليم المشاريع."
        }
      }
    },
    
    // Contact
    contact: {
      title: "لنبني شيئاً مذهلاً معاً",
      subtitle: "مستعد لتحويل أعمالك بحلول تقنية مبتكرة؟ تواصل مع خبرائنا اليوم ولنناقش كيف يمكننا تسريع رحلتك الرقمية.",
      getInTouch: "تواصل معنا",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      remote: "خدمات عالمية عن بُعد",
      
      form: {
        name: "الاسم الكامل",
        subject: "موضوع المشروع",
        message: "أخبرنا عن مشروعك",
        sendMessage: "إرسال الرسالة"
      },
      
      whyChoose: {
        title: "لماذا الشراكة مع سبارك نوما؟",
        expertArchitects: "مهندسو سحابة AWS معتمدون",
        cuttingEdgeAI: "خبرة متقدمة في الذكاء الاصطناعي والتعلم الآلي",
        rapidDevelopment: "منهجية تطوير رشيقة",
        support247: "دعم وصيانة شاملة"
      }
    },
    
    // Footer
    footer: {
      description: "تمكين الشركات في جميع أنحاء العالم من خلال حلول مبتكرة للحوسبة السحابية والذكاء الاصطناعي.",
      company: "الشركة",
      training: "برامج التدريب",
      technologies: "التقنيات",
      amazonWebServices: "خدمات أمازون الويب",
      copyright: "2025 سبارك نوما. جميع الحقوق محفوظة. صُنع بالابتكار والتميز.",
      privacyPolicy: "سياسة الخصوصية"
    }
  }
};