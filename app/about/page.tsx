"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  GraduationCap,
  Briefcase,
  LayoutTemplate,
  Code2,
  Cpu,
  Wrench,
  Award,
  Globe,
  Cloud,
} from "lucide-react";

// --- CUSTOM BRAND ICONS ---
const GithubIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FigmaIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
    <path d="M12 12.5a3.5 3.5 0 1 1 3.5-3.5H12v7z"></path>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
  </svg>
);
// --------------------------

// ΔΙΓΛΩΣΣΟ ΛΕΞΙΚΟ
const dict = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    title: "Thomas Chasiotis",
    subtitle: "Software & Electronics Engineering Student",
    location: "Thessaloniki, Greece",
    birthdate: "7 February 2005",
    eduTitle: "Education",
    eduHsTitle: "E. Mandoulides Educators",
    eduHsSubtitle: "Private High School, Thessaloniki",
    eduHsGrad: "Graduated 2023",
    eduHsGrade: "Diploma Grade: 19.5",
    eduUniTitle: "Informatics and Electronics Engineering",
    eduUniSubtitle: "International Hellenic University (IHU), Sindos",
    eduUniDate: "2023 - Present",
    eduUniStatus: "4th Year Student",
    expTitle: "Professional Experience",
    expZucSub: "Service & Operations",
    expZucDate: "Aug 2023 - Present",
    expZucB1: "Customer Service & Operations Management",
    expZucB2: "Cross-Team Collaboration",
    expZucB3: "Customer Relations & Conflict Resolution",
    techTitle: "Technical Arsenal",
    techApp: "App Development",
    techWeb: "Web Development",
    techSys: "Systems / Embedded",
    techBackend: "Backend & Cloud",
    techTools: "OS / Tools",
    langTitle: "Languages",
    langGr: "Greek",
    langGrLvl: "Native",
    langEn: "English",
    langEnLvl: "C2 (Michigan & MSU)",
    certTitle: "Certifications",
    certE4E: "Certificate of Attendance: E4E",
    certE4ESub: "Future Competencies for Engineers",
    certIT: "KeyCert IT Basic",
    certITSub: "Word Processing, Spreadsheets, Internet & Presentations",
    hwTitle: "Hardware & IT Support",
    hwDesc1:
      "Experienced in PC assembly (CPU, GPU, AIO Cooling, NVMe), hardware troubleshooting, and performance-per-price market research.",
    hwDesc2:
      "Proficient in Windows setups, data migration, and system backup solutions.",
  },
  el: {
    navHome: "Αρχική",
    navProjects: "Projects",
    navAbout: "Βιογραφικό",
    title: "Θωμάς Χασιώτης",
    subtitle: "Φοιτητής Μηχανικός Πληροφορικής & Ηλεκτρονικών Συστημάτων",
    location: "Θεσσαλονίκη, Ελλάδα",
    birthdate: "7 Φεβρουαρίου 2005",
    eduTitle: "Εκπαίδευση",
    eduHsTitle: "Εκπαιδευτήρια Ε. Μαντουλίδη",
    eduHsSubtitle: "Ιδιωτικό Λύκειο, Θεσσαλονίκη",
    eduHsGrad: "Αποφοιτηση 2023",
    eduHsGrade: "Βαθμός Απολυτηρίου: 19,5",
    eduUniTitle: "Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων",
    eduUniSubtitle: "Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ), Σίνδος",
    eduUniDate: "2023 - Σημερα",
    eduUniStatus: "Φοιτητής 4ου Έτους",
    expTitle: "Επαγγελματική Εμπειρία",
    expZucSub: "Εξυπηρέτηση & Λειτουργίες",
    expZucDate: "Αυγ 2023 - Σημερα",
    expZucB1: "Εξυπηρέτηση Πελατών & Διαχείριση Λειτουργιών",
    expZucB2: "Συνεργασία μεταξύ Ομάδων",
    expZucB3: "Δημόσιες Σχέσεις & Επίλυση Προβλημάτων",
    techTitle: "Τεχνικές Δεξιότητες",
    techApp: "Αναπτυξη Εφαρμογων",
    techWeb: "Αναπτυξη Ιστοτοπων",
    techSys: "Συστηματα / Ενσωματωμενα",
    techBackend: "Βασεις & Cloud",
    techTools: "Λειτουργικα & Εργαλεια",
    langTitle: "Ξένες Γλώσσες",
    langGr: "Ελληνικά",
    langGrLvl: "Μητρική",
    langEn: "Αγγλικά",
    langEnLvl: "C2 (Michigan & MSU)",
    certTitle: "Πιστοποιήσεις",
    certE4E: "Βεβαίωση Παρακολούθησης: E4E",
    certE4ESub: "Μελλοντικές Δεξιότητες για Μηχανικούς",
    certIT: "KeyCert IT Basic",
    certITSub:
      "Επεξεργασία Κειμένου, Υπολογιστικά Φύλλα, Διαδίκτυο & Παρουσιάσεις",
    hwTitle: "Υλικό & Υποστήριξη IT",
    hwDesc1:
      "Εμπειρία στη συναρμολόγηση PC (CPU, GPU, Υδρόψυξη, NVMe), διάγνωση βλαβών υλικού και έρευνα αγοράς απόδοσης-τιμής.",
    hwDesc2:
      "Καλή γνώση εγκαταστάσεων Windows, μεταφοράς δεδομένων και συστημάτων αντιγράφων ασφαλείας.",
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "el">("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio_lang") as "en" | "el";
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (newLang: "en" | "el") => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const t = dict[lang];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white pb-20">
      {/* 1. HEADER */}
      <header className="w-full border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-black text-xl tracking-tight hover:opacity-70 transition-opacity"
          >
            Thomas Chasiotis<span className="text-zinc-400">.</span>
          </Link>
          <nav className="flex items-center gap-8 font-medium text-sm">
            <div className="hidden md:flex gap-8">
              <Link
                href="/"
                className="text-zinc-500 hover:text-black transition-colors"
              >
                {t.navHome}
              </Link>
              <Link
                href="/projects"
                className="text-zinc-500 hover:text-black transition-colors"
              >
                {t.navProjects}
              </Link>
              <Link href="/about" className="text-black">
                {t.navAbout}
              </Link>
            </div>

            {/* Language Toggle */}
            <div className="flex bg-zinc-100 rounded-lg p-1 border border-zinc-200">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${lang === "en" ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("el")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${lang === "el" ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
              >
                EL
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-16 z-10 relative space-y-12">
        {/* 2. PROFILE & CONTACT HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200/60 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              {t.title}
            </h1>
            <p className="text-xl text-zinc-500 font-medium mb-6">
              {t.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-zinc-600 font-medium max-w-lg mt-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-zinc-400 shrink-0" />
                <span className="truncate">{t.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-zinc-400 shrink-0" />
                <span className="truncate">+30 6945509164</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-zinc-400 shrink-0" />
                <span className="truncate">thomaschasiotis05@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-zinc-400 shrink-0" />
                <span className="truncate">{t.birthdate}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 shrink-0">
            <a
              href="https://www.linkedin.com/in/thomas-chasiotis-71174a3a4/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-zinc-100 rounded-xl text-zinc-600 hover:bg-[#0A66C2] hover:text-white transition-colors"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href="https://github.com/TChasiotis/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-zinc-100 rounded-xl text-zinc-600 hover:bg-black hover:text-white transition-colors"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.figma.com/design/m8Oie4nZzldbHlCIcqA39V/Portfolio_Thomas_Chasiotis?node-id=0-1&p=f"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-zinc-100 rounded-xl text-zinc-600 hover:bg-[#F24E1E] hover:text-white transition-colors"
            >
              <FigmaIcon size={22} />
            </a>
          </div>
        </motion.div>

        {/* 3. TECHNICAL ARSENAL (Ολόκληρο πλάτος) */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-black text-white p-8 md:p-10 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <Code2 size={26} className="text-zinc-400" />
              <h2 className="text-2xl font-bold tracking-tight">
                {t.techTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WEB DEVELOPMENT */}
              <div>
                <h4 className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                  <LayoutTemplate size={14} /> {t.techWeb}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-sm font-medium border border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* APP DEVELOPMENT */}
              <div>
                <h4 className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                  <Code2 size={14} /> {t.techApp}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "React Native", "Java", "JavaFX"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-sm font-medium border border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* SYSTEMS / EMBEDDED */}
              <div>
                <h4 className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                  <Cpu size={14} /> {t.techSys}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["C", "CCS", "Assembly (MCU)"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-sm font-medium border border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACKEND & CLOUD */}
              <div>
                <h4 className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                  <Cloud size={14} /> {t.techBackend}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "PostgreSQL",
                    "Neon",
                    "Firestore",
                    "Vercel",
                    "Cloudflare",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-sm font-medium border border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* OS & TOOLS */}
              <div className="md:col-span-2">
                <h4 className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-3 flex items-center gap-2">
                  <Wrench size={14} /> {t.techTools}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Linux / Bash",
                    "Git / GitHub",
                    "VS Code",
                    "IntelliJ",
                    "Android Studio",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-800/80 rounded-lg text-sm font-medium border border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. EDUCATION */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={24} className="text-black" />
            <h2 className="text-2xl font-bold tracking-tight">{t.eduTitle}</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-zinc-200">
            {/* High School */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-zinc-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 ml-[-9px] md:ml-0"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm ml-4 md:ml-0 hover:border-zinc-300 transition-colors">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  {t.eduHsGrad}
                </div>
                <h3 className="font-bold text-lg leading-tight mb-2">
                  {t.eduHsTitle}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">{t.eduHsSubtitle}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-800">
                  {t.eduHsGrade}
                </span>
              </div>
            </div>

            {/* Undergrad */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 ml-[-9px] md:ml-0"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm ml-4 md:ml-0 hover:border-zinc-300 transition-colors">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  {t.eduUniDate}
                </div>
                <h3 className="font-bold text-lg leading-tight mb-2">
                  {t.eduUniTitle}
                </h3>
                <p className="text-zinc-500 text-sm mb-3">{t.eduUniSubtitle}</p>
                <p className="text-black text-sm font-bold bg-zinc-100 px-3 py-1 rounded-full inline-block">
                  {t.eduUniStatus}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. EXPERIENCE */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={24} className="text-black" />
            <h2 className="text-2xl font-bold tracking-tight">{t.expTitle}</h2>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:border-zinc-300 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div>
                <h3 className="font-bold text-xl mb-1">
                  Patisserie "Zucchero"
                </h3>
                <p className="text-zinc-500 font-medium">{t.expZucSub}</p>
              </div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-3 py-1.5 rounded-full inline-block">
                {t.expZucDate}
              </span>
            </div>
            <ul className="space-y-3 text-zinc-600 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-black text-lg mt-[-2px]">•</span>{" "}
                {t.expZucB1}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black text-lg mt-[-2px]">•</span>{" "}
                {t.expZucB2}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black text-lg mt-[-2px]">•</span>{" "}
                {t.expZucB3}
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 6. LANGUAGES, CERTS & HARDWARE (Grid for smaller info blocks) */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Languages */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={20} className="text-black" />
              <h3 className="font-bold text-xl">{t.langTitle}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="font-medium text-zinc-800">{t.langGr}</span>
                <span className="text-xs font-bold bg-zinc-100 px-3 py-1 rounded-full text-zinc-600">
                  {t.langGrLvl}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="font-medium text-zinc-800">{t.langEn}</span>
                <span className="text-xs font-bold bg-zinc-100 px-3 py-1 rounded-full text-zinc-600">
                  {t.langEnLvl}
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-black" />
              <h3 className="font-bold text-xl">{t.certTitle}</h3>
            </div>
            <ul className="space-y-4 text-zinc-800">
              <li className="font-bold">Figma: TChasiotis</li>
              <li className="font-bold">
                {t.certE4E} <br />
                <span className="text-zinc-500 font-medium text-sm mt-1 inline-block">
                  {t.certE4ESub}
                </span>
              </li>
              <li className="font-bold">
                {t.certIT} <br />
                <span className="text-zinc-500 font-medium text-sm mt-1 inline-block">
                  {t.certITSub}
                </span>
              </li>
            </ul>
          </div>

          {/* Hardware & IT Support (Full width on md screens) */}
          <div className="md:col-span-2 bg-zinc-100/80 p-8 rounded-3xl border border-zinc-200/60">
            <h4 className="font-bold text-lg text-zinc-800 mb-3 flex items-center gap-2">
              <Cpu size={20} /> {t.hwTitle}
            </h4>
            <p className="text-zinc-600 font-medium leading-relaxed mb-2">
              {t.hwDesc1}
            </p>
            <p className="text-zinc-600 font-medium leading-relaxed">
              {t.hwDesc2}
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
