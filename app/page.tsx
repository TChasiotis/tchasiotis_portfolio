"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Database,
  LayoutTemplate,
  Smartphone,
  Cloud,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

// ΔΙΓΛΩΣΣΟ ΛΕΞΙΚΟ ΑΡΧΙΚΗΣ
const dict = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    role: "Full-Stack Developer",
    heroPrefix: "High-Performance ",
    heroHighlight: "Web & Mobile",
    heroSuffix: " Development.",
    description:
      "Design, architecture, and development of scalable web applications, native mobile ecosystems, and automated business tools. Transforming complex business logic into seamless, high-performance user experiences.",
    btnProjects: "Explore Projects",
    btnCV: "View CV",
    techLabel: "Core Technologies",
  },
  el: {
    navHome: "Αρχική",
    navProjects: "Projects",
    navAbout: "Βιογραφικό",
    role: "Full-Stack Developer",
    heroPrefix: "High-Performance ",
    heroHighlight: "Web & Mobile",
    heroSuffix: " Development.",
    description:
      "Σχεδιασμός, αρχιτεκτονική και υλοποίηση κλιμακώσιμων web εφαρμογών, native mobile οικοσυστημάτων και αυτοματοποιημένων εργαλείων. Μετατροπή πολύπλοκης επιχειρησιακής λογικής σε άριστες εμπειρίες χρήστη.",
    btnProjects: "Προβολή Projects",
    btnCV: "Το Βιογραφικό μου",
    techLabel: "Βασικές Τεχνολογίες",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "el">("en");
  const [mounted, setMounted] = useState(false);

  // 1. Όταν φορτώνει η σελίδα, διαβάζουμε αν υπάρχει αποθηκευμένη γλώσσα
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio_lang") as "en" | "el";
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // 2. Συνάρτηση που αλλάζει τη γλώσσα ΚΑΙ την αποθηκεύει
  const changeLanguage = (newLang: "en" | "el") => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const t = dict[lang];

  // Αποτροπή hydration mismatch
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white flex flex-col relative overflow-hidden">
      {/* ΜΟΝΤΕΡΝΟ BACKGROUND */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

      {/* 1. HEADER (Με Language Toggle) */}
      <header className="w-full border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-xl tracking-tight">
            Thomas Chasiotis<span className="text-zinc-400">.</span>
          </div>
          <nav className="flex items-center gap-8 font-medium text-sm">
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-black transition-colors">
                {t.navHome}
              </Link>
              <Link
                href="/projects"
                className="text-zinc-500 hover:text-black transition-colors"
              >
                {t.navProjects}
              </Link>
              <Link
                href="/about"
                className="text-zinc-500 hover:text-black transition-colors"
              >
                {t.navAbout}
              </Link>
            </div>

            {/* Language Toggle */}
            <div className="flex bg-zinc-100 rounded-lg p-1 border border-zinc-200">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  lang === "en"
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("el")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  lang === "el"
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                EL
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 2. MAIN HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto z-10">
        {/* Animated Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-xs font-bold uppercase tracking-widest text-zinc-600 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {t.role}
        </motion.div>

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6">
            {t.heroPrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400">
              {t.heroHighlight}
            </span>{" "}
            <br />
            {t.heroSuffix}
          </h1>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed"
        >
          {t.description}
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link
            href="/projects"
            className="group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zinc-800 hover:shadow-2xl hover:shadow-black/20 transition-all hover:-translate-y-1"
          >
            {t.btnProjects}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 bg-white text-black border-2 border-zinc-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-black hover:bg-zinc-50 transition-all"
          >
            {t.btnCV}
          </Link>
        </motion.div>

        {/* Animated Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 w-full max-w-4xl"
        >
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">
            {t.techLabel}
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "React & Next.js", icon: LayoutTemplate },
              { name: "TypeScript", icon: Braces },
              { name: "PostgreSQL & Prisma", icon: Database },
              { name: "Kotlin & React Native", icon: Smartphone },
              { name: "Tailwind & Framer Motion", icon: Palette },
              { name: "Cloud & APIs", icon: Cloud },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all hover:-translate-y-1 cursor-default text-zinc-600 hover:text-black group"
              >
                <tech.icon
                  size={20}
                  className="group-hover:scale-110 group-hover:text-black transition-all"
                />
                <span className="font-semibold text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
