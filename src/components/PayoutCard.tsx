import { GameRate } from '../types';
import { CircleDot, Dice2, Layers3, Copy, Boxes, Sparkles, Crown } from 'lucide-react';
import { LanguageCode } from '../translations';

// Game rates localization data across all 7 supported languages
const GAME_LOCALIZATION: Record<LanguageCode, Record<string, { name: string; desc: string }>> = {
  en: {
    single_digit: { name: 'Single Digit', desc: 'Bidding on any single digit number from 0 to 9.' },
    jodi_digit: { name: 'Jodi Digit', desc: 'Double digit combination from 00 to 99.' },
    single_panna: { name: 'Single Panna', desc: 'Three unique digit combination (no repeating digits).' },
    double_panna: { name: 'Double Panna', desc: 'Three-digit panel featuring two matching digits (e.g. 112).' },
    triple_panna: { name: 'Triple Panna', desc: 'Three-digit panel where all digits are identical (e.g. 333).' },
    half_sangam: { name: 'Half Sangam', desc: 'Combine Single Ank and Panna, or vice-versa.' },
    full_sangam: { name: 'Full Sangam', desc: 'Combine both Open and Close Panna configurations.' },
  },
  hi: {
    single_digit: { name: 'सिंगल डिजिट', desc: '0 से 9 तक किसी भी एक अंक पर बोली लगाना।' },
    jodi_digit: { name: 'जोड़ी डिजिट', desc: '00 से 99 तक दो अंकों के संयोजन पर बोली लगाना।' },
    single_panna: { name: 'सिंगल पाना', desc: 'तीन अद्वितीय अंकों का संयोजन (कोई दोहराव नहीं)।' },
    double_panna: { name: 'डबल पाना', desc: 'तीन अंकों का पैनल जिसमें दो मेल खाते अंक हों (जैसे 112)।' },
    triple_panna: { name: 'ट्रिपल पाना', desc: 'तीन अंकों का पैनल जिसमें तीनों अंक समान हों (जैसे 333)।' },
    half_sangam: { name: 'हाफ संगम', desc: 'सिंगल अंक और पाना का संयोजन, या इसके विपरीत।' },
    full_sangam: { name: 'फुल संगम', desc: 'ओपन और क्लोज दोनों पाना संयोजनों को मिलाना।' },
  },
  mr: {
    single_digit: { name: 'सिंगल डिजिट', desc: '० ते ९ मधील कोणत्याही एका अंकावर बोली लावणे.' },
    jodi_digit: { name: 'जोडी डिजिट', desc: '०० ते ९९ मधील दोन अंकांच्या संयोजनावर बोली लावणे.' },
    single_panna: { name: 'सिंगल पाना', desc: 'तीन अद्वितीय अंकांचे संयोजन (पुनरावृत्ती नसलेले अंक).' },
    double_panna: { name: 'डबल पाना', desc: 'दोन समान अंक असलेले तीन अंकी पॅनेल (उदा. ११२).' },
    triple_panna: { name: 'ट्रिपल पाना', desc: 'तिन्ही अंक समान असलेले तीन अंकी पॅनेल (उदा. ३३३).' },
    half_sangam: { name: 'हाफ संगम', desc: 'सिंगल अंक आणि पाना किंवा उलट यांचे संयोजन.' },
    full_sangam: { name: 'फुल संगम', desc: 'ओपन आणि क्लोज दोन्ही पाना पॅनेलचे संयोजन.' },
  },
  gu: {
    single_digit: { name: 'સિંગલ ડિજિટ', desc: '0 થી 9 સુધીના કોઈપણ સિંગલ ડિજિટ અંક પર બોલી લગાવવી.' },
    jodi_digit: { name: 'જોડી ડિજિટ', desc: '00 થી 99 સુધીના બે અંકના જોડાણ પર બોલી લગાવવી.' },
    single_panna: { name: 'સિંગલ પાના', desc: 'ત્રણ અલગ-અલગ અંકનું જોબોર્ડ (અંકોનું પુનરાવર્તન નહિ).' },
    double_panna: { name: 'ડબલ પાના', desc: 'બે સમાન અંક વાળું ત્રણ અંકી પેનલ (દા.ત. 112).' },
    triple_panna: { name: 'ટ્રિપલ પાના', desc: 'ત્રણેય સમાન અંક વાળું ત્રણ અંકી પેનલ (દા.ત. 333).' },
    half_sangam: { name: 'હાફ સંગમ', desc: 'સિંગલ અંક અને પાના નું પરસ્પર જોડાણ.' },
    full_sangam: { name: 'ફુલ સંગમ', desc: 'ઓપન અને ક્લોઝ બંને પાના નું સંપૂર્ણ જોડાણ.' },
  },
  kn: {
    single_digit: { name: 'ಸಿಂಗಲ್ ಡಿಜಿಟ್', desc: '0 ರಿಂದ 9 ರವರೆಗಿನ ಯಾವುದೇ ಒಂದೇ ಸಂಖ್ಯೆಯ ಮೇಲೆ ಬಿಡ್ ಮಾಡುವುದು.' },
    jodi_digit: { name: 'ಜೋಡಿ ಡಿಜಿಟ್', desc: '00 ರಿಂದ 99 ರವರೆಗಿನ రెండు ಸಂಖ್ಯೆಗಳ ಸಂಯೋಜನೆ.' },
    single_panna: { name: 'ಸಿಂಗಲ್ ಪನ್ನಾ', desc: 'ಮೂರು ವಿಶಿಷ್ಟ ಸಂಖ್ಯೆಗಳ ಸಂಯೋಜನೆ (ಯಾವುದೇ ಸಂಖ್ಯೆ ಪುನರಾವರ್ತನೆಯಾಗಬಾರದು).' },
    double_panna: { name: 'ಡಬಲ್ ಪನ್ನಾ', desc: 'ಎರಡು ಒಂದೇ ತೆರನಾದ ಸಂಖ್ಯೆ ಹೊಂದಿರುವ ಮೂರು-ಅಂಕಿಯ ಫಲಕ (ಉದಾ: 112).' },
    triple_panna: { name: 'ಟ್ರಿಪಲ್ ಪನ್ನಾ', desc: 'ಮೂರೂ ಸಂಖ್ಯೆಗಳು ಒಂದೇ ಆಗಿರುವ ಮೂರು-ಅಂಕಿಯ ಫಲಕ (ಉದಾ: 333).' },
    half_sangam: { name: 'ಹಾಫ್ సంగమ్', desc: 'ಸಿಂಗಲ್ ಅಂಕ್ ಮತ್ತು ಪನ್ನಾ ಸಂಯೋಜನೆ, ಅಥವಾ ಪ್ರತಿಯಾಗಿ.' },
    full_sangam: { name: 'ಫುಲ್ ಸಂಗಮ್', desc: 'ಓಪನ್ ಮತ್ತು ಕ್ಲೋಸ್ ಪನ್ನಾ ಎರಡರ ಒಟ್ಟು ಸಂಯೋಜನೆ.' },
  },
  ta: {
    single_digit: { name: 'ஒற்றை இலக்கம்', desc: '0 முதல் 9 வரையிலான ஏதேனும் ஒரு எண்ணின் மீது பந்தயம் கட்டுதல்.' },
    jodi_digit: { name: 'ஜோடி இலக்கம்', desc: '00 முதல் 99 வரையிலான இரட்டை இலக்க எண்களின் சேர்க்கை.' },
    single_panna: { name: 'ஒற்றை பன்னா', desc: 'மூன்று தனித்துவமான எண்களின் சேர்க்கை (எண்கள் திரும்ப வராது).' },
    double_panna: { name: 'இரட்டை பன்னா', desc: 'மூன்று இலக்கங்களில் இரண்டு ஒரே எண்ணாக இருக்கும் பேனல் (எ.கா. 112).' },
    triple_panna: { name: 'மும்மை பன்னா', desc: 'மூன்று இலக்கங்களும் ஒரே மாதிரியாக இருக்கும் பேனல் (எ.கா. 333).' },
    half_sangam: { name: 'அரை சங்கமம்', desc: 'ஒற்றை இலக்கம் மற்றும் பன்னாவின் சேர்க்கை.' },
    full_sangam: { name: 'முழு சங்கமம்', desc: 'ஓபன் மற்றும் குளோஸ் பன்னா இரண்டின் முழுமையான சேர்க்கை.' },
  },
  te: {
    single_digit: { name: 'సింగిల్ డిజిట్', desc: '0 నుండి 9 వరకు ఏదైనా ఒక అంకెపై పందెం వేయడం.' },
    jodi_digit: { name: 'జోడి డిజిట్', desc: '00 నుండి 99 వరకు రెండు అంకెల కలయికపై పందెం.' },
    single_panna: { name: 'సింగిల్ పన్నా', desc: 'మూడు విభిన్న అంకెల కలయిక (అంకెలు పునరావృతం కావు).' },
    double_panna: { name: 'డబుల్ పన్నా', desc: 'రెండు ఒకే రకమైన అంకెలు గల మూడు అంకెల ప్యానెల్ (ఉదా: 112).' },
    triple_panna: { name: 'ట్రిపుల్ పన్నా', desc: 'మూడు అంకెలు ఒకే విధంగా ఉండే ప్యానెల్ (ఉదా: 333).' },
    half_sangam: { name: 'హాఫ్ సంగమం', desc: 'సింగిల్ అంకె మరియు పన్నా కలయిక, లేదా దీనికి విరుద్ధం.' },
    full_sangam: { name: 'ఫుల్ సంగమం', desc: 'ఓపెన్ మరియు క్లోజ్ పన్నా రెండింటి పూర్తి కలయిక.' },
  }
};

interface PayoutCardProps {
  rate: GameRate;
  index: number;
  currentLang: LanguageCode;
  key?: any;
}

export function PayoutCard({ rate, index, currentLang }: PayoutCardProps) {
  // Translate dynamically using our dictionary
  const localized = GAME_LOCALIZATION[currentLang]?.[rate.id] || { name: rate.name, desc: rate.desc };

  // Determine appropriate design icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'single_digit':
        return <CircleDot className="h-5.5 w-5.5 text-neutral-800" />;
      case 'jodi_digit':
        return <Dice2 className="h-5.5 w-5.5 text-neutral-800" />;
      case 'single_panna':
        return <Layers3 className="h-5.5 w-5.5 text-neutral-800" />;
      case 'double_panna':
        return <Copy className="h-5.5 w-5.5 text-neutral-800" />;
      case 'triple_panna':
        return <Boxes className="h-5.5 w-5.5 text-neutral-800" />;
      case 'half_sangam':
        return <Sparkles className="h-5.5 w-5.5 text-red-650 animate-pulse" />;
      case 'full_sangam':
        return <Crown className="h-5.5 w-5.5 text-red-700 font-bold" />;
      default:
        return <CircleDot className="h-5.5 w-5.5 text-neutral-800" />;
    }
  };

  return (
    <div
      id={`payout_card_${rate.id}`}
      className="group relative bg-white border border-neutral-200/80 rounded-2xl p-6.5 hover:border-red-500/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
    >
      {/* Decorative top right corner soft gradient active hover banner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none group-hover:from-red-100/50 transition-colors"></div>

      <div>
        {/* Card Header & Icon with vivid Red styling */}
        <div className="flex justify-between items-start mb-4">
          <div className="bg-neutral-100 p-2.5 rounded-xl border border-neutral-200/40 group-hover:scale-105 transition-transform">
            {getIcon(rate.id)}
          </div>
          <span className="text-red-700 text-xs font-bold font-mono bg-red-50 border border-red-100 px-2.5 py-1 rounded-lg">
            {rate.payout}
          </span>
        </div>

        {/* Localized Title */}
        <h3 className="text-neutral-900 font-display text-lg font-black group-hover:text-red-700 transition-colors">
          {localized.name}
        </h3>

        {/* Localized Description */}
        <p className="mt-2 text-neutral-500 text-xs font-medium leading-relaxed font-sans min-h-[44px]">
          {localized.desc}
        </p>
      </div>

      {/* Dynamic Ratio display */}
      <div className="mt-5 pt-4 border-t border-neutral-100 flex justify-between items-center">
        <span className="text-[10px] text-neutral-400 font-semibold font-mono tracking-wider uppercase">SARA RATIO</span>
        <span className="text-red-600 font-display font-black text-lg group-hover:scale-105 transition-transform origin-right">
          {rate.rate}
        </span>
      </div>
    </div>
  );
}
