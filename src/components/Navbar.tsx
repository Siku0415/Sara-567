import { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { LANGUAGES, LanguageCode, TRANSLATIONS } from '../translations';
import brandLogo from '../assets/images/icon_1780605440643.png';

interface NavbarProps {
  currentLang: LanguageCode;
  onLangChange: (lang: LanguageCode) => void;
  onScrollTo: (elementId: string) => void;
}

export default function Navbar({ currentLang, onLangChange, onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.navHome, id: 'hero' },
    { label: t.navRates, id: 'rates' },
    { label: t.navLive, id: 'availableGames' },
    { label: t.navWhyUs, id: 'features' },
    { label: t.navFaqs, id: 'faqs' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-red-200/50 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo & Brand, Styled in Light and Red */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-3 text-left focus:outline-none cursor-pointer group"
          >
            {/* Original Website Logo Image */}
            <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-neutral-200 shadow-sm group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shrink-0 bg-red-700">
              <img
                src={brandLogo}
                alt="Sara 567 Logo"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display text-2xl sm:text-2.5xl font-black bg-gradient-to-r from-neutral-900 via-red-700 to-red-650 bg-clip-text text-transparent tracking-tighter drop-shadow-xs">
                  SARA 567
                </span>
                <span className="bg-yellow-400 text-neutral-950 text-[8px] sm:text-[9px] font-black font-mono px-1 rounded-sm border border-yellow-500 shadow-xs">
                  ORIGINAL
                </span>
              </div>
              <span className="block text-[9px] font-extrabold text-red-650 tracking-wider font-mono -mt-1 uppercase">
                {t.heroSubtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center space-x-2">
            
            {/* Nav Menu */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-neutral-700 hover:text-red-600 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <div className="h-4 w-px bg-neutral-200 mx-2"></div>

            {/* Language Selector Dropdown */}
            <div className="relative flex items-center space-x-1 bg-neutral-100 hover:bg-neutral-200 transition-colors px-2.5 py-1.5 rounded-xl border border-neutral-200 select">
              <Globe className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value as LanguageCode)}
                className="bg-transparent text-xs font-bold text-neutral-700 outline-none cursor-pointer pr-1"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-neutral-800 bg-white">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Elegant Download button customized Red */}
            <a
              href="https://sara567.info/Sara%20567.apk"
              download
              referrerPolicy="no-referrer"
              className="ml-3 flex items-center space-x-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wide transition-all shadow-[0_4px_12px_rgba(220,38,38,0.2)] hover:shadow-[0_4px_18px_rgba(220,38,38,0.35)] hover:scale-[1.02] cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>{t.navDownload}</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Quick Mobile Language Select */}
            <div className="relative flex items-center space-x-1 bg-neutral-100 px-2.5 py-1.5 rounded-xl border border-neutral-200">
              <Globe className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value as LanguageCode)}
                className="bg-transparent text-xs font-bold text-neutral-700 outline-none cursor-pointer"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-neutral-800 bg-white">
                    {lang.code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-red-600 p-1.5 rounded-xl bg-neutral-100 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[68px] bg-white border-b border-neutral-200 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 h-auto' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-5 pt-4 pb-6 space-y-2 bg-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-neutral-800 hover:text-red-600 py-3 border-b border-neutral-100 text-base font-semibold transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <a
              href="https://sara567.info/Sara%20567.apk"
              download
              referrerPolicy="no-referrer"
              className="flex justify-center items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg text-sm tracking-wide"
            >
              <Download className="h-4 w-4" />
              <span>{t.navDownload}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
