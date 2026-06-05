import { useState, useEffect } from 'react';
import { Gamepad2, Coins, ArrowRight, ShieldCheck, X, Sparkles } from 'lucide-react';
import { LanguageCode } from '../translations';

interface WithdrawalTickerProps {
  currentLang: LanguageCode;
}

interface ActivityRecord {
  name: string;
  city: string;
  action: string;
  amount: string;
  payment: string;
  time: string;
  emoji: string;
}

const ACTIVITIES_EN: ActivityRecord[] = [
  { name: 'Amit K.', city: 'Indore, MP', action: 'withdrew', amount: '₹14,500', payment: 'PhonePe', time: 'Just now', emoji: '🎉' },
  { name: 'Rahul S.', city: 'Gwalior, MP', action: 'won Kalyan Jodi', amount: '₹95,000', payment: 'GooglePay', time: '1 min ago', emoji: '🔥' },
  { name: 'Vikram Patel', city: 'Surat, GJ', action: 'withdrew', amount: '₹8,400', payment: 'Paytm UPI', time: '2 mins ago', emoji: '⚡' },
  { name: 'Sanjay Deshmukh', city: 'Nagpur, MH', action: 'deposited', amount: '₹500', payment: 'Instant UPI', time: '3 mins ago', emoji: '🎮' },
  { name: 'Muthuvel R.', city: 'Madurai, TN', action: 'withdrew', amount: '₹22,000', payment: 'Bhim UPI', time: '4 mins ago', emoji: '💰' },
  { name: 'Suresh Kumar', city: 'Kanpur, UP', action: 'won Kalyan Close', amount: '₹19,000', payment: 'GPay', time: '5 mins ago', emoji: '👑' },
  { name: 'Praveen G.', city: 'Bengaluru, KA', action: 'deposited', amount: '₹100', payment: 'PhonePe', time: '6 mins ago', emoji: '⭐' },
  { name: 'Deepak Solanki', city: 'Ahmedabad, GJ', action: 'withdrew bumper win', amount: '₹1,40,000', payment: 'Bank Direct', time: '8 mins ago', emoji: '🏆' },
];

const ACTIVITIES_HI: ActivityRecord[] = [
  { name: 'अमित कुमार', city: 'इंदौर, मध्य प्रदेश', action: 'को विड्रॉल मिला', amount: '₹14,500', payment: 'PhonePe', time: 'अभी-अभी', emoji: '🎉' },
  { name: 'राहुल शर्मा', city: 'ग्वालियर', action: 'ने कल्याण जोड़ी जीता', amount: '₹95,000', payment: 'GooglePay', time: '1 मिनट पहले', emoji: '🔥' },
  { name: 'विक्रम पटेल', city: 'सूरत, गुजरात', action: 'को विड्रॉल मिला', amount: '₹8,400', payment: 'Paytm UPI', time: '2 मिनट पहले', emoji: '⚡' },
  { name: 'संजय देशमुख', city: 'नागपुर, महाराष्ट्र', action: 'ने पैसे जोड़े', amount: '₹500', payment: 'Instant UPI', time: '3 मिनट पहले', emoji: '🎮' },
  { name: 'मुथुवेल आर.', city: 'मदुरै, तमिलनाडु', action: 'को विड्रॉल मिला', amount: '₹22,000', payment: 'Bhim UPI', time: '4 मिनट पहले', emoji: '💰' },
  { name: 'सुरेश कुमार', city: 'कानपुर, उत्तर प्रदेश', action: 'ने कल्याण क्लोज़ जीता', amount: '₹19,000', payment: 'GPay', time: '5 मिनट पहले', emoji: '👑' },
  { name: 'प्रवीण जी.', city: 'बेंगलुरु', action: 'ने मटका टोकन जोड़े', amount: '₹100', payment: 'PhonePe', time: '6 मिनट पहले', emoji: '⭐' },
  { name: 'दीपक सोलंकी', city: 'अहमदाबाद', action: 'को मिला बम्पर जैकपॉट विड्रॉल', amount: '₹1,40,000', payment: 'Bank Direct', time: '8 मिनट पहले', emoji: '🏆' },
];

export default function WithdrawalTicker({ currentLang }: WithdrawalTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Pick language registry
  const records = currentLang === 'en' ? ACTIVITIES_EN : ACTIVITIES_HI;

  useEffect(() => {
    if (isDismissed) return;

    // Slide-in after 2 seconds on initial mount
    const initialShowTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Loop ticker transition: show, hide, swap record, show
    const intervalTimer = setInterval(() => {
      setIsVisible(false); // Hide

      setTimeout(() => {
        // Swap index
        setCurrentIndex((prev) => (prev + 1) % records.length);
        setIsVisible(true); // Show new item
      }, 800); // Wait for fade out animation before changing index

    }, 7000); // Speed: every 7 seconds

    return () => {
      clearTimeout(initialShowTimer);
      clearInterval(intervalTimer);
    };
  }, [isDismissed, records.length]);

  const currentRecord = records[currentIndex] || records[0];

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-24 sm:bottom-8 left-4 right-4 sm:right-auto sm:max-w-md z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      {/* Container in Golden-Border Royal Premium styling to prompt download */}
      <div className="bg-neutral-900 border-2 border-amber-400 text-white rounded-2xl p-4 shadow-[0_12px_40px_rgba(245,158,11,0.3)] relative overflow-hidden group">
        
        {/* Glowing visual effect lines on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-rose-600/10 pointer-events-none"></div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Content Row */}
        <div className="flex items-start space-x-3 pr-4">
          
          {/* Animated Glow Badge representing Live Status */}
          <div className="relative shrink-0 pt-0.5">
            <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-60"></div>
            <div className="h-9 w-9 rounded-full bg-emerald-600 border border-emerald-400 flex items-center justify-center text-white text-sm font-semibold relative">
              <ShieldCheck className="h-5 w-5 text-yellow-300 stroke-[2.5]" />
            </div>
          </div>

          {/* Record text lines */}
          <div className="flex-grow space-y-1">
            <div className="flex items-center space-x-1.5 flex-wrap">
              <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                {currentLang === 'en' ? 'SUCCESSFUL TRANSACTIONS' : 'सफल भुगतान'}
              </span>
              <span className="text-[9px] text-neutral-400 font-bold font-mono">{currentRecord.time}</span>
            </div>

            <p className="text-xs font-sans text-neutral-100 font-bold leading-relaxed">
              <span className="text-amber-300 font-black">{currentRecord.name}</span> ({currentRecord.city}){' '}
              <span className="text-neutral-300 font-semibold">{currentRecord.action}</span>{' '}
              <span className="text-2xl font-black font-mono text-[#10b981] block sm:inline-block leading-none drop-shadow-[0_2px_8px_rgba(16,185,129,0.25)]">
                {currentRecord.amount}
              </span>{' '}
              {currentLang === 'en' ? 'to' : 'के द्वारा'}{' '}
              <span className="text-white font-extrabold underline decoration-amber-400 decoration-2">
                {currentRecord.payment}
              </span>{' '}
              {currentRecord.emoji}
            </p>

            {/* Quick interactive download prompt inside notification */}
            <div className="pt-2">
              <a
                href="https://sara567.info/Sara%20567.apk"
                download
                referrerPolicy="no-referrer"
                className="inline-flex items-center space-x-1 text-[10px] font-black font-display text-amber-300 uppercase tracking-wider group-hover:text-amber-200"
              >
                <span>{currentLang === 'en' ? 'Play & Win Like Him Now' : 'आप भी अभी खेलें और जीतें'}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 stroke-[3.5]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
