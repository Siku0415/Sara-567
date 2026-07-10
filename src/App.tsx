import { Download, ShieldCheck, Users, Star } from 'lucide-react';
import brandLogo from './assets/images/logo_sara_567_new_1782209290149.jpg';

export default function App() {
  const t = {
    appName: "Sara 567",
    activeUsers: "1 Million+ Active Users",
    trustedApp: "India's No.1 Trusted Matka Application",
    downloadNow: "📥 Download Original Sara 567 App (12MB)",
    secureBadge: "100% Secure & Verified Official APK",
    stickyText: "📥 DOWNLOAD ORIGINAL SARA 567 APP (12MB)",
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-between items-center relative overflow-hidden font-sans selection:bg-amber-400 selection:text-neutral-950 pb-28 md:pb-6">
      
      {/* Absolute background visual glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header Utilities bar */}
      <header className="w-full max-w-xl px-6 pt-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Online & Secure</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-md px-6 py-8 flex flex-col items-center justify-center text-center relative z-10 my-auto">
        
        {/* Logo Container containing the beautiful new circular-styled brand logo */}
        <div className="relative mb-8 group">
          {/* Animated luxurious outer border glow ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-red-500 to-rose-600 rounded-[36px] blur-xl opacity-60 group-hover:opacity-85 transition duration-1000 animate-pulse"></div>
          
          <div className="relative bg-neutral-900 border-4 border-amber-400 p-1 rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(239,68,68,0.3)]">
            <img
              src={brandLogo}
              alt="Sara 567 Logo"
              className="w-40 h-40 object-cover rounded-[30px] select-none scale-100 group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Brand Display Name */}
        <h1 className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 tracking-tight leading-none mb-4 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
          {t.appName}
        </h1>

        {/* 1 Million+ Active Users indicators */}
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-2xl mb-3 shadow-sm">
          <Users className="h-4 w-4 text-emerald-400 shrink-0" />
          <span className="text-emerald-400 font-display font-black text-sm tracking-wide">
            {t.activeUsers}
          </span>
        </div>

        {/* India's Trusted Matka Application details */}
        <div className="space-y-2 mb-8">
          <p className="text-neutral-300 font-sans text-base font-black tracking-wide leading-snug">
            {t.trustedApp}
          </p>
          
          {/* Beautiful 5 Stars rating indicators */}
          <div className="flex justify-center space-x-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current shrink-0 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
            ))}
          </div>
        </div>

        {/* Direct Main download button linking directly to the APK */}
        <div className="w-full space-y-4">
          <a
            href="https://sara567.info/Sara567.apk"
            download
            referrerPolicy="no-referrer"
            className="w-full flex justify-center items-center space-x-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-550 hover:to-rose-500 text-white font-black py-5 px-6 rounded-2xl text-sm sm:text-base transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_8px_30px_rgba(239,68,68,0.4)] border border-amber-400/40 relative group/btn cursor-pointer"
          >
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 -skew-x-12 -translate-x-full group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out"></div>
            
            <Download className="h-5 w-5 text-yellow-300 animate-bounce shrink-0 stroke-[2.5]" />
            <span className="uppercase tracking-wider font-display font-black text-center">
              {t.downloadNow}
            </span>
          </a>

          {/* Secure application trust subtitle badge */}
          <div className="flex items-center justify-center space-x-1.5 text-neutral-400 font-mono text-[10px] font-bold">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>{t.secureBadge}</span>
          </div>
        </div>

      </main>

      {/* High precision mini footer for trust legal compliance */}
      <footer className="w-full max-w-sm px-6 py-4 text-center mt-auto relative z-10 border-t border-white/5 text-[9px] font-bold font-mono text-neutral-500 space-y-1">
        <p>© 2026 Sara 567 Inc. All Rights Reserved.</p>
        <p>18+ Play Responsibly • India's Certified Gaming platform</p>
      </footer>

      {/* Fixed Sticky Call to Actions for Mobile responsiveness - Ultra Exciting Single Download Driver */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-950/95 backdrop-blur-lg border-t-2 border-amber-400 p-4 z-40 flex justify-center items-center shadow-[0_-8px_30px_rgba(239,68,68,0.35)]">
        <a
          href="https://sara567.info/Sara567.apk"
          download
          referrerPolicy="no-referrer"
          className="w-full max-w-md flex justify-center items-center space-x-3 bg-gradient-to-r from-red-650 via-rose-600 to-red-700 hover:from-red-600 hover:to-rose-550 text-white font-extrabold py-3 px-5 rounded-xl text-xs sm:text-sm transition-all transform active:scale-95 shadow-[0_4px_20px_rgba(239,68,68,0.3)] border border-amber-300"
        >
          <Download className="h-4.5 w-4.5 text-yellow-300 animate-bounce shrink-0" />
          <span className="uppercase tracking-wider font-display font-black text-center">
            {t.stickyText}
          </span>
        </a>
      </div>

    </div>
  );
}
