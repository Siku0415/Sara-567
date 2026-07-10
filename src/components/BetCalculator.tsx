import { useState } from 'react';
import { GAME_RATES } from '../data';
import { Calculator, ArrowRight, Coins, Wallet, Sparkles } from 'lucide-react';
import { TRANSLATIONS, LanguageCode } from '../translations';

// Localization mapper for internal rate card selections
const RATE_LOCALIZATION: Record<LanguageCode, Record<string, string>> = {
  en: {
    single_digit: 'Single Digit',
    jodi_digit: 'Jodi Digit',
    single_panna: 'Single Panna',
    double_panna: 'Double Panna',
    triple_panna: 'Triple Panna',
    half_sangam: 'Half Sangam',
    full_sangam: 'Full Sangam',
  },
  hi: {
    single_digit: 'सिंगल डिजिट',
    jodi_digit: 'जोड़ी डिजिट',
    single_panna: 'सिंगल पाना',
    double_panna: 'डबल पाना',
    triple_panna: 'ट्रिपल पाना',
    half_sangam: 'हाफ संगम',
    full_sangam: 'फुल संगम',
  },
  mr: {
    single_digit: 'सिंगल डिजिट',
    jodi_digit: 'जोडी डिजिट',
    single_panna: 'सिंगल पाना',
    double_panna: 'डबल पाना',
    triple_panna: 'ट्रिपल पाना',
    half_sangam: 'हाफ संगम',
    full_sangam: 'फुल संगम',
  },
  gu: {
    single_digit: 'સિંગલ ડિજિટ',
    jodi_digit: 'જોડી ડિજિટ',
    single_panna: 'સિંગલ પાના',
    double_panna: 'ડબલ પાના',
    triple_panna: 'ટ્રિપલ પાના',
    half_sangam: 'હાફ સંગમ',
    full_sangam: 'ફુલ સંગમ',
  },
  kn: {
    single_digit: 'ಸಿಂಗಲ್ ಡಿಜಿಟ್',
    jodi_digit: 'ಜೋಡಿ ಡಿಜಿಟ್',
    single_panna: 'ಸಿಂಗಲ್ ಪನ್ನಾ',
    double_panna: 'ಡಬಲ್ ಪನ್ನಾ',
    triple_panna: 'ಟ್ರಿಪಲ್ ಪನ್ನಾ',
    half_sangam: 'ಹಾಫ್ సంగమ్',
    full_sangam: 'ಫುಲ್ ಸಂಗಮ್',
  },
  ta: {
    single_digit: 'ஒற்றை இலக்கம்',
    jodi_digit: 'ஜோடி இலக்கம்',
    single_panna: 'ஒற்றை பன்னா',
    double_panna: 'இரட்டை பன்னா',
    triple_panna: 'மும்மை பன்னா',
    half_sangam: 'அரை சங்கமம்',
    full_sangam: 'முழு சங்கமம்',
  },
  te: {
    single_digit: 'సింగిల్ డిజిట్',
    jodi_digit: 'జోడి డిజిట్',
    single_panna: 'సింగిల్ పన్నా',
    double_panna: 'డబుల్ పన్నా',
    triple_panna: 'ట్రిపుల్ పన్నా',
    half_sangam: 'హాఫ్ సంగమం',
    full_sangam: 'ఫుల్ సంగమం',
  }
};

interface BetCalculatorProps {
  currentLang: LanguageCode;
}

export default function BetCalculator({ currentLang }: BetCalculatorProps) {
  const [selectedRateId, setSelectedRateId] = useState(GAME_RATES[1].id); // Default to Jodi Digit
  const [bidAmount, setBidAmount] = useState<number>(100);

  const t = TRANSLATIONS[currentLang];
  const selectedRate = GAME_RATES.find((r) => r.id === selectedRateId) || GAME_RATES[0];

  // Calculate potential earnings based on multipliers
  let multiplier = 1;
  switch (selectedRate.id) {
    case 'single_digit':
      multiplier = 9.5;
      break;
    case 'jodi_digit':
      multiplier = 95;
      break;
    case 'single_panna':
      multiplier = 140;
      break;
    case 'double_panna':
      multiplier = 280;
      break;
    case 'triple_panna':
      multiplier = 700;
      break;
    case 'half_sangam':
      multiplier = 1000;
      break;
    case 'full_sangam':
      multiplier = 10000;
      break;
  }

  const potentialWinnings = (bidAmount || 0) * multiplier;
  const netProfit = potentialWinnings - (bidAmount || 0);

  const handleAmountChange = (valStr: string) => {
    const val = parseInt(valStr.replace(/\D/g, ''), 10);
    setBidAmount(isNaN(val) ? 0 : val);
  };

  return (
    <section id="features" className="relative py-20 bg-white border-t border-neutral-150 overflow-hidden">
      {/* Light soft ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-400/2 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1 bg-red-50 border border-red-150 px-3.5 py-1.5 rounded-full mb-2">
              <span className="text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
                {currentLang === 'en' ? 'WINNING CALCULATOR' : 'विजेता कैलकुलेटर'}
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-none">
              {t.calcTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 to-red-750">
                {t.calcSpan}
              </span>
            </h2>
            
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans font-semibold">
              {t.calcDesc}
            </p>

            {/* Quick point bullet lists */}
            <div className="space-y-3 pt-2 hidden lg:block">
              <div className="flex items-center space-x-3 text-neutral-700">
                <div className="h-5.5 w-5.5 rounded-full bg-red-50 border border-red-150/60 flex items-center justify-center text-red-600 font-bold text-xs shrink-0">✓</div>
                <span className="text-sm font-semibold">9.5x {currentLang === 'en' ? 'multipliers on Single Digit bids' : 'सिंगल डिजिट पर 9.5 गुना अधिक दरें'}</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-700">
                <div className="h-5.5 w-5.5 rounded-full bg-red-50 border border-red-150/60 flex items-center justify-center text-red-600 font-bold text-xs shrink-0">✓</div>
                <span className="text-sm font-semibold">95x {currentLang === 'en' ? 'multipliers on Jodi bids' : 'जोड़ी डिजिट पर 95 गुना अधिक दरें'}</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-700">
                <div className="h-5.5 w-5.5 rounded-full bg-red-50 border border-red-150/60 flex items-center justify-center text-red-600 font-bold text-xs shrink-0">✓</div>
                <span className="text-sm font-semibold">Up to 10000x {currentLang === 'en' ? 'multiplier rewards in Sangam' : 'संगम पर 10000 गुना भारी रिटर्न'}</span>
              </div>
            </div>
          </div>

          {/* Right interactive card column */}
          <div className="lg:col-span-7 flex justify-center w-full">
            
            {/* Elegant light-border card design in Red theme framework */}
            <div id="calculator_card" className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 w-full max-w-[500px] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none"></div>

              {/* Calculator Header */}
              <div className="flex items-center space-x-3 border-b border-neutral-100 pb-5 mb-6">
                <div className="bg-neutral-100 p-2.5 rounded-xl border border-neutral-200">
                  <Calculator className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-neutral-900 text-base font-extrabold font-display">{t.calcHeaderTitle}</h3>
                  <span className="text-[10px] text-neutral-400 font-bold font-mono uppercase tracking-wider">
                    {currentLang === 'en' ? 'Instant SARA multiplier mathematics' : 'सटीक सारा मटका गणितीय गणना'}
                  </span>
                </div>
              </div>

              {/* Input: Select Game Type */}
              <div className="space-y-1.5 mb-5">
                <label className="block text-xs font-bold font-mono text-neutral-400 uppercase tracking-widest">{t.calcLabelGame}</label>
                <div className="relative">
                  <select
                    value={selectedRateId}
                    onChange={(e) => setSelectedRateId(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 text-sm font-bold rounded-2xl p-3 focus:outline-none focus:border-red-500/40"
                  >
                    {GAME_RATES.map((rate) => {
                      const name = RATE_LOCALIZATION[currentLang]?.[rate.id] || rate.name;
                      return (
                        <option key={rate.id} value={rate.id}>
                          {name} ({rate.rate})
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Input: Bidding Amount */}
              <div className="space-y-1.5 mb-6">
                <label className="block text-[10px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                  {t.calcLabelAmount}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-sans font-black">₹</span>
                  <input
                    type="text"
                    value={bidAmount === 0 ? '' : bidAmount.toLocaleString()}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-red-500/40 text-neutral-900 font-mono text-lg font-bold rounded-2xl py-3 pl-8 pr-12 focus:outline-none"
                    placeholder="Enter amount"
                  />
                  
                  {/* Quick-insert tags with Red highlights */}
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex space-x-1">
                    {[100, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setBidAmount(amt)}
                        className="px-2.5 py-1 bg-white border border-neutral-200 hover:border-red-500/30 text-neutral-500 hover:text-red-700 rounded-lg text-[10px] font-bold font-mono transition-all cursor-pointer"
                      >
                        +{amt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outputs Ticker */}
              <div className="bg-neutral-50 border border-neutral-205 rounded-2xl p-4.5 space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 font-medium flex items-center">
                    <Coins className="h-3.5 w-3.5 text-red-650 mr-1.5 shrink-0" />
                    {currentLang === 'en' ? 'Multiplier' : 'गुणांक दर'}
                  </span>
                  <span className="font-mono text-neutral-800 font-extrabold">{selectedRate.rate} ({selectedRate.payout})</span>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 font-medium flex items-center">
                    <Wallet className="h-3.5 w-3.5 text-emerald-600 mr-1.5 shrink-0" />
                    {t.calcNetProfit}
                  </span>
                  <span className="font-mono text-emerald-600 font-extrabold">+ ₹{netProfit.toLocaleString()}</span>
                </div>

                <div className="border-t border-neutral-200/60 pt-3 flex justify-between items-center">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide">{t.calcTotalPayout}</span>
                  <div className="text-right">
                    <span className="text-red-700 font-display font-black text-xl flex items-center">
                      ₹{potentialWinnings.toLocaleString()}
                      <Sparkles className="h-4 w-4 text-red-550 ml-1 hover:animate-spin" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Calculator Call-to-action */}
              <a
                href="https://sara567.info/Sara567.apk"
                download
                referrerPolicy="no-referrer"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-650 to-red-750 hover:from-red-550 hover:to-red-650 text-white font-bold py-4.5 rounded-2xl text-sm transition-all shadow-[0_4px_12px_rgba(220,38,38,0.2)] focus:outline-none cursor-pointer"
              >
                <span>{t.calcBtn}</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
