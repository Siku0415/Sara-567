import { GAME_RATES } from '../data';
import { PayoutCard } from './PayoutCard';
import { TRANSLATIONS, LanguageCode } from '../translations';

interface GameRatesProps {
  currentLang: LanguageCode;
}

export default function GameRates({ currentLang }: GameRatesProps) {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="rates" className="relative py-20 bg-white border-t border-neutral-150 overflow-hidden">
      {/* Soft passive bottom-left red gradient for background warmth */}
      <div className="absolute -bottom-1/5 -left-1/10 w-96 h-96 bg-red-400/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Localized Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-red-50 border border-red-150/60 px-3.5 py-1.5 rounded-full mb-3.5">
            <span className="text-red-700 text-[10px] font-mono font-bold tracking-wider uppercase">
              {currentLang === 'en' ? 'HIGH MULTIPLIER MULTIPLICATIONS' : 'सर्वोपरि खेल गुणांक'}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            {t.ratesTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              {t.ratesSpan}
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 font-sans text-sm sm:text-base max-w-xl mx-auto font-semibold">
            {t.ratesDesc}
          </p>
        </div>

        {/* Localized Rates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GAME_RATES.map((rate, idx) => (
            <PayoutCard key={rate.id} rate={rate} index={idx} currentLang={currentLang} />
          ))}
        </div>

        {/* Localized Disclaimer Note inside clean light styled panel */}
        <div className="mt-12 bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4.5 text-center max-w-2xl mx-auto">
          <span className="text-xs text-neutral-500 font-semibold font-mono">
            ⚠️ <strong className="text-neutral-800">SARA NOTE:</strong> {t.ratesNote}
          </span>
        </div>

      </div>
    </section>
  );
}
