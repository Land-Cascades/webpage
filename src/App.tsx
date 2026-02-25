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
  Download,
  FileText,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import atuelImg from './assets/images/atuel.jpg';
import bayaImg from './assets/images/baya.jpg';
import lagoImg from './assets/images/lago.png';
import sosneadoImg from './assets/images/sosneado.png';

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
    axis2: 'Cooperación',
    axis2Desc: 'Sinergias entre instituciones globales.',
    axis3: 'Gestión de Riesgos',
    axis3Desc: 'Protocolos de mitigación y resiliencia.',
    axis4: 'Investigación',
    axis4Desc: 'Generación de conocimiento científico superior.',
    fundedBy: 'Financiado por',
    home: 'Inicio',
    course: 'Curso',
    networkTab: 'La Red',
    resources: 'Recursos',
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
    axis2: 'Cooperation',
    axis2Desc: 'Synergies between global institutions.',
    axis3: 'Risk Management',
    axis3Desc: 'Mitigation protocols and resilience.',
    axis4: 'Research',
    axis4Desc: 'Generation of superior scientific knowledge.',
    fundedBy: 'Funded by',
    home: 'Home',
    course: 'Course',
    networkTab: 'Network',
    resources: 'Resources',
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
            <span className="text-[8px] text-slate-400 font-medium uppercase">{dict[lang].fundedBy} INQUA</span>
          </div>
        </div>
      )}
    </div>

    {showBack && (
      <h2 className="text-sm font-bold tracking-tight uppercase absolute left-1/2 -translate-x-1/2 hidden sm:block">LAND-CASCADES</h2>
    )}

    <div className="flex items-center gap-4">
      {!showBack && (
        <div className="hidden sm:flex items-center bg-white/5 px-2 py-1 rounded border border-white/10">
          <span className="text-[10px] font-black text-primary tracking-tighter">INQUA</span>
        </div>
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
            className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-bold px-5 py-2 rounded-full border border-primary/30 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(255,87,34,0.3)]"
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
            backgroundImage: `linear-gradient(0deg, rgba(10, 15, 22, 0.95) 0%, rgba(10, 15, 22, 0.3) 60%, rgba(10, 15, 22, 0) 100%), url(${lagoImg})`,
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

        {/* Description */}
        <section className="px-6 py-4 space-y-6">
          <h3 className="text-2xl font-black text-white flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            {t.courseDescTitle}
          </h3>
          <p className="text-slate-300 leading-relaxed text-base font-medium">
            {t.courseDesc}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {t.courseTags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 text-slate-200 text-xs font-bold rounded-xl border border-white/10 shadow-sm">
                {tag}
              </span>
            ))}
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
            { icon: Globe, title: t.axis2, desc: t.axis2Desc, color: "from-blue-500/20 to-cyan-500/5 text-blue-400" },
            { icon: Activity, title: t.axis3, desc: t.axis3Desc, color: "from-emerald-500/20 to-green-500/5 text-emerald-400" },
            { icon: Microscope, title: t.axis4, desc: t.axis4Desc, color: "from-purple-500/20 to-pink-500/5 text-purple-400" },
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

      {/* Footer Sponsors */}
      <section className="p-12 text-center mt-auto">
        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">{t.fundedBy}</p>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 inline-flex flex-col items-center shadow-2xl backdrop-blur-md">
            <span className="text-white font-black text-4xl tracking-tighter mix-blend-screen">INQUA</span>
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
