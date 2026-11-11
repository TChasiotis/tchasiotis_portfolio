"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, MonitorSmartphone } from "lucide-react";
import { projectsData } from "../../data/projects";

const dict = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    title: "My Projects",
    subtitle:
      "A collection of digital ecosystems, web applications, and mobile solutions.",
    filterAll: "All Platforms",
    sortNewest: "Newest First",
    sortOldest: "Oldest First",
    viewDetails: "View Ecosystem",
  },
  el: {
    navHome: "Αρχική",
    navProjects: "Projects",
    navAbout: "Βιογραφικό",
    title: "Τα Projects μου",
    subtitle:
      "Μια συλλογή από ψηφιακά οικοσυστήματα, web εφαρμογές και mobile λύσεις.",
    filterAll: "Όλες οι Πλατφόρμες",
    sortNewest: "Νεότερα Πρώτα",
    sortOldest: "Παλαιότερα Πρώτα",
    viewDetails: "Προβολή Οικοσυστήματος",
  },
};

export default function ProjectsPage() {
  const [lang, setLang] = useState<"en" | "el">("en");
  const [mounted, setMounted] = useState(false);

  // States για τα φίλτρα
  const [activePlatform, setActivePlatform] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio_lang") as "en" | "el";
    if (savedLang) setLang(savedLang);
  }, []);

  const changeLanguage = (newLang: "en" | "el") => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const t = dict[lang];

  // Εξαγωγή μοναδικών πλατφορμών (Web, Mobile κλπ) για τα κουμπιά των φίλτρων
  const allPlatforms = useMemo(() => {
    const platforms = new Set<string>();
    projectsData.forEach((p) =>
      p.platforms.forEach((plat) => platforms.add(plat)),
    );
    return ["All", ...Array.from(platforms)];
  }, []);

  // Φιλτράρισμα και Ταξινόμηση των Projects
  const filteredProjects = useMemo(() => {
    let result = [...projectsData];

    // Filter by platform
    if (activePlatform !== "All") {
      result = result.filter((p) => p.platforms.includes(activePlatform));
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.releaseDate).getTime();
      const dateB = new Date(b.releaseDate).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [activePlatform, sortOrder]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white pb-20">
      {/* HEADER (Ίδιο με τις άλλες σελίδες) */}
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
              <Link href="/projects" className="text-black">
                {t.navProjects}
              </Link>
              <Link
                href="/about"
                className="text-zinc-500 hover:text-black transition-colors"
              >
                {t.navAbout}
              </Link>
            </div>

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

      <main className="max-w-6xl mx-auto px-6 mt-16 z-10 relative">
        {/* HERO ΤΗΣ ΣΕΛΙΔΑΣ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl">{t.subtitle}</p>
        </motion.div>

        {/* CONTROLS (Φίλτρα & Sort) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 bg-white p-4 rounded-2xl border border-zinc-200/60 shadow-sm"
        >
          {/* Platforms Filter */}
          <div className="flex flex-wrap gap-2">
            {allPlatforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activePlatform === platform
                    ? "bg-black text-white shadow-md"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {platform === "All" ? t.filterAll : platform}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-xl border border-zinc-200">
            <Filter size={16} className="text-zinc-500" />
            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value as "newest" | "oldest")
              }
              className="bg-transparent text-sm font-semibold text-zinc-800 outline-none cursor-pointer"
            >
              <option value="newest">{t.sortNewest}</option>
              <option value="oldest">{t.sortOldest}</option>
            </select>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 bg-zinc-100 px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-600">
                    <MonitorSmartphone size={14} />
                    {project.platforms.join(" & ")}
                  </div>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100">
                    {project.releaseDate}
                  </span>
                </div>

                <h2 className="text-2xl font-black mb-3 text-zinc-900 group-hover:text-black transition-colors">
                  {project.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                  {project.shortDescription[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs font-semibold text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-zinc-950 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-zinc-800 transition-colors"
                >
                  {t.viewDetails} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
