import { Shield, Sparkles, Zap, Award, CheckCircle2, CreditCard, Gift, Smartphone } from 'lucide-react';
import { TRANSLATIONS, LanguageCode } from '../translations';

interface FeaturesProps {
  currentLang: LanguageCode;
}

export default function Features({ currentLang }: FeaturesProps) {
  const t = TRANSLATIONS[currentLang];

  const highlightPoints = [
    {
      title: t.feature1Title,
      desc: t.feature1Desc,
      icon: <Shield className="h-6 w-6 text-red-650" />
    },
    {
      title: t.feature2Title,
      desc: t.feature2Desc,
      icon: <Zap className="h-6 w-6 text-red-700 animate-pulse" />
    },
    {
      title: currentLang === 'en' ? 'Instant UPI & QR Deposits' : '1-क्लिक तुरंत UPI डिपॉज़िट',
      desc: currentLang === 'en' ? 'Refill your wallet in 10 seconds via PhonePe, GooglePay, Paytm, or UPI QR.' : 'गूगल पे, फ़ोन पे, पेटियम या UPI QR द्वारा सिर्फ १० सेकंड में आसानी से पैसे जोड़ें।',
      icon: <CreditCard className="h-6 w-6 text-amber-500" />
    },
    {
      title: t.feature4Title,
      desc: t.feature4Desc,
      icon: <Gift className="h-6 w-6 text-red-700" />
    }
  ];

  return (
    <section id="why_choose_us" className="relative py-20 bg-neutral-50/50 border-t border-neutral-150 overflow-hidden">
      {/* Light soft ambient warm glow */}
      <div className="absolute top-1/3 left-1/10 w-80 h-80 bg-red-400/2 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-red-50 border border-red-150 px-3.5 py-1.5 rounded-full mb-3">
            <Award className="h-3.5 w-3.5 text-red-650" />
            <span className="text-red-700 text-[10px] font-mono font-bold uppercase tracking-wider">
              {currentLang === 'en' ? 'SARA PREMIUM MATRIX' : 'सारा मटका प्रीमियम सिस्टम'}
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            {t.whyTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-750 font-black">
              {t.whySpan}
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-semibold">
            {t.whyDesc}
          </p>
        </div>

        {/* Localized Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlightPoints.map((item, index) => (
            <div
              key={index}
              id={`feature_card_${index}`}
              className="bg-white hover:bg-[#fafafa] border border-neutral-200/80 hover:border-red-500/20 p-6 rounded-3xl transition-all duration-300 flex items-start space-x-4 shadow-xs"
            >
              <div className="bg-neutral-100 p-3 rounded-2xl border border-neutral-200 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-neutral-900 text-base font-extrabold font-display leading-tight">{item.title}</h3>
                <p className="text-neutral-500 font-sans text-xs leading-relaxed font-semibold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Infographic stats card */}
        <div className="bg-white border-2 border-neutral-250/70 rounded-[32px] p-6 sm:p-10 relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center space-x-1.5 bg-red-50 border border-red-150 px-3.5 py-1.5 rounded-full text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-red-650" />
                <span>{currentLang === 'en' ? 'ZERO LATENCY ALERTS' : 'फास्ट परिणाम नोटिफिकेशन'}</span>
              </span>
              <h3 className="text-neutral-900 text-xl sm:text-2xl font-black font-display tracking-tight">
                {t.bannerTitle}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-sans font-semibold">
                {t.bannerDesc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-neutral-600">
                  <CheckCircle2 className="h-4.5 w-4.5 text-red-650 shrink-0" />
                  <span className="font-sans">{t.bannerPoint1}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-neutral-600">
                  <CheckCircle2 className="h-4.5 w-4.5 text-red-650 shrink-0" />
                  <span className="font-sans">{t.bannerPoint2}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-neutral-600">
                  <CheckCircle2 className="h-4.5 w-4.5 text-red-650 shrink-0" />
                  <span className="font-sans">{t.bannerPoint3}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-neutral-600">
                  <CheckCircle2 className="h-4.5 w-4.5 text-red-650 shrink-0" />
                  <span className="font-sans">{t.bannerPoint4}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center bg-neutral-50 p-6 rounded-2xl border border-neutral-200 text-center space-y-4">
              <Smartphone className="h-8 w-8 text-neutral-500 animate-pulse" />
              <div>
                <span className="block text-neutral-900 font-extrabold font-display text-base">Sara 567 App</span>
                <span className="text-[10px] font-bold font-mono text-neutral-400">VERSION 1.4.2 (ANDROID ONLY)</span>
              </div>
              <a
                href="https://sara567.info/Sara567.apk"
                download
                referrerPolicy="no-referrer"
                className="w-full text-center bg-gradient-to-r from-red-650 to-red-750 hover:from-red-550 hover:to-red-650 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                📥 APK (12MB)
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
