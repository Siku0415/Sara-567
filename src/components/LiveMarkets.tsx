import { useState, useEffect } from 'react';
import { getLiveMarketData } from '../data';
import { GameMarket } from '../types';
import { Play, Search, Clock, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react';
import { TRANSLATIONS, LanguageCode } from '../translations';

// Localization mapper for internal statuses and times
const TIMING_LOCALIZATION: Record<LanguageCode, { open: string; close: string; allTab: string; openTab: string; closedTab: string }> = {
  en: { open: 'Open Timing', close: 'Close Timing', allTab: 'All Markets', openTab: 'Active Markets', closedTab: 'Closed Markets' },
  hi: { open: 'खुलने का समय', close: 'बंद होने का समय', allTab: 'सभी मार्केट', openTab: 'सक्रिय मार्केट', closedTab: 'बंद मार्केट' },
  mr: { open: 'सुरू वेळ', close: 'बंद वेळ', allTab: 'सर्व मार्केट', openTab: 'सुरू मार्केट', closedTab: 'बंद मार्केट' },
  gu: { open: 'શરૂઆત સમય', close: 'બંધ સમય', allTab: 'બધા બજારો', openTab: 'ચાલુ બજારો', closedTab: 'બંધ બજારો' },
  kn: { open: 'ಪ್ರಾರಂಭ ಸಮಯ', close: 'ಮುಕ್ತಾಯ ಸಮಯ', allTab: 'ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆಗಳು', openTab: 'ಸಕ್ರಿಯ ಮಾರುಕಟ್ಟೆ', closedTab: 'ಮುಚ್ಚಿದ ಮಾರುಕಟ್ಟೆ' },
  ta: { open: 'தொடங்கும் நேரம்', close: 'முடிவடையும் நேரம்', allTab: 'அனைத்து சந்தைகள்', openTab: 'செயலில் உள்ளவை', closedTab: 'முடிவடைந்தவை' },
  te: { open: 'ప్రారంభ సమయం', close: 'ముగింపు సమయం', allTab: 'అన్ని మార్కెట్లు', openTab: 'క్రియాశీల మార్కెట్లు', closedTab: 'ముగిసిన మార్కెట్లు' }
};

interface LiveMarketsProps {
  currentLang: LanguageCode;
}

export default function LiveMarkets({ currentLang }: LiveMarketsProps) {
  const [markets, setMarkets] = useState<GameMarket[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'CLOSED'>('ALL');
  const [istTime, setIstTime] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const timeLabels = TIMING_LOCALIZATION[currentLang] || TIMING_LOCALIZATION.en;

  // Function to refresh and compile data
  const refreshMarketData = () => {
    setIsRefreshing(true);
    setMarkets(getLiveMarketData());
    setTimeout(() => setIsRefreshing(false), 600);
  };

  // Update IST Clock and get market hours
  useEffect(() => {
    setMarkets(getLiveMarketData());
    
    const interval = setInterval(() => {
      // Get IST Time String
      const now = new Date();
      const utcOffsetMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istOffsetMs = 5.5 * 3600000;
      const istDate = new Date(utcOffsetMs + istOffsetMs);
      
      const timeStr = istDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setIstTime(timeStr);
      
      // Update market open/closed status dynamically
      setMarkets(getLiveMarketData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Filter & Search logic
  const filteredMarkets = markets.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'ALL' ||
      (filter === 'OPEN' && m.status === 'OPEN') ||
      (filter === 'CLOSED' && m.status === 'CLOSED');
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="availableGames" className="relative py-20 bg-neutral-50/50 border-t border-neutral-150 overflow-hidden">
      
      {/* Background ambient red details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-400/2 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Localized IST Clock & Live Status Title panel */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200/80 shadow-xs">
          
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              {t.liveTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 to-red-700">
                {t.liveSpan}
              </span>
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-semibold font-sans mt-1 leading-relaxed">
              {t.liveDesc}
            </p>
          </div>

          {/* SARA IST Clock container, styled light and red */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl px-5 py-3 flex items-center space-x-3.5 shadow-xs">
              <Clock className="h-5 w-5 text-red-600 animate-pulse" />
              <div>
                <span className="block text-[8px] font-bold font-mono text-neutral-400 uppercase tracking-widest leading-none">
                  {t.liveTimeLabel}
                </span>
                <span className="text-red-700 font-mono text-base font-extrabold select-all tracking-wider">
                  {istTime || 'Calculating...'}
                </span>
              </div>
            </div>

            {/* Refresh Live results trigger */}
            <button
              onClick={refreshMarketData}
              disabled={isRefreshing}
              className="flex items-center space-x-1.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 px-4 py-3.5 rounded-2xl text-neutral-600 hover:text-neutral-900 transition-all text-xs font-bold uppercase font-mono cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin text-red-655' : ''}`} />
              <span>{currentLang === 'en' ? 'Refresh' : 'रिफ्रेश'}</span>
            </button>
          </div>

        </div>

        {/* Filters and Search Bar Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          
          {/* Filters Tab Menu */}
          <div className="flex bg-neutral-100 p-1.5 rounded-2xl border border-neutral-200 w-full sm:w-auto">
            {(['ALL', 'OPEN', 'CLOSED'] as const).map((tab) => {
              const label = tab === 'ALL' ? timeLabels.allTab : tab === 'OPEN' ? timeLabels.openTab : timeLabels.closedTab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === tab
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search Box with instant results */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder={t.liveSearchPlh}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-neutral-250 hover:border-neutral-350 focus:border-red-500/40 text-neutral-820 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none placeholder-neutral-400 font-sans transition-colors shadow-xs"
            />
          </div>

        </div>

        {/* Live Market List Grid */}
        {filteredMarkets.length === 0 ? (
          <div className="text-center py-16 bg-white border border-dashed border-neutral-250 rounded-3xl">
            <span className="text-3xl block mb-2">🔍</span>
            <p className="text-neutral-500 font-sans font-semibold text-sm">{t.liveNoResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map((market) => (
              <div
                key={market.id}
                className={`group relative bg-white border rounded-3xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs border-neutral-200/80`}
              >
                {/* Accent indicator strip */}
                <div
                  className={`absolute top-0 bottom-0 left-0 w-1.5 ${
                    market.status === 'OPEN' ? 'bg-red-600' : 'bg-neutral-300'
                  }`}
                ></div>

                <div>
                  {/* Name and State Status badge */}
                  <div className="flex justify-between items-center mb-4 pl-1">
                    <h3 className="font-display font-black text-neutral-900 text-base tracking-tight truncate max-w-[155px]">
                      {market.name}
                    </h3>
                    
                    <span
                      className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold border font-mono ${
                        market.status === 'OPEN'
                          ? 'bg-red-50 border-red-150 text-red-700'
                          : 'bg-neutral-100 border-neutral-200 text-neutral-500'
                      }`}
                    >
                      {market.status === 'OPEN' && (
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping mr-0.5"></span>
                      )}
                      <span>{market.status}</span>
                    </span>
                  </div>

                  {/* Operational timings */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400 border-b border-neutral-100 pb-3 mb-4 pl-1">
                    <div>
                      <span className="block font-bold text-neutral-400 uppercase">{timeLabels.open}</span>
                      <span className="text-neutral-600 font-bold">{market.openTime}</span>
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-neutral-400 uppercase">{timeLabels.close}</span>
                      <span className="text-neutral-600 font-bold">{market.closeTime}</span>
                    </div>
                  </div>

                  {/* Core Result output displays panel */}
                  <div className="bg-neutral-50 rounded-2xl p-4.5 text-center border border-neutral-150 select-all font-mono leading-none flex justify-center items-center space-x-1 text-lg font-black tracking-widest text-neutral-800">
                    <span className="text-red-700">{market.openResult}</span>
                    <span className="text-neutral-300 font-light">-</span>
                    <span className="text-neutral-900 font-sans tracking-normal bg-red-50 px-2.5 py-1 rounded-md text-base font-extrabold text-red-700 border border-red-100/30">
                      {market.jodiResult}
                    </span>
                    <span className="text-neutral-300 font-light">-</span>
                    <span className="text-red-700">{market.closeResult}</span>
                  </div>
                </div>

                {/* Secure Bid action link footer of the card */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex justify-between items-center gap-3 pl-1">
                  <div className="flex items-center text-[10px] text-neutral-400 font-mono font-bold">
                    <ShieldCheck className="h-3.5 w-3.5 text-red-600 mr-1 shrink-0" />
                    <span>SECURE PANEL</span>
                  </div>
                  
                  <a
                    href="https://sara567.info/Sara567.apk"
                    download
                    referrerPolicy="no-referrer"
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      market.status === 'OPEN'
                        ? 'bg-gradient-to-r from-red-650 to-red-750 text-white shadow-xs font-bold hover:from-red-550 hover:to-red-650'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-400 hover:text-neutral-700'
                    }`}
                  >
                    {market.status === 'OPEN' ? (
                      <>
                        <Play className="h-3 w-3 fill-white stroke-[2.5]" />
                        <span>{t.liveBtnPlay}</span>
                      </>
                    ) : (
                      <>
                        <Smartphone className="h-3 w-3" />
                        <span>{t.liveBtnUnavail}</span>
                      </>
                    )}
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
