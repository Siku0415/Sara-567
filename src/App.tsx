import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameRates from './components/GameRates';
import LiveMarkets from './components/LiveMarkets';
import BetCalculator from './components/BetCalculator';
import Features from './components/Features';
import FAQ from './components/FAQ';
import CustomerReviews from './components/CustomerReviews';
import WithdrawalTicker from './components/WithdrawalTicker';
import { Shield, MessageSquare, PhoneCall, ArrowUp, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TRANSLATIONS, LanguageCode } from './translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('hi'); // Defaulting beautifully to Hindi
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72; // height of sticky nav
      const offset = element.offsetTop - navHeight;
      window.scrollTo({
        top: offset >= 0 ? offset : 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-neutral-800 flex flex-col justify-between font-sans selection:bg-red-200 selection:text-neutral-900 scroll-smooth antialiased pb-20 md:pb-0">
      
      {/* Delicate red decorative header ambient detail */}
      <div className="absolute top-0 right-0 left-0 h-[600px] bg-gradient-to-b from-red-500/3 via-red-500/1 to-transparent pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <Hero
          currentLang={currentLang}
          onScrollToGames={() => handleScrollTo('availableGames')}
          onScrollToRates={() => handleScrollTo('rates')}
        />

        {/* GAME RATES SECTION */}
        <GameRates currentLang={currentLang} />

        {/* LIVE MARKETS SECTION */}
        <LiveMarkets currentLang={currentLang} />

        {/* CALCULATOR SECTION */}
        <BetCalculator currentLang={currentLang} />

        {/* FEATURES SECTION */}
        <Features currentLang={currentLang} />

        {/* PLAYER REVIEWS & CUSTOMER feedback */}
        <CustomerReviews currentLang={currentLang} />

        {/* COLLAPSIBLE FAQS SECTION */}
        <FAQ currentLang={currentLang} />
      </main>

      {/* Footer Section, Re-designed in Light & Red premium style */}
      <footer className="bg-neutral-50 border-t border-neutral-150 pt-16 pb-12 relative overflow-hidden">
        {/* Faint subtle grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="bg-gradient-to-tr from-red-600 to-rose-600 p-1.5 rounded-lg shadow-xs">
                  <span className="text-white text-xs font-black">S</span>
                </div>
                <span className="font-display text-xl font-black bg-gradient-to-r from-red-700 via-rose-600 to-red-650 bg-clip-text text-transparent">
                  SARA 567
                </span>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm font-semibold leading-relaxed max-w-sm">
                {t.footerTagline}
              </p>
              <div className="flex items-center space-x-2 text-red-700 font-mono text-[10px] font-bold">
                <Shield className="h-3.5 w-3.5 text-red-600" />
                <span>{t.footerSecurity}</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-wider font-mono mb-4">{t.footerSectionTitle}</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-neutral-500">
                <li>
                  <button onClick={() => handleScrollTo('hero')} className="hover:text-red-700 cursor-pointer transition-colors">
                    {t.navHome}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('rates')} className="hover:text-red-700 cursor-pointer transition-colors">
                    {t.navRates}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('availableGames')} className="hover:text-red-700 cursor-pointer transition-colors">
                    {t.navLive}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('why_choose_us')} className="hover:text-red-700 cursor-pointer transition-colors">
                    {t.navWhyUs}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo('faqs')} className="hover:text-red-700 cursor-pointer transition-colors">
                    {t.navFaqs}
                  </button>
                </li>
              </ul>
            </div>

            {/* Downloads & Help Support Column */}
            <div className="space-y-4">
              <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-wider font-mono">Mobile App</h4>
              
              <a
                href="https://sara567.info/Sara%20567.apk"
                download
                referrerPolicy="no-referrer"
                className="inline-flex w-full justify-center items-center space-x-2 bg-white border-2 border-neutral-200 hover:border-red-500/20 text-neutral-700 hover:text-red-700 px-4 py-3.5 rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4 text-red-650" />
                <span>Get Lightweight APK</span>
              </a>

              <div className="pt-2 text-[10px] text-neutral-400 font-bold font-mono space-y-1">
                <span className="block">Email: help@sara567.info</span>
                <span className="block">Status: 100% Secure & Active</span>
              </div>
            </div>

          </div>

          {/* Copyright lines */}
          <div className="pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold font-mono text-neutral-400 gap-4">
            <p>© 2026 Sara 567 Inc. All Rights Reserved. Powered by Antigravity Gaming Network.</p>
            
            <div className="flex space-x-4">
              <span className="hover:text-red-700 cursor-pointer">{t.footerTerms}</span>
              <span>•</span>
              <span className="hover:text-red-700 cursor-pointer">{t.footerPrivacy}</span>
            </div>
          </div>
        </div>

      </footer>

      {/* Fixed Sticky Call to Actions for Mobile responsiveness - Ultra Exciting Single Download Driver */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-950/95 backdrop-blur-lg border-t-2 border-amber-400 p-3.5 z-40 flex justify-center items-center shadow-[0_-8px_24px_rgba(245,158,11,0.25)]">
        <a
          href="https://sara567.info/Sara%20567.apk"
          download
          referrerPolicy="no-referrer"
          className="w-full flex justify-center items-center space-x-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-550 hover:to-rose-500 text-white font-extrabold py-4 px-6 rounded-2xl text-xs transition-all transform active:scale-95 shadow-[0_4px_20px_rgba(239,68,68,0.45)] border border-amber-300"
        >
          <Download className="h-5 w-5 text-yellow-300 animate-bounce shrink-0" />
          <span className="uppercase tracking-wider font-display font-black text-center">
            {currentLang === 'en' 
              ? '📥 DOWNLOAD ORIGINAL SARA 567 APP (12MB)' 
              : '📥 असली सारा 567 ऐप डाउनलोड करें (12MB)'}
          </span>
        </a>
      </div>

      {/* Elegant scroll back to top shortcut in Red theme color */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 sm:bottom-8 right-6 bg-red-600 hover:bg-red-500 text-white p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-xs z-50 cursor-pointer"
        >
          <ArrowUp className="h-4 w-4 stroke-[2.5]" />
        </button>
      )}

      {/* Live Payout & Withdrawal Activity Toast Popups */}
      <WithdrawalTicker currentLang={currentLang} />

    </div>
  );
}
