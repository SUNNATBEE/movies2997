import React, { useState, useRef, useEffect } from "react";
import { TbWorld } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import rusSvg from "../../assets/rus.svg";
import uzSvg from "../../assets/uz.svg";
import engSvg from "../../assets/eng.svg";

const languages = [
  { code: "ru", label: "РУ", flag: rusSvg },
  { code: "uz", label: "UZ", flag: uzSvg },
  { code: "en", label: "EN", flag: engSvg },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("uz");
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
      >
        <TbWorld size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-3 w-40 bg-[#1a1a1a] border border-white/10 rounded-2xl p-2 shadow-2xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setCurrentLang(lang.code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition ${
                  currentLang === lang.code ? "bg-white/10 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                <img src={lang.flag} alt="" className="w-5 h-5 rounded-full" />
                <span className="text-sm font-bold">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;