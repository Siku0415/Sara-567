import { Download, Shield, Star, Users } from 'lucide-react';
import { TRANSLATIONS, LanguageCode } from '../translations';
import heroLogo from '../assets/images/hero_logo_1780605456228.png';

interface HeroProps {
  currentLang: LanguageCode;
  onScrollToGames: () => void;
  onScrollToRates: () => void;
}

export default function Hero({ currentLang, onScrollToGames, onScrollToRates }: HeroProps) {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="hero" className="relative min-h-screen bg-[#fafafa] flex items-center pt-28 overflow-hidden">
      
      {/* Soft dynamic ambient red light blobs for elegance */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-rose-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse delay-700"></div>

      {/* Grid lines overlay for aesthetic structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Language Reactive Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            
            {/* Tagline Badge in Light and Red style */}
            <div className="self-center lg:self-start inline-flex items-center space-x-2 bg-red-50 border border-red-150 px-4.5 py-2 rounded-full shadow-xs">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-red-700 font-mono text-xs font-bold uppercase tracking-wider">
                {t.heroTagline}
              </span>
            </div>

            {/* Main Title Headings */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6.5xl font-black text-neutral-900 tracking-tight leading-none">
              {t.heroWelcome.split('Sara 567')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 via-rose-600 to-red-700">
                Sara 567
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-neutral-600 font-semibold tracking-tight">
                {t.heroSubtitle}
              </span>
            </h1>

            {/* Explanatory Paragraph */}
            <p className="text-neutral-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
              {t.heroDesc}
            </p>

            {/* Quick Stats Grid with Red highlights */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 py-2">
              <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
                <div className="flex justify-center text-red-600 mb-1.5">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div className="text-neutral-900 font-bold font-display text-sm sm:text-base">{t.statsUsers}</div>
              </div>
              
              <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
                <div className="flex justify-center text-rose-500 mb-1.5">
                  <Star className="h-4.5 w-4.5 fill-rose-500" />
                </div>
                <div className="text-neutral-900 font-bold font-display text-sm sm:text-base">{t.statsRating}</div>
              </div>

              <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
                <div className="flex justify-center text-red-700 mb-1.5">
                  <Shield className="h-4.5 w-4.5 text-red-650" />
                </div>
                <div className="text-neutral-900 font-bold font-display text-xs sm:text-sm">{t.statsWithdrawal}</div>
              </div>
            </div>

            {/* Big Premium Red Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full pt-4">
              {/* Primary Pulsating Royal Red & Gold Gold-Rimmed Download Button */}
              <a
                href="https://sara567.info/Sara%20567.apk"
                download
                referrerPolicy="no-referrer"
                className="relative group/btn flex items-center justify-center space-x-3 bg-gradient-to-r from-red-700 via-red-600 to-rose-600 hover:from-red-600 hover:to-rose-500 text-white font-black px-10 py-5 rounded-2xl text-lg transition-all shadow-[0_10px_30px_rgba(220,38,38,0.35)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.55)] hover:scale-[1.05] active:scale-[0.98] cursor-pointer overflow-hidden border-2 border-amber-300"
              >
                {/* Gold glowing light reflection effect */}
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-80 group-hover/btn:opacity-100"></span>
                <span className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shine"></span>
                
                <Download className="h-6 w-6 stroke-[3] text-yellow-300 animate-bounce" />
                <span className="tracking-wide uppercase font-display">
                  {currentLang === 'en' ? 'Download VIP App Now' : 'वीआईपी ऐप अभी डाउनलोड करें'}
                </span>
              </a>

              {/* Secondary Mirror High-Speed Download APK button */}
              <a
                href="https://sara567.info/Sara%20567.apk"
                download
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-850 text-amber-400 font-extrabold border-2 border-neutral-800 hover:border-amber-400/40 px-6 py-5 rounded-2xl text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer group"
              >
                <span>⚡ {currentLang === 'en' ? 'Direct APK Link (Fast)' : 'फास्ट एपीके डाउनलोड लिंक'}</span>
              </a>
            </div>

            {/* Glowing Golden Safe Deposit & Trust Seals Grid */}
            <div className="pt-3 flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start items-center text-xs font-bold text-neutral-600">
              <span className="flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-full shadow-2xs">
                <span className="text-yellow-600">⭐</span>
                <span>{currentLang === 'en' ? '₹100 Min Deposit' : '₹100 न्यूनतम जमा'}</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-red-50 text-red-800 border border-red-150 px-3 py-1.5 rounded-full shadow-2xs">
                <span className="text-red-650">⚡</span>
                <span>{currentLang === 'en' ? '24/7 Autopayout (5 Mins)' : '24/7 ऑटोपेआउट (मात्र 5 मिनट)'}</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full shadow-2xs">
                <span className="text-emerald-600">🛡️</span>
                <span>{currentLang === 'en' ? '100% Original & Secure' : '100% असली व सुरक्षित'}</span>
              </span>
            </div>

            {/* Navigation Helpers */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4 text-xs font-semibold font-mono text-neutral-500">
              <button onClick={onScrollToRates} className="hover:text-red-650 underline decoration-red-500/30 hover:decoration-red-500 cursor-pointer transition-colors">
                {t.navRates}
              </button>
              <span>•</span>
              <button onClick={onScrollToGames} className="hover:text-red-650 underline decoration-red-500/30 hover:decoration-red-500 cursor-pointer transition-colors">
                {t.navLive}
              </button>
            </div>

          </div>

          {/* Right Column: Premium Royal Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing background behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-amber-400 to-rose-600 rounded-[32px] blur-2xl opacity-20 transition duration-1000 animate-pulse"></div>
            
            {/* Main Premium Banner Container */}
            <div className="relative bg-white border-4 border-amber-300 rounded-[32px] p-2 w-full max-w-[390px] shadow-[0_24px_60px_rgba(220,38,38,0.25)] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
              
              <div className="relative rounded-[24px] overflow-hidden bg-neutral-100 aspect-square">
                <img
                  src={heroLogo}
                  alt="Sara 567 Winners Lady"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                
                {/* 100% Secure badge on top of image */}
                <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur-md text-white text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1.5 rounded-xl border border-amber-300 shadow-lg flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>100% Genuine & Safe</span>
                </div>
              </div>
              
              {/* Mini trust highlights directly below image inside the frame */}
              <div className="p-4 bg-gradient-to-b from-neutral-50 to-white rounded-b-[24px]">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display font-black text-xs text-neutral-900 uppercase tracking-tight">Sara मटका चैंपियन</h3>
                    <p className="text-[10px] text-neutral-400 font-semibold font-mono">India's Trusted Platform</p>
                  </div>
                  <div className="bg-red-100 text-red-700 font-extrabold font-mono text-[10px] px-2.5 py-1 rounded-lg">
                    ★ 4.9 Reviews
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
