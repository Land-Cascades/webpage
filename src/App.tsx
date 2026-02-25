import React, { useState } from 'react';
import {
  Home as HomeIcon,
  Calendar,
  BookOpen,
  Menu,
  ArrowLeft,
  Share2,
  MapPin,
  GraduationCap,
  Globe,
  Network,
  Activity,
  ShieldAlert,
  Microscope,
  Mountain,
  FileText,
  Video,
  Droplets,
  Building2,
  Mail,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import atuelImg from './assets/images/atuel.jpg';
import edierImg from './assets/images/edier.png';
import bayaImg from './assets/images/baya.jpg';
import lagoImg from './assets/images/lago.png';
import sosneadoImg from './assets/images/sosneado.png';
import inquaLogoImg from './assets/images/inqua_logo.png';

// --- i18n Dictionary ---
const dict = {
  es: {
    network: 'Red de Investigación Internacional',
    heroTitle: 'LAND-CASCADES',
    heroDesc: 'Landslide Dynamics and Cascading Hazards in the Andes',
    courseAnnouncement: 'Anuncio de Curso Especializado',
    courseTitle: 'Presas de Deslizamiento y Amenazas en Cascada',
    courseDateLoc: 'Del 1 al 4 de diciembre de 2026 en Mendoza, Argentina.',
    courseTarget: 'Dirigido a doctorandos y jóvenes investigadores. Incluye conferencias y trabajo de campo en la cordillera de los Andes.',
    academic: 'Académico',
    field: 'Campo',
    researchAxes: 'Ejes de Investigación',
    axis1: 'Amenazas de origen Geológico',
    axis1Desc: 'Evaluación de amenazas y dinámica de laderas.',
    axis2: 'Flujos de Escombros',
    axis2Desc: 'Dinámica y mitigación de flujos torrenciales.',
    axis3: 'Gestión de Riesgos',
    axis3Desc: 'Protocolos de mitigación y resiliencia.',
    axis4: 'GLOF',
    axis4Desc: 'Inundaciones por desborde de lagos glaciares (Glacial Lake Outburst Floods).',
    fundedBy: 'Financiado por',
    coordinatorsTitle: 'Coordinadores de la Red',
    membersTitle: 'Miembros de la Red',
    home: 'Inicio',
    course: 'Curso',
    networkTab: 'La Red',
    resources: 'Recursos',
    // Network Section
    networkTitle: 'La Red',
    networkDesc1: 'La Red Internacional de Investigación LAND-CASCADES esta enfocada en el avance del entendimiento global y la resiliencia frente a las amenazas por deslizamientos y fenómenos concatenadas en la cordillera de los Andes.',
    networkDesc2: 'La red logra esto a través de investigación interdisciplinaria, intercambio de datos y desarrollo de capacidades, promoviendo la excelencia científica en el estudio del deslizamientos y la dinámica amenazas en cadena. LAND-CASCADES facilitará una colaboración internacional en geociencias, hidrología, ingeniería y gestión del riesgo de desastres.',
    networkDesc3: 'El objetivo general de LAND-CASCADES es establecer un marco transfronterizo integral para comprender y mitigar una de las amenazas naturales más complejas y destructivas en regiones montañosas. Este ambicioso proyecto busca unificar investigadores y profesionales a nivel mundial, fomentando la colaboración y el intercambio de conocimientos para avanzar en nuestra comprensión y capacidad de respuesta ante deslizamientos en estos entornos.',
    networkDesc4: 'Esta base sólida facilitará la estandarización de metodologías para la evaluación de amenazas, monitoreo y modelación de deslizamiento en una variedad de terrenos y contextos climáticos de los Andes. El intercambio de conocimientos entre instituciones académicas, agencias gubernamentales y comunidades locales permitirá mejorar la preparación y respuesta de las comunidades de montaña vulnerables, ayudando a reducir el impacto de las amenazas naturales.',

    // Course Section - Intro
    courseSectionTitle: 'El Curso',
    courseIntro: 'La Formación Científica y Técnica LAND-CASCADES sobre Lagos Represados por Deslizamientos está planeada para llevarse a cabo durante diciembre de 2026 en Mendoza, Argentina.',
    courseDurationTitle: 'Duración y Formato',
    courseLength: 'Duración: 4 días',
    courseFormat: 'Formato: Híbrido (módulos presenciales + virtuales) incluyendo un seminario de formación y una excursión de campo',
    courseLocation: 'Ubicación: Universidad Nacional de Cuyo, Mendoza, Argentina',
    courseFieldTrip: 'Salida de campo: A lo largo de los sitios del Río Mendoza-Aconcagua cerca de paleo-deslizamientos, deslizamientos activos, lagos represados y depósitos de inundación por desembalse.',

    // Course Section - Activities
    courseActivitiesTitle: 'Plan de Actividades',
    courseActivitiesIntro: 'Este taller incluirá un curso de capacitación durante 1-2 días para estudiantes de doctorado e investigadores jóvenes (ECRs), y una salida de campo a través de los Andes desde Mendoza (Argentina) hasta Los Andes (Chile).',
    courseSeminarsTitle: 'Contenido teórico',
    courseDay1Title: 'Primer día',
    courseDay1Morning: 'Mañana - Fundamentos y Contexto Global',
    courseDay1MorningItems: [
      'Introducción a procesos de deslizamiento y mecanismos de represamiento',
      'Tipos de represamiento',
      'Casos de estudio históricos',
      'Distribución global e importancia',
      'Discusión grupal: vulnerabilidades regionales'
    ],
    courseDay1Afternoon: 'Tarde - Aspectos Geotécnicos e Hidrológicos',
    courseDay1AfternoonItems: [
      'Estabilidad de laderas y mecánica de fallas',
      'Transporte de sedimentos y dinámica del embalse',
      'Modelamiento hidrológico de la formación de lagos',
      'Tipos de ruptura de presas',
      'Práctica: Índices de estabilidad de presas'
    ],
    courseDay2Title: 'Segundo día',
    courseDay2Morning: 'Mañana - Sensores Remotos y Aplicaciones SIG',
    courseDay2MorningItems: [
      'Interpretación de imágenes satelitales (ej. Sentinel, Landsat)',
      'Análisis de DEM y estimación de volumen de la presa',
      'Mapeo de amenazas basado en SIG',
      'Sesión de laboratorio: mapeo de un lago represado real'
    ],
    courseDay2Afternoon: 'Tarde - Evaluación de Riesgos y Modelación de Rupturas',
    courseDay2AfternoonItems: [
      'Escenarios de ruptura de presa y tránsito de crecientes',
      'Uso de HEC-RAS, FLO-2D o herramientas similares',
      'Análisis de vulnerabilidad y exposición',
      'Práctica: simular un evento de inundación por desembalse'
    ],
    courseFieldTitle: 'Salida de Campo',
    courseFieldValley1: 'Valle del Río Mendoza (Argentina)',
    courseFieldValley2: 'Valle del Río Las Cuevas (Argentina)',
    courseFieldValley3: 'Valle del Río Aconcagua (Chile)',
    courseFieldValley4: 'Valle del Río Blanco (Argentina)',
    courseFieldReturn: 'Retorno a Mendoza',
    courseDescTitle: 'Descripción del Curso',
    courseDesc: 'Este programa intensivo aborda la dinámica compleja de las presas generadas por deslizamientos y los peligros en cascada asociados. Los participantes explorarán metodologías innovadoras para la evaluación de riesgos, integrando estudios de caso globales y herramientas prácticas de modelado.',
    courseTags: ['Innovación', 'Casos Reales', 'Modelado 3D', 'SIG'],
    targetAudience: 'Diseñado específicamente para estudiantes de doctorado e investigadores jóvenes en geociencias, ingeniería civil y gestión de desastres.',
    academicProgram: 'Programa Académico',
    prog1: 'Conferencias Magistrales',
    prog1Desc: 'Fundamentos teóricos y dinámicas de flujos.',
    prog2: 'Discusiones Interactivas',
    prog2Desc: 'Análisis de riesgos y toma de decisiones en tiempo real.',
    prog3: 'Trabajo de Campo In Situ',
    prog3Desc: 'Visita técnica a depósitos de deslizamientos en la Cordillera de los Andes.',
    dates: 'Fechas',
    location: 'Ubicación',
    inquaDesc: 'Promoviendo la investigación del Cuaternario a nivel mundial.',
    comingSoon: 'Próximamente',
    downloadSyllabus: 'Descargar Temario',
    resource1: 'Material de Lectura',
    resource1Desc: 'Artículos y bibliografía recomendada',
    resource2: 'Videos y Webinars',
    resource2Desc: 'Grabaciones de sesiones anteriores',
    resource3: 'Resultados de Investigación',
    resource3Desc: 'Publicaciones de la red LAND-CASCADES',
    courseDate: '1-4 Dic, 2026',
    specialized: 'Curso 2026'
  },
  en: {
    network: 'International Research Network',
    heroTitle: 'LAND-CASCADES',
    heroDesc: 'Landslide Dynamics and Cascading Hazards in the Andes',
    courseAnnouncement: 'Specialized Course Announcement',
    courseTitle: 'Landslide Dams and Cascading Hazards',
    courseDateLoc: 'From December 1 to 4, 2026 in Mendoza, Argentina.',
    courseTarget: 'Aimed at PhD students and young researchers. Includes lectures and fieldwork in the Andes mountain range.',
    academic: 'Academic',
    field: 'Fieldwork',
    researchAxes: 'Research Axes',
    axis1: 'Geological-Origin Hazards',
    axis1Desc: 'Hazard assessment and slope dynamics.',
    axis2: 'Debris Flow',
    axis2Desc: 'Dynamics and mitigation of debris flows.',
    axis3: 'Risk Management',
    axis3Desc: 'Mitigation protocols and resilience.',
    axis4: 'GLOF',
    axis4Desc: 'Glacial Lake Outburst Floods.',
    fundedBy: 'Funded by',
    coordinatorsTitle: 'Network Coordinators',
    membersTitle: 'Network Members',
    home: 'Home',
    course: 'Course',
    networkTab: 'Network',
    resources: 'Resources',
    // Network Section
    networkTitle: 'The Network',
    networkDesc1: 'The LAND-CASCADES International Research Network will focus on advancing global understanding and resilience to landslide dam hazards, with a primary emphasis on the Andes mountain range.',
    networkDesc2: 'The network achieves this through interdisciplinary research, data exchange, and capacity building, promoting scientific excellence in the study of natural landslide-induced damming and outburst flood dynamics. LAND-CASCADES will facilitate international collaboration across geosciences, hydrology, engineering, and disaster risk management.',
    networkDesc3: 'The overall objective of LAND-CASCADES is to establish a comprehensive cross-border framework to understand and mitigate one of the most complex and destructive natural hazards in mountainous regions. This ambitious project seeks to unify researchers and professionals globally, fostering collaboration and knowledge exchange to advance our understanding and response capabilities to landslides in these environments.',
    networkDesc4: 'This solid foundation will facilitate the standardization of methodologies for hazard assessment, monitoring, and breach modeling across a variety of terrains and climatic contexts. Knowledge exchange among academic institutions, government agencies, and local communities will improve the preparedness and response of vulnerable mountain communities, helping to reduce the impact of natural hazards.',

    // Course Section - Intro
    courseSectionTitle: 'The Course',
    courseIntro: 'The LAND-CASCADES Scientific and Technical Training on Landslide Dammed Lakes is planned to take place during November 2026 in Mendoza, Argentina.',
    courseDurationTitle: 'Duration and Format',
    courseLength: 'Duration: 4 days',
    courseFormat: 'Format: Hybrid (in-person + virtual modules) including a training seminar and a field excursion',
    courseLocation: 'Location: National University of Cuyo, Mendoza, Argentina',
    courseFieldTrip: 'Field trip: Along the Mendoza-Aconcagua River sites near paleo-landslides, active landslides, dammed lakes, and outburst flood deposits.',

    // Course Section - Activities
    courseActivitiesTitle: 'Activity Plan',
    courseActivitiesIntro: 'This workshop will include a 1-2 day training course for PhD students and early career researchers (ECRs), and a field trip across the Andes from Mendoza (Argentina) to Los Andes (Chile).',
    courseSeminarsTitle: 'Training course seminars',
    courseDay1Title: 'Day One',
    courseDay1Morning: 'Morning - Fundamentals and Global Context',
    courseDay1MorningItems: [
      'Introduction to landslide processes and damming mechanisms',
      'Types of damming',
      'Historical case studies',
      'Global distribution and importance',
      'Group discussion: regional vulnerabilities'
    ],
    courseDay1Afternoon: 'Afternoon - Geotechnical and Hydrological Aspects',
    courseDay1AfternoonItems: [
      'Slope stability and failure mechanics',
      'Sediment transport and reservoir dynamics',
      'Hydrological modeling of lake formation',
      'Types of dam breach',
      'Practice: Dam stability indices'
    ],
    courseDay2Title: 'Day Two',
    courseDay2Morning: 'Morning - Remote Sensing and GIS Applications',
    courseDay2MorningItems: [
      'Satellite image interpretation (e.g., Sentinel, Landsat)',
      'DEM analysis and dam volume estimation',
      'GIS-based hazard mapping',
      'Lab session: mapping a real dammed lake'
    ],
    courseDay2Afternoon: 'Afternoon - Risk Assessment and Breach Modeling',
    courseDay2AfternoonItems: [
      'Dam breach scenarios and flood wave propagation',
      'Use of HEC-RAS, FLO-2D, or similar tools',
      'Vulnerability and exposure analysis',
      'Practice: simulate an outburst flood event'
    ],
    courseFieldTitle: 'Field Trip',
    courseFieldValley1: 'Mendoza River Valley (Argentina)',
    courseFieldValley2: 'Las Cuevas River Valley (Argentina)',
    courseFieldValley3: 'Aconcagua River Valley (Chile)',
    courseFieldValley4: 'Blanco River Valley (Argentina)',
    courseFieldReturn: 'Return to Mendoza',
    courseDescTitle: 'Course Description',
    courseDesc: 'This intensive program addresses the complex dynamics of landslide dams and associated cascading hazards. Participants will explore innovative risk assessment methodologies, integrating global case studies and practical modeling tools.',
    courseTags: ['Innovation', 'Real Cases', '3D Modeling', 'GIS'],
    targetAudience: 'Designed specifically for PhD students and young researchers in geosciences, civil engineering, and disaster management.',
    academicProgram: 'Academic Program',
    prog1: 'Keynote Lectures',
    prog1Desc: 'Theoretical foundations and flow dynamics.',
    prog2: 'Interactive Discussions',
    prog2Desc: 'Risk analysis and real-time decision making.',
    prog3: 'On-site Fieldwork',
    prog3Desc: 'Technical visit to landslide deposits in the Andes Mountains.',
    dates: 'Dates',
    location: 'Location',
    inquaDesc: 'Promoting Quaternary research worldwide.',
    comingSoon: 'Coming Soon',
    downloadSyllabus: 'Download Syllabus',
    resource1: 'Reading Material',
    resource1Desc: 'Articles and recommended bibliography',
    resource2: 'Videos and Webinars',
    resource2Desc: 'Recordings of previous sessions',
    resource3: 'Research Results',
    resource3Desc: 'Publications from the LAND-CASCADES network',
    courseDate: 'Dec 1-4, 2026',
    specialized: 'Course 2026'
  }
};

const coordinatorsData = [
  {
    name: 'Stella Moreiras',
    institute: 'IANIGLA, CONICET / Universidad Nacional de Cuyo',
    country: 'Argentina',
    email: 'moreiras@mendoza-conicet.gob.ar',
    domain: 'conicet.gov.ar',
    photoUrl: 'https://aacg.ar/wp-content/uploads/2023/04/Stella-Moreiras.jpg'
  },
  {
    name: 'Sergio Sepúlveda',
    institute: 'Simon Fraser University, Department of Earth Sciences',
    country: 'Canada',
    email: 'ssepulve@sfu.ca',
    domain: 'sfu.ca',
    photoUrl: 'https://i1.rgstatic.net/ii/profile.image/11431281174672908-1689284526723_Q512/Sergio-Sepulveda.jpg'
  },
  {
    name: 'Edier Aristizábal',
    institute: 'Universidad Nacional de Colombia sede Medellín',
    country: 'Colombia',
    email: 'evaristizabalg@unal.edu.co',
    domain: 'unal.edu.co',
    photoUrl: edierImg
  }
];

const membersData = [
  { name: 'Pilar Jeanneret', institute: 'CONICET IANIGLA', country: 'Argentina', domain: 'conicet.gov.ar' },
  { name: 'Edwin García', institute: 'Universidad de Antioquia', country: 'Colombia', domain: 'udea.edu.co' },
  { name: 'Camilo Zapata', institute: 'Instituto de Investigacion Geologico y Energetico / University of Bristol', country: 'Ecuador / UK', domain: 'bristol.ac.uk' },
  { name: 'Felipe Ugalde', institute: 'Universidad de Chile', country: 'Chile', domain: 'uchile.cl' },
  { name: 'Alejandra Serey', institute: 'Universidad de O’Higgins', country: 'Chile', domain: 'uoh.cl' },
  { name: 'Johnny Vega', institute: 'University of Medellín', country: 'Colombia', domain: 'udem.edu.co' },
  { name: 'Daniel Ruiz', institute: 'EAFIT', country: 'Colombia', domain: 'eafit.edu.co' },
  { name: 'George Fernandez Azevedo', institute: 'Universidade Federal do Maranhao', country: 'Brazil', domain: 'ufma.br' },
  { name: 'Newton Moreira de Souza', institute: 'Universidad de Brasilia', country: 'Brazil', domain: 'unb.br' },
  { name: 'Willem Viveen', institute: 'Pontificia Universidad Catolica Del Perú', country: 'Perú', domain: 'pucp.edu.pe' },
  { name: 'Jorge Sanjurjo Sánchez', institute: 'Universidad de Coruña', country: 'Spain', domain: 'udc.es' },
  { name: 'Luigi Lombardo', institute: 'University of Twente', country: 'The Netherlands', domain: 'utwente.nl' },
  { name: 'Sandra Lucia Cobos Mora', institute: 'Universidad Católica de Cuenca', country: 'Ecuador', domain: 'ucacue.edu.ec' },
  { name: 'Adam Emmer', institute: 'University of Charles', country: 'Czechia', domain: 'cuni.cz' },
  { name: 'Jan Klimes', institute: 'IRSM CAS', country: 'Czechia', domain: 'irsm.cas.cz' },
  { name: 'Martin Mergili', institute: 'BOKU', country: 'Austria', domain: 'boku.ac.at' },
  { name: 'Carlo Tacconi Stefanelli', institute: 'University of Florence', country: 'Italy', domain: 'unifi.it' },
  { name: 'Gustavo Villarosa', institute: 'CONICET, Universidad de Comahue', country: 'Argentina', domain: 'uncoma.edu.ar' },
  { name: 'Debora Beigt', institute: 'CONICET, Universidad de Comahue', country: 'Argentina', domain: 'uncoma.edu.ar' },
  { name: 'Agustin Quesada', institute: 'CONICET, Universidad de Comahue', country: 'Argentina', domain: 'uncoma.edu.ar' },
  { name: 'Bruno Colavitto', institute: 'CIMA Research Foundation', country: 'Italy', domain: 'cimafoundation.org' },
  { name: 'Laura Perucca', institute: 'Universidad Nacional de San Juan', country: 'Argentina', domain: 'unsj.edu.ar' },
  { name: 'Romina Oronato', institute: 'Universidad Nacional de San Juan, CONICET', country: 'Argentina', domain: 'unsj.edu.ar' },
  { name: 'Agustina Reato', institute: 'CONICET – CIEMEP– UNPSJB', country: 'Argentina', domain: 'unp.edu.ar' },
  { name: 'Lorena Percudani', institute: 'CONICET – CIEMEP– UNPSJB', country: 'Argentina', domain: 'unp.edu.ar' },
  { name: 'Angel Salas Colca', institute: 'INAIGEM', country: 'Peru', domain: 'inaigem.gob.pe' },
  { name: 'Juan Carlos Torres Lázaro', institute: 'INAIGEM', country: 'Peru', domain: 'inaigem.gob.pe' },
  { name: 'Diego Winocur', institute: 'University of Buenos Aires, CONICET', country: 'Argentina', domain: 'uba.ar' },
  { name: 'Daniela Schmidt', institute: 'University of Buenos Aires, CONICET', country: 'Argentina', domain: 'uba.ar' },
  { name: 'Nicholas Robert', institute: 'Department of State Growth', country: 'Tasmania, Australia', domain: 'stategrowth.tas.gov.au' },
  { name: 'Juan Federico Ponce', institute: 'CADIC, CONICET', country: 'Argentina', domain: 'cadic.conicet.gov.ar' },
  { name: 'Alejandro Montes', institute: 'Universidad Nacional de Tierra del Fuego', country: 'Argentina', domain: 'untdf.edu.ar' },
  { name: 'Maria Isabel Arango', institute: 'U. Potsdam', country: 'Colombia', domain: 'uni-potsdam.de' },
  { name: 'Natalia Ríos', institute: 'Universidad Nacional de Sn Juan', country: 'Argentina', domain: 'unsj.edu.ar' },
  { name: 'Carla Ginesta Torcivia', institute: 'Universidad Nacional de Sn Juan', country: 'Argentina', domain: 'unsj.edu.ar' },
  { name: 'Dr. Anja Dufresne', institute: 'RWTH Aachen University', country: 'Netherland', domain: 'rwth-aachen.de' },
  { name: 'Andrea Wolter', institute: 'Earth Sciences', country: 'New Zealand', domain: '' }
];

type Lang = 'es' | 'en';

// --- Shared Components ---
const Navbar = ({ onMenuClick, showBack, onBack, lang, setLang }: { onMenuClick?: () => void, showBack?: boolean, onBack?: () => void, lang: Lang, setLang: (l: Lang) => void }) => (
  <nav className="sticky top-0 z-50 flex items-center justify-between p-4 nav-blur border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
    <div className="flex items-center gap-3">
      {showBack ? (
        <button onClick={onBack} className="p-2 text-primary hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <Mountain className="text-primary" size={24} />
          <div className="flex flex-col">
            <h2 className="text-sm font-black leading-none tracking-tight uppercase">LAND-CASCADES</h2>
            <span className="text-[8px] text-slate-400 font-medium uppercase">{dict[lang].fundedBy} <a href="https://inqua.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">INQUA</a></span>
          </div>
        </div>
      )}
    </div>

    {showBack && (
      <h2 className="text-sm font-bold tracking-tight uppercase absolute left-1/2 -translate-x-1/2 hidden sm:block">LAND-CASCADES</h2>
    )}

    <div className="flex items-center gap-4">
      {!showBack && (
        <a href="https://inqua.org/" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center bg-white/5 px-2 py-1 rounded border border-white/10 hover:bg-white/10 transition-colors">
          <img src={inquaLogoImg} alt="INQUA" className="h-6 object-contain" />
        </a>
      )}

      {/* Botón Selector de Idioma Moderno */}
      <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
        <button
          onClick={() => setLang('es')}
          className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'es' ? 'bg-primary text-white shadow-md scale-105' : 'text-slate-400 hover:text-slate-200'
            }`}
        >
          ES
        </button>
        <button
          onClick={() => setLang('en')}
          className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-primary text-white shadow-md scale-105' : 'text-slate-400 hover:text-slate-200'
            }`}
        >
          EN
        </button>
      </div>

      {showBack ? (
        <button className="p-2 text-primary hover:bg-white/10 rounded-full transition-colors hidden sm:block">
          <Share2 size={20} />
        </button>
      ) : (
        <button onClick={onMenuClick} className="p-2 text-white hover:bg-white/10 rounded-full transition-colors hidden">
          <Menu size={24} />
        </button>
      )}
    </div>
  </nav>
);

const BottomNav = ({ activeTab, onTabChange, lang }: { activeTab: string, onTabChange: (tab: string) => void, lang: Lang }) => {
  const tabs = [
    { id: 'inicio', label: dict[lang].home, icon: HomeIcon },
    { id: 'curso', label: dict[lang].course, icon: Calendar },
    { id: 'red', label: dict[lang].networkTab, icon: Network },
    { id: 'recursos', label: dict[lang].resources, icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 pb-6 pt-3 bottom-nav-blur bg-background-dark/90 backdrop-blur-xl border-t border-white/10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex flex-col items-center gap-1.5 p-2 transition-all duration-300 w-full ${isActive ? 'text-primary scale-105' : 'text-slate-500 hover:text-slate-300'
              }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/10 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <tab.icon className="relative z-10" size={22} strokeWidth={isActive ? 2.5 : 2} fill={isActive ? "currentColor" : "none"} />
            <span className="relative z-10 text-[10px] font-semibold">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// --- Pages ---
const HomePage = ({ onCourseClick, lang, key }: { onCourseClick: () => void, lang: Lang, key?: string }) => {
  const t = dict[lang];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col pb-28 min-h-[calc(100vh-64px)]"
    >
      {/* Hero */}
      <section className="relative min-h-[500px] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 15, 22, 0.3) 0%, rgba(10, 15, 22, 0.85) 100%), url(${sosneadoImg})`,
          }}
        />
        <div className="relative z-10 flex flex-col gap-6 max-w-3xl items-center mt-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full border border-blue-500/20 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-md"
          >
            <Globe size={14} />
            {t.network}
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-lg"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Announcement */}
      <section className="px-4 md:px-8 -mt-12 relative z-20">
        <motion.div
          whileHover={{ y: -5, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCourseClick}
          className="bg-background-light/90 backdrop-blur-xl border border-primary/30 rounded-3xl p-6 md:p-8 cursor-pointer shadow-2xl shadow-primary/10 overflow-hidden relative group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/20 rounded-xl text-primary shadow-inner">
                <Activity size={24} />
              </div>
              <h2 className="text-sm md:text-base font-bold tracking-widest text-primary uppercase">{t.courseAnnouncement}</h2>
            </div>
            <div className="hidden sm:flex bg-white/5 border border-white/10 rounded-full p-2 text-slate-400 group-hover:text-primary transition-colors">
              <ArrowLeft className="rotate-180" size={20} />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-black mb-4 text-white group-hover:text-primary transition-colors duration-300">
            {t.courseTitle}
          </h3>
          <p className="text-slate-300 text-base mb-6 max-w-2xl leading-relaxed">
            <span className="font-bold text-white block mb-1">{t.courseDateLoc}</span>
            {t.courseTarget}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <GraduationCap size={18} className="text-primary" />
              <span className="text-sm font-semibold text-white">{t.academic}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <Mountain size={18} className="text-primary" />
              <span className="text-sm font-semibold text-white">{t.field}</span>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

const CourseDetailPage = ({ lang, key }: { lang: Lang, key?: string }) => {
  const t = dict[lang];
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col pb-28 min-h-[calc(100vh-64px)]"
    >
      {/* Hero */}
      <section className="relative h-[400px] flex flex-col justify-end p-6 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 15, 22, 0.3) 0%, rgba(10, 15, 22, 0.85) 100%), url(${lagoImg})`,
          }}
        />
        <div className="relative z-10 flex flex-col gap-4 max-w-4xl mx-auto w-full">
          <span className="inline-flex self-start items-center rounded-full bg-primary px-4 py-1.5 text-xs font-black text-white uppercase tracking-widest shadow-lg shadow-primary/30">
            {t.specialized}
          </span>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-white drop-shadow-md">
            {t.courseTitle}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full">
        {/* Quick Info */}
        <section className="px-4 py-8 grid grid-cols-2 gap-4">
          <div className="bg-background-light p-6 rounded-3xl border border-white/5 flex flex-col gap-4 items-center text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Calendar size={28} />
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-1">{t.dates}</p>
              <p className="text-base font-bold text-white">{t.courseDate}</p>
            </div>
          </div>
          <div className="bg-background-light p-6 rounded-3xl border border-white/5 flex flex-col gap-4 items-center text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-1">{t.location}</p>
              <p className="text-base font-bold text-white">Mendoza, AR</p>
            </div>
          </div>
        </section>


        {/* Target Audience */}
        <section className="mx-6 my-8 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl border border-primary/20 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="bg-primary text-white w-14 h-14 shrink-0 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center">
            <GraduationCap size={28} />
          </div>
          <p className="text-slate-200 text-base leading-relaxed font-medium">
            {t.targetAudience}
          </p>
        </section>

        {/* Academic Program */}
        <section className="px-6 py-8">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            {t.academicProgram}
          </h3>
          <div className="space-y-6">
            {[
              { id: 1, title: t.prog1, desc: t.prog1Desc, icon: BookOpen },
              { id: 2, title: t.prog2, desc: t.prog2Desc, icon: Network },
              { id: 3, title: t.prog3, desc: t.prog3Desc, icon: Mountain },
            ].map((item) => (
              <div key={item.id} className="group bg-background-light p-5 rounded-2xl border border-white/5 flex gap-5 hover:border-primary/30 transition-all shadow-sm hover:shadow-primary/5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Course Intro */}
        <section className="px-6 py-8">
          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            {t.courseSectionTitle}
          </h3>
          <p className="text-slate-300 leading-relaxed text-base font-medium mb-8">
            {t.courseIntro}
          </p>

          {/* Main Course Details */}
          <div className="mb-16">
            <h3 className="text-3xl font-regular mb-6 text-white">{t.courseDurationTitle}</h3>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-white/10 space-y-4 text-slate-300 text-lg">
              <p><strong className="text-white">Duración / Length:</strong> {t.courseLength.split(': ')[1]}</p>
              <p><strong className="text-white">Formato / Format:</strong> {t.courseFormat.split(': ')[1]}</p>
              <p><strong className="text-white">Ubicación / Location:</strong> {t.courseLocation.split(': ')[1]}</p>
              <p><strong className="text-white">Salida de Campo / Field Trip:</strong> {t.courseFieldTrip.split(': ')[1]}</p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-light mb-6 text-white">{t.courseActivitiesTitle}</h2>
            <p className="text-xl text-slate-300">{t.courseActivitiesIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">{t.courseSeminarsTitle}</h3>

              <div className="mb-8">
                <h4 className="text-xl font-medium text-white mb-4 border-b border-slate-700 pb-2">{t.courseDay1Title}</h4>
                <div className="space-y-4">
                  <div>
                    <strong className="text-slate-400 block mb-2">{t.courseDay1Morning}</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      {t.courseDay1MorningItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-400 block mb-2">{t.courseDay1Afternoon}</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      {t.courseDay1AfternoonItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium text-white mb-4 border-b border-slate-700 pb-2">{t.courseDay2Title}</h4>
                <div className="space-y-4">
                  <div>
                    <strong className="text-slate-400 block mb-2">{t.courseDay2Morning}</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      {t.courseDay2MorningItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-400 block mb-2">{t.courseDay2Afternoon}</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      {t.courseDay2AfternoonItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-white/10 h-fit sticky top-24">
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">{t.courseFieldTitle}</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 font-bold mr-4 shrink-0">1</span>
                  <div className="text-slate-300 text-lg pt-1">{t.courseFieldValley1}</div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 font-bold mr-4 shrink-0">2</span>
                  <div className="text-slate-300 text-lg pt-1">{t.courseFieldValley2}</div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 font-bold mr-4 shrink-0">3</span>
                  <div className="text-slate-300 text-lg pt-1">{t.courseFieldValley3}</div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 font-bold mr-4 shrink-0">4</span>
                  <div className="text-slate-300 text-lg pt-1">{t.courseFieldValley4}</div>
                </li>
                <li className="flex items-start border-t border-slate-700 pt-6 mt-6">
                  <div className="text-white font-medium text-lg text-center w-full">{t.courseFieldReturn}</div>
                </li>
              </ul>
            </div>
          </div>

        </section>

        {/* Download Action */}
        <section className="px-6 pb-12 pt-4">
          <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-xl shadow-primary/20 active:scale-[0.98]">
            <Download size={24} />
            {t.downloadSyllabus}
          </button>
        </section>
      </div>
    </motion.div>
  );
};

const RedPage = ({ lang, key }: { lang: Lang, key?: string }) => {
  const t = dict[lang];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col pb-28 min-h-[calc(100vh-64px)] max-w-4xl mx-auto w-full pt-6"
    >
      {/* Research Axes */}
      <section className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-2">
              <Network size={16} />
              LAND-CASCADES
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white mb-2">{t.researchAxes}</h2>
            <p className="text-slate-400">{t.network}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: ShieldAlert, title: t.axis1, desc: t.axis1Desc, color: "from-red-500/20 to-orange-500/5 text-red-500" },
            { icon: Mountain, title: t.axis2, desc: t.axis2Desc, color: "from-yellow-500/20 to-orange-500/5 text-yellow-500" },
            { icon: Activity, title: t.axis3, desc: t.axis3Desc, color: "from-emerald-500/20 to-green-500/5 text-emerald-400" },
            { icon: Droplets, title: t.axis4, desc: t.axis4Desc, color: "from-cyan-500/20 to-blue-500/5 text-cyan-400" },
          ].map((axis, i) => (
            <div key={i} className="bg-background-light p-6 rounded-3xl border border-white/5 flex flex-col gap-4 shadow-lg hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${axis.color} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-background/50 backdrop-blur-sm border border-white/10 relative z-10 ${axis.color.split(' ').pop()}`}>
                <axis.icon size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="font-black text-xl text-white mb-2">{axis.title}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{axis.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Network Description */}
      <section className="p-6">
        <h2 className="text-3xl font-black tracking-tight text-white mb-6">{t.networkTitle}</h2>
        <div className="prose prose-invert max-w-none prose-lg text-slate-300">
          <p className="mb-6">{t.networkDesc1}</p>
          <p className="mb-6">{t.networkDesc2}</p>
          <p className="mb-6">{t.networkDesc3}</p>
          <p>{t.networkDesc4}</p>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="p-6">
        <h2 className="text-3xl font-black tracking-tight text-white mb-8">{t.coordinatorsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordinatorsData.map((coord, i) => (
            <div key={i} className="bg-background-light p-6 rounded-3xl border border-white/10 hover:border-primary/50 transition-all shadow-2xl group relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-32 h-32 rounded-full mb-6 border-4 border-white/5 overflow-hidden relative z-10 group-hover:border-primary/50 transition-colors">
                <img
                  src={coord.photoUrl}
                  alt={coord.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{coord.name}</h3>
              <div className="h-1 w-12 bg-primary rounded-full mb-4 relative z-10" />

              <span className="text-sm text-slate-300 mb-4 flex-grow relative z-10 font-medium">
                {coord.institute}
              </span>

              <div className="flex flex-col gap-2 w-full mt-auto relative z-10">
                <span className="text-xs text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                  <MapPin size={14} className="text-slate-500" />
                  {coord.country}
                </span>
                <a href={`mailto:${coord.email}`} className="text-xs text-primary hover:text-white flex items-center justify-center gap-1.5 font-medium transition-colors">
                  <Mail size={14} />
                  {coord.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section className="p-6 pt-12">
        <h2 className="text-3xl font-black tracking-tight text-white mb-8">{t.membersTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {membersData.map((member, i) => (
            <div key={i} className="bg-background-light p-4 rounded-3xl border border-white/5 flex items-center gap-4 hover:border-primary/30 hover:bg-white/5 transition-all shadow-lg group">
              <div className="w-16 h-16 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 relative">
                {member.domain ? (
                  <>
                    <img
                      src={`https://logo.clearbit.com/${member.domain}`}
                      alt={member.institute}
                      className="w-10 h-10 object-contain relative z-10 transition-transform group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.classList.remove('hidden');
                        }
                      }}
                    />
                    <Building2 className="text-slate-500 w-8 h-8 hidden absolute z-0" />
                  </>
                ) : (
                  <Building2 className="text-slate-500 w-8 h-8 transition-transform group-hover:scale-110" />
                )}
              </div>
              <div className="flex flex-col overflow-hidden w-full">
                <span className="font-bold text-white text-base truncate" title={member.name}>{member.name}</span>
                <span className="text-xs text-primary font-medium truncate mt-0.5" title={member.institute}>
                  {member.domain ? (
                    <a href={`https://${member.domain}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{member.institute}</a>
                  ) : (
                    member.institute
                  )}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-2 font-medium truncate">
                  <MapPin size={12} className="text-slate-500" />
                  {member.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Sponsors */}
      <section className="p-12 text-center mt-auto">
        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">{t.fundedBy}</p>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 inline-flex flex-col items-center shadow-2xl backdrop-blur-md">
            <a href="https://inqua.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
              <img src={inquaLogoImg} alt="INQUA Logo" className="h-16 object-contain opacity-90 rounded-full" />
            </a>
            <div className="h-1.5 w-16 bg-primary rounded-full mt-4 mb-4" />
            <span className="text-xs text-slate-400 font-medium max-w-[200px] leading-relaxed">
              {t.inquaDesc}
            </span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const RecursosPage = ({ lang, key }: { lang: Lang, key?: string }) => {
  const t = dict[lang];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col pb-28 min-h-[calc(100vh-64px)] max-w-4xl mx-auto w-full pt-6 p-6"
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-2">
          <BookOpen size={16} />
          {t.resources}
        </div>
        <h2 className="text-3xl font-black tracking-tight text-white">{t.resources}</h2>
      </div>

      <div className="space-y-4">
        {[
          { title: t.resource1, desc: t.resource1Desc, icon: FileText },
          { title: t.resource2, desc: t.resource2Desc, icon: Video },
          { title: t.resource3, desc: t.resource3Desc, icon: Activity },
        ].map((item, i) => (
          <div key={i} className="bg-background-light border border-white/5 p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
              </div>
            </div>
            <div className="bg-white/5 text-xs text-slate-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {t.comingSoon}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [lang, setLang] = useState<Lang>('es');

  const renderPage = () => {
    switch (activeTab) {
      case 'curso':
        return <CourseDetailPage key="curso" lang={lang} />;
      case 'red':
        return <RedPage key="red" lang={lang} />;
      case 'recursos':
        return <RecursosPage key="recursos" lang={lang} />;
      case 'inicio':
      default:
        return <HomePage key="inicio" onCourseClick={() => setActiveTab('curso')} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f16] text-slate-200 overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar
        showBack={activeTab !== 'inicio'}
        onBack={() => setActiveTab('inicio')}
        onMenuClick={() => console.log('Menu clicked')}
        lang={lang}
        setLang={setLang}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        lang={lang}
      />
    </div>
  );
}
