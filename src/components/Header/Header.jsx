import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { UserCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import SignUpButton from "./SignUpButton";
import logoSvg from "../../assets/Logo.svg";

const navItems = [
  { href: "/", label: "Bosh sahifa", key: "home" },
  { href: "/tv-channels", label: "TV Kanallar", key: "tv-channels" },
  { href: "/movies", label: "Filmlar", key: "movies" },
  { href: "/reels", label: "Reels", key: "reels" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const location = useLocation();
  const searchRef = useRef(null);

  const isActive = (href) => 
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  // Scroll effekt
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside search
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-4 
        ${isScrolled || isSearchOpen ? "bg-black/60 backdrop-blur-xl shadow-2xl" : "bg-transparent"}`}
      >
        <nav className="container mx-auto px-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          
          {/* LOGO */}
          <Link to="/" className="block">
            <img src={logoSvg} alt="Logo" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* DESKTOP MENU & SEARCH */}
          <div className="relative flex justify-center items-center">
            <ul className={`hidden lg:flex gap-10 uppercase text-[11px] tracking-widest font-bold transition-all duration-500
              ${isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"}`}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`pb-1 border-b-2 transition-all ${
                      isActive(item.href) ? "text-white border-red-600" : "text-white/70 border-transparent hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SEARCH INPUT (Desktop) */}
            <div
              ref={searchRef}
              className={`hidden lg:flex absolute right-0 bg-white items-center rounded-full transition-all duration-500 overflow-hidden
                ${isSearchOpen ? "w-full h-11 px-6 opacity-100" : "w-0 h-11 opacity-0 pointer-events-none"}`}
            >
              <IoSearch size={20} className="text-black/50" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qidiruv..."
                className="ml-3 w-full bg-transparent outline-none text-black font-medium text-sm"
              />
              <button onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}>
                <AiOutlineClose size={18} className="text-black" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {!isSearchOpen && (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <IoSearch size={22} />
              </button>
            )}

            <div className="hidden lg:block">
              <LanguageSelector />
            </div>

            <Link to="/login">
              <SignUpButton />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
            >
              <GiHamburgerMenu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0d0d0d] p-6 flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <img src={logoSvg} className="h-8" alt="Logo" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <AiOutlineClose size={24} className="text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold ${isActive(item.href) ? "text-red-600" : "text-white/60"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <LanguageSelector />
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <SignUpButton />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;