"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MonitorSmartphone,
  Code2,
  ExternalLink,
  Briefcase,
  Users,
} from "lucide-react";
import { projectsData } from "../../../data/projects";

// Custom Github Icon SVG για να μην έχουμε θέμα με το lucide-react
const GithubIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const dict = {
  en: {
    back: "Back to Projects",
    notFound: "Project not found.",
    techStack: "Tech Stack",
    platforms: "Platforms",
    team: "Team",
    roles: "My Role",
    liveSite: "Live URL",
    visitBtn: "Visit Website",
    githubBtn: "Source Code",
  },
  el: {
    back: "Πίσω στα Projects",
    notFound: "Το project δεν βρέθηκε.",
    techStack: "Τεχνολογίες",
    platforms: "Πλατφόρμες",
    team: "Ομάδα",
    roles: "Ο Ρόλος μου",
    liveSite: "Σύνδεσμος",
    visitBtn: "Επίσκεψη",
    githubBtn: "Κώδικας",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [lang, setLang] = useState<"en" | "el">("en");
  const [mounted, setMounted] = useState(false);

  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("portfolio_lang") as "en" | "el";
    if (savedLang) setLang(savedLang);
  }, []);

  const changeLanguage = (newLang: "en" | "el") => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const project = projectsData.find((p) => p.id === id);

  const activeApp = project?.apps[activeAppIndex];

  const uniqueFeatures = useMemo(() => {
    if (!activeApp) return [];
    return activeApp.features.filter(
      (feature, index, self) =>
        index === self.findIndex((f) => f.mediaUrl === feature.mediaUrl),
    );
  }, [activeApp]);

  if (!mounted) return null;

  const t = dict[lang];

  if (!project || !activeApp) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-2xl">
        {t.notFound}
      </div>
    );
  }

  const activeFeature =
    activeApp.features[activeFeatureIndex] || activeApp.features[0];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-black selection:text-white">
      {/* 1. HEADER */}
      <header className="w-full border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/projects"
            className="flex items-center gap-2 font-bold text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={20} /> {t.back}
          </Link>
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
        </div>
      </header>

      {/* 2. PROJECT HERO (Τίτλος, ρόλοι, Badges και URL) */}
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-500 max-w-3xl mb-10 leading-relaxed">
          {project.shortDescription[lang]}
        </p>

        <div className="flex flex-wrap gap-10 border-t border-zinc-200/60 pt-8">
          {/* TEAM / CONTRIBUTORS */}
          <div>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Users size={16} /> {t.team}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.team.map((member) => (
                <span
                  key={member}
                  className="bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-md text-sm font-semibold"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>

          {/* ROLES */}
          <div>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Briefcase size={16} /> {t.roles}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.roles.map((r) => (
                <span
                  key={r.en}
                  className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-md text-sm font-semibold"
                >
                  {r[lang]}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <MonitorSmartphone size={16} /> {t.platforms}
            </p>
            <div className="flex gap-2">
              {project.platforms.map((p) => (
                <span
                  key={p}
                  className="bg-white border border-zinc-200 px-3 py-1 rounded-md text-sm font-semibold"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code2 size={16} /> {t.techStack}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-black text-white px-3 py-1 rounded-md text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LIVE URL BUTTON */}
          {project.liveUrl && (
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ExternalLink size={16} /> {t.liveSite}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-200 rounded-lg text-sm font-bold transition-colors"
              >
                {t.visitBtn} <ExternalLink size={14} />
              </a>
            </div>
          )}

          {/* GITHUB BUTTON */}
          {project.githubUrl && (
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <GithubIcon size={16} /> Repository
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-900 rounded-lg text-sm font-bold transition-colors shadow-sm"
              >
                <GithubIcon size={14} /> {t.githubBtn}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* 3. APP TABS & STICKY SCROLL SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 pb-32">
        {/* TABS ΕΠΙΛΟΓΗΣ ΕΦΑΡΜΟΓΗΣ */}
        {project.apps.length > 1 && (
          <div className="flex gap-6 border-b border-zinc-200 mb-12 overflow-x-auto pb-2">
            {project.apps.map((app, index) => (
              <button
                key={app.id}
                onClick={() => {
                  setActiveAppIndex(index);
                  setActiveFeatureIndex(0);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className={`text-xl font-bold pb-4 border-b-4 transition-colors whitespace-nowrap ${
                  activeAppIndex === index
                    ? "border-black text-black"
                    : "border-transparent text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {app.title[lang]}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 relative items-start">
          {/* ΑΡΙΣΤΕΡΗ ΣΤΗΛΗ: Κείμενα */}
          <div className="w-full lg:w-[35%] space-y-[60vh] py-[10vh] pr-4">
            {activeApp.features.map((feature, index) => (
              <motion.div
                key={`${activeApp.id}-${index}`}
                onViewportEnter={() => setActiveFeatureIndex(index)}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                className={`transition-all duration-500 ${activeFeatureIndex === index ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  {feature.title[lang]}
                </h3>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  {feature.description[lang]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ΔΕΞΙΑ ΣΤΗΛΗ: Sticky Media */}
          <div className="w-full lg:w-[65%] sticky top-24 h-[80vh] bg-white rounded-3xl border border-zinc-200/60 overflow-hidden shadow-2xl relative">
            <div className="h-10 bg-zinc-100 border-b border-zinc-200/60 flex items-center px-4 gap-2 absolute top-0 w-full z-20">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>

            <div className="absolute top-10 bottom-0 left-0 right-0 bg-zinc-50 z-10">
              {uniqueFeatures.map((uniqueFeature) => {
                const isActive =
                  activeFeature.mediaUrl === uniqueFeature.mediaUrl;

                return (
                  <motion.div
                    key={uniqueFeature.mediaUrl}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 w-full h-full ${isActive ? "pointer-events-auto z-10" : "pointer-events-none z-0"}`}
                  >
                    {uniqueFeature.type === "iframe" ? (
                      <iframe
                        src={uniqueFeature.mediaUrl}
                        className="w-full h-full border-none bg-white"
                        title={uniqueFeature.title.en}
                      />
                    ) : (
                      <img
                        src={uniqueFeature.mediaUrl}
                        alt={uniqueFeature.title.en}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
