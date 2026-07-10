import { useState } from 'react';
import { Star, ShieldAlert, CheckCircle2, ThumbsUp, ArrowRight, Download, Users } from 'lucide-react';
import { LanguageCode } from '../translations';

interface CustomerReviewsProps {
  currentLang: LanguageCode;
}

interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  winAmount?: string;
  market?: string;
}

const LOCALIZED_REVIEWS: Record<LanguageCode, {
  heading: string;
  span: string;
  desc: string;
  ratingText: string;
  totalReviews: string;
  verifiedLabel: string;
  depositBadge: string;
  withdrawalBadge: string;
  statsTitle: string;
  statsDesc: string;
  reviewerCta: string;
  reviews: ReviewItem[];
}> = {
  hi: {
    heading: 'हमारे विजेता खिलाड़ियों की',
    span: 'सच्ची जुबानी',
    desc: '45,000+ से अधिक सक्रिय भारतीय मटका खिलाड़ियों द्वारा 4.9★ स्टार की उत्कृष्ट रेटिंग। असली विश्वास, सबसे तेज भुगतान।',
    ratingText: 'उत्कृष्ट 4.9/5 रेटिंग',
    totalReviews: '45.2K+ वेरिफाइड रिव्यूज',
    verifiedLabel: 'वेरिफाइड खिलाड़ी',
    depositBadge: 'न्यूनतम ₹100 जमा',
    withdrawalBadge: '5 मिनट तुरंत निकासी',
    statsTitle: '98.7% संतुष्टि दर',
    statsDesc: 'सुरक्षित भुगतान गेटवे और दैनिक सफल निकासी रीलोड।',
    reviewerCta: 'आप भी आज ही असली मटका ऐप डाउनलोड करें और जीत का हिस्सा बनें!',
    reviews: [
      {
        name: 'सुमित पाठक',
        location: 'ग्वालियर, मध्य प्रदेश',
        rating: 5,
        date: 'आज',
        comment: 'सच्ची मटका ऐप! मैंने सिर्फ ₹100 से शुरुआत की थी और कल्याण जोड़ी में ₹9,500 जीते। सबसे अच्छी बात यह है कि पैसा सीधे केवल 5 मिनट में मेरे PhonePe बैंक खाते में सुरक्षित आ गया।',
        winAmount: '₹9,500 जीता',
        market: 'Kalyan Night'
      },
      {
        name: 'अनिल महाजन',
        location: 'कल्याण, महाराष्ट्र',
        rating: 5,
        date: 'कल',
        comment: 'कल्याण की बिलकुल सटीक लाइव टाइमिंग और रिजल्ट्स मिलते हैं। मैंने कई ऐप्स आजमाई हैं लेकिन सारा 567 की गति सबसे अलग है। ₹100 जमा करने भी तुरंत रिफ्लेक्ट हो जाते हैं। विथड्रॉल २४ घंटे कभी भी लें, तुरंत आता है।',
        winAmount: '₹22,000 जीता',
        market: 'Kalyan'
      },
      {
        name: 'दीपक सोलंकी',
        location: 'अहमदाबाद, गुजरात',
        rating: 5,
        date: '2 दिन पहले',
        comment: 'बाजार के सभी मटका ऐप्स में से सर्वश्रेष्ठ! सिंगल डिजिट पर 9.5x और हाफ संगम पर 1000 गुना सीधा प्रॉफिट रेट है। विथड्रॉल के वक्त कोई फालतू वेरिफिकेशन का झंझट नहीं है। 100% जेन्युइन ऐप।',
        winAmount: '₹38,000 जीता',
        market: 'Rajdhani Night'
      },
      {
        name: 'राजेश कुमार',
        location: 'कानपुर, उत्तर प्रदेश',
        rating: 5,
        date: '3 दिन पहले',
        comment: 'मुझे इसका गेमिंग इंटरफ़ेस बहुत पसंद आया। यह बहुत तेज़ है और हैंग नहीं होता। न्यूनतम डिपाजिट केवल 100 रुपये है जिससे कोई भी सुरक्षित खेल सकता है। डाउनलोड करके खेलना ही असली मज़ा है।',
        winAmount: '₹5,000 जीता',
        market: 'Main Bazar'
      },
      {
        name: 'व्यंकटेश एन.',
        location: 'बेंगलुरु, कर्नाटक',
        rating: 5,
        date: '4 दिन पहले',
        comment: 'सारा 567 ऐप एकदम विश्वसनीय प्रणाली पर काम करता है। मेरे भाई ने मुझे इसके बारे में बताया था, अब हम दोनों रोजाना खेलते हैं। कोई फ्रॉड नहीं, समय पर पेमेंट।',
        winAmount: '₹14,500 जीता',
        market: 'Milan Day'
      },
      {
        name: 'आर. मुथुवेल',
        location: 'मदुरै, तमिलनाडु',
        rating: 4,
        date: '6 दिन पहले',
        comment: 'रात को 12 बजे भी बैंक विथड्रॉल सफलतापूर्वक काम करता है जो सच में लाजवाब है। सिंगल पन्ना और डबल पन्ना मटका गुणांक पूरे बाजार में सबसे ज्यादा इसी ऐप पर मिलता है।',
        winAmount: '₹8,200 जीता',
        market: 'Madhur Night'
      }
    ]
  },
  en: {
    heading: 'Real Player Stories From',
    span: 'Our Winners',
    desc: 'Rated 4.9★ Stars by over 45,000+ active Indian Matka enthusiasts. Deep trust, immediate dispatch.',
    ratingText: 'Excellent 4.9/5 Rating',
    totalReviews: '45.2K+ Verified Reviews',
    verifiedLabel: 'Verified Player',
    depositBadge: 'Min Deposit ₹100',
    withdrawalBadge: '5-Min Instant Payout',
    statsTitle: '98.7% Satisfaction Rate',
    statsDesc: 'Highly secured payment portals & millions in daily lightning clearances.',
    reviewerCta: 'Download India\'s original VIP matka application today and join the winning circle!',
    reviews: [
      {
        name: 'Sumit Pathak',
        location: 'Gwalior, MP',
        rating: 5,
        date: 'Today',
        comment: 'Truly honest matka app! I started with just ₹100 deposit and won ₹9,500 in Kalyan Jodi Digit. The cash was transferred directly to my PhonePe UPI within exactly 5 minutes.',
        winAmount: 'Won ₹9,500',
        market: 'Kalyan Night'
      },
      {
        name: 'Anil Mahajan',
        location: 'Kalyan, Maharashtra',
        rating: 5,
        date: 'Yesterday',
        comment: 'Gives 100% accurate live timings and game charts. I have tried many platforms but Sara 567 is extremely fast. Deposits clear instantly, and withdrawals operate 24 hours seamlessly.',
        winAmount: 'Won ₹22,000',
        market: 'Kalyan'
      },
      {
        name: 'Deepak Solanki',
        location: 'Ahmedabad, Gujarat',
        rating: 5,
        date: '2 Days Ago',
        comment: 'Hands down the best Matka system available. Payout multipliers (9.5x on single, 95x on jodi) are highly rewarding. Zero delays, direct UPI dispatch, no hidden processing files.',
        winAmount: 'Won ₹38,000',
        market: 'Rajdhani Night'
      },
      {
        name: 'Rajesh Kumar',
        location: 'Kanpur, UP',
        rating: 5,
        date: '3 Days Ago',
        comment: 'Love the premium black layout and fast gaming charts. Minimum deposit limit of select ₹100 means anyone can practice without major risk. Absolute masterpiece.',
        winAmount: 'Won ₹5,000',
        market: 'Main Bazar'
      },
      {
        name: 'Venkatesh N.',
        location: 'Bengaluru, KA',
        rating: 5,
        date: '4 Days Ago',
        comment: 'Sara 567 operates on a highly secure verified platform. My brother recommended it, and we both play here every live market. Best app!',
        winAmount: 'Won ₹14,500',
        market: 'Milan Day'
      },
      {
        name: 'R. Muthuvel',
        location: 'Madurai, TN',
        rating: 5,
        date: '6 Days Ago',
        comment: 'Payout clears in minutes even at midnight. The single panna and double panna game multipliers offered on Sara are unmatched across global servers.',
        winAmount: 'Won ₹8,200',
        market: 'Madhur Night'
      }
    ]
  },
  mr: {
    heading: 'आमच्या विजेत्यांच्या यशोगाथा',
    span: 'खरेखुरे रिव्ह्यूज',
    desc: '४५,०००+ हून अधिक सक्रिय भारतीय खेळाडूंकडून ४.९★ रेटिंग उत्कृष्ट प्रतिसाद. जलद पेमेंट, १००% सुरक्षितता.',
    ratingText: 'उत्कृष्ट ४.९/५ स्टार',
    totalReviews: '४५,२००+ वेरिफाइड रिव्ह्यूज',
    verifiedLabel: 'वेरिफाइड खेळाडू',
    depositBadge: 'किमान ₹१०० डिपॉझिट',
    withdrawalBadge: '५ मिनिट विथड्रॉल प्रणाली',
    statsTitle: '९८.७% समाधान दर',
    statsDesc: 'अतिशय सुरक्षित पेमेंट गेटवे आणि दररोज लाखो रुपयांचे यशस्वी स्वयंचलित पेमेंट्स.',
    reviewerCta: 'आजच मूळ सारा ५६७ अॅप डाऊनलोड करा आणि मोठी रक्कम जिंकायला सुरुवात करा!',
    reviews: [
      {
        name: 'सुमित पाठक',
        location: 'ग्वाल्हेर, म.प्र.',
        rating: 5,
        date: 'आज',
        comment: 'एकदम खरी मटका अॅप! मी अवघ्या ₹१०० डिपॉझिटने सुरुवात केली आणि कल्याण जोडी नंबरमध्ये थेट ₹९,५०० जिंकलो. ५ मिनिटात सर्व पैसे माझ्या युपीआय खात्यात जमा झाले.',
        winAmount: '₹९,५०० जिंकले',
        market: 'Kalyan Night'
      },
      {
        name: 'अनिल महाजन',
        location: 'कल्याण, महाराष्ट्र',
        rating: 5,
        date: 'काल',
        comment: 'अॅपवर कल्याण आणि इतर बाजारांची एकदम अचूक वेळ पाहायला मिळते. पेमेंट सिस्टीम अतिशय वेगवान आहे, बँक डिटेल्स टाकल्यावर अवघ्या काही वेळातच विथड्रॉल जमा होते.',
        winAmount: '₹२२,००० जिंकले',
        market: 'Kalyan'
      }
    ]
  },
  gu: {
    heading: 'અમારા વિજેતાઓના સાચા',
    span: 'અભિપ્રાય અને રિવ્યૂ',
    desc: '૪૫,૦૦૦+ થી વધુ ખેલાડીઓ દ્વારા ૪.૯★ સ્ટાર રેટિંગ. વિશ્વાસપાત્ર વહીવટ અને સુપરફાસ્ટ બેન્કિંગ સુવિધા.',
    ratingText: 'શ્રેષ્ઠ 4.9/5 રેટિંગ',
    totalReviews: '45K+ વેરિફાઇડ યુઝર્સ',
    verifiedLabel: 'વેરિફાઇડ પ્લેયર',
    depositBadge: 'ઓછામાં ઓછા ₹100 જમા',
    withdrawalBadge: '૫ મિનિટમાં પૈસા ખાતામાં',
    statsTitle: '98.7% ગ્રાહક સંતોષ',
    statsDesc: 'અત્યંત સુરક્ષિત ઓનલાઇન પેમેન્ટ ગેટવે અને ૨૪ કલાક ઝડપી ઓટોમેટિક કેશઆઉટ.',
    reviewerCta: 'આજે જ ઑરિજિનલ એપ ડાઉનલોડ કરો અને તમારા પોતાના નસીબના વિજેતા બનો!',
    reviews: [
      {
        name: 'સુમિત પાઠક',
        location: 'ગ્વાલિયર, એમપી',
        rating: 5,
        date: 'આજે',
        comment: 'ખૂબ જ અદભુત મટકા એપ છે! મેં ફક્ત ₹100 થી શરૂઆત કરીને કલ્યાણ જોડી રમતમાં ₹9,500 જીત્યા. મિનિટોની અંદર પૈસા મારા ગૂગલ પે એકાઉન્ટમાં આવી ગયા.',
        winAmount: '₹9,500 જીત્યા',
        market: 'Kalyan Night'
      },
      {
        name: 'અનિલ મહાજન',
        location: 'કલ્યાણ, મહારાષ્ટ્ર',
        rating: 5,
        date: 'ગઈકાલે',
        comment: 'રોજિંદા ફાસ્ટ રિઝલ્ટ અને ચાર્ટ અહીં સચોટ જોવા મળે છે. ડિપોઝીટ અને વિધ્ડ્રોઅલ માત્ર ૫ મિનિટમાં પુરા થાય છે, કોઈ જ ટેન્શન નથી.',
        winAmount: '₹22,000 જીત્યા',
        market: 'Kalyan'
      }
    ]
  },
  kn: {
    heading: 'ನಮ್ಮ ವಿಜೇತ ಆಟಗಾರರ ಸತ್ಯ',
    span: 'ಅಭಿಪ್ರಾಯಗಳು',
    desc: '೪೫,೦೦೦+ ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಗ್ರಾಹಕರಿಂದ ೪.೯★ ಅತ್ಯುತ್ತಮ ರೇಟಿಂಗ್ಸ್. ವಿಶ್ವಾಸಾರ್ಹ ಸುರಕ್ಷಿತ ವ್ಯವಸ್ಥೆ.',
    ratingText: 'ಉತ್ತಮ ರೇಟಿಂಗ್ 4.9/5',
    totalReviews: '45K+ ದೃಢೀಕೃತ ವಿಮರ್ಶೆಗಳು',
    verifiedLabel: 'ದೃಢೀಕೃತ ಗ್ರಾಹಕರು',
    depositBadge: 'ಕನಿಷ್ಠ ಡೆಪಾಸಿಟ್ ಕೇವಲ ₹100',
    withdrawalBadge: '೫ ನಿಮಿಷದಲ್ಲಿ ವೇಗವಾಗಿ ವರ್ಗಾವಣೆ',
    statsTitle: '98.7% ತೃಪ್ತಿ ದರ',
    statsDesc: 'ಸುರಕ್ಷಿತ ಯುಪಿಐ ಪಾವತಿ ವಿಧಾನಗಳು ಮತ್ತು ಭಾರಿ ದೊಡ್ಡ ಮೊತ್ತದ ಗೆಲುವುಗಳ ನಿಖರ ದ್ರವ್ಯತೆ.',
    reviewerCta: 'ನೈಜ ಹಾಗೂ ಅಧಿಕೃತ ಸಾರಾ ೫೬೭ ಆಪ್ ಅನ್ನು ತಕ್ಷಣ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ!',
    reviews: [
      {
        name: 'ಸುಮಿತ್ ಪಾಠಕ್',
        location: 'ಗ್ವಾಲಿಯರ್',
        rating: 5,
        date: 'ಇಂದು',
        comment: 'ನಿಜವಾಗಿಯೂ ಅದ್ಭುತ ಮಟ್ಕಾ ಆಪ್. ನಾನು ಬರೀ ₹100 ಇನ್ವೆಸ್ಟ್ ಮಾಡಿ ಜೋಡಿ ಸಂಖ್ಯೆಯಲ್ಲಿ ₹9,500 ಗೆದ್ದೆ. ಗೆದ್ದ ಹಣ 5 ನಿಮಿಷದಲ್ಲೇ ಯುಪಿಐ ಮೂಲಕ ನನಗೆ ಸಿಕ್ಕಿದೆ.',
        winAmount: '₹9,500 ಗೆದ್ದಿದ್ದಾರೆ',
        market: 'Kalyan Night'
      }
    ]
  },
  ta: {
    heading: 'எங்கள் வெற்றியாளர்களின்',
    span: 'உண்மையான அனுபவங்கள்',
    desc: '45,000+ செயலில் உள்ள வீரர்களால் 4.9★ என மதிப்பிடப்பட்டது. அதிவேக செயல்பாடு மற்றும் நம்பகமான ஆதரவு.',
    ratingText: 'சிறந்த மதிப்பீடு 4.9/5',
    totalReviews: '45K+ சரிபார்க்கப்பட்ட பயனர்கள்',
    verifiedLabel: 'சரிபார்க்கப்பட்ட பயனர்',
    depositBadge: 'குறைந்தபட்ச வைப்பு ₹100',
    withdrawalBadge: '5 நிமிடங்களில் கணக்கில் பணவரவு',
    statsTitle: '98.7% வாடிக்கையாளர் திருப்தி',
    statsDesc: 'உயர் பாதுகாப்பு குறியாக்கங்களுடன் கூடிய பரிவர்த்தனைகள்.',
    reviewerCta: 'அசல் சாரா 567 ஆண்ட்ராய்டு செயலியை இப்போதே பதிவிறக்கி நீங்களும் வெற்றியாளராக மாறுங்கள்!',
    reviews: [
      {
        name: 'சுமித் பதக்',
        location: 'குவாலியர், எம்பி',
        rating: 5,
        date: 'இன்று',
        comment: 'மிகவும் நேர்மையான செயலாகும். வித்ரா கோரிக்கை வைத்த சில நிமிடங்களில் பணம் நேரடியாக எனது போன்பே கணக்கில் வரவு வைக்கப்பட்டது.',
        winAmount: '₹9,500 வென்றார்',
        market: 'Kalyan Night'
      }
    ]
  },
  te: {
    heading: 'విజేతల అనుభవాలు',
    span: 'తమ సొంత మాటల్లో',
    desc: '45,000+ కంటే ఎక్కువ మంది యాక్టివ్ మట్కా ఆటగాళ్ళ చేత 4.9★ అత్యుత్తమ రేటింగ్. వేగవంతమైన పేమెంట్స్.',
    ratingText: 'అద్భుతమైన 4.9/5 రేటింగ్',
    totalReviews: '45K+ ధృవీకరించబడిన రివ్యూలు',
    verifiedLabel: 'వెరిఫైడ్ ప్లేయర్',
    depositBadge: 'కనిష్ట డిపాజిట్ ₹100',
    withdrawalBadge: '5 నిమిషాల్లో విత్‌డ్రా చెల్లింపు',
    statsTitle: '98.7% కస్టమర్ సంతృప్తి',
    statsDesc: 'భద్రమైన డిపాజిట్ పద్ధతులు మరియు వేగవంతమైన మొబైల్ బ్యాంకింగ్ క్లియరెన్స్.',
    reviewerCta: 'ఈరోజే అఫీషియల్ సారా మట్కా యాప్‌ని డౌన్‌లోడ్ చేసుకొని విన్నింగ్ గ్రూప్‌లో చేరండి!',
    reviews: [
      {
        name: 'సుమిత్ పాఠక్',
        location: 'గ్వాలియర్, ఎంపి',
        rating: 5,
        date: 'నేడు',
        comment: 'నిజమైన మరియు నమ్మకమైన మట్కా అప్లికేషన్. నేను కేవలం ₹100 తో ఆడి కళ్యాణ్ మార్కెట్లో ₹9,500 గెలుచుకున్నాను. పేమెంట్ నిమిషాల్లో అయిపోయింది.',
        winAmount: '₹9,500 గెలుపొందారు',
        market: 'Kalyan Night'
      }
    ]
  }
};

export default function CustomerReviews({ currentLang }: CustomerReviewsProps) {
  // Grab localized bundle. Fallback to English if not defined.
  const data = LOCALIZED_REVIEWS[currentLang] || LOCALIZED_REVIEWS.hi;
  const reviewsList = data.reviews.length ? data.reviews : LOCALIZED_REVIEWS.hi.reviews;

  // Track simple like metrics
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [likedList, setLikedList] = useState<Record<number, boolean>>({});

  const handleLike = (idx: number) => {
    if (likedList[idx]) return; // Stop double voting
    setLikedList(prev => ({ ...prev, [idx]: true }));
    setLikes(prev => ({ ...prev, [idx]: (prev[idx] || 0) + 1 }));
  };

  return (
    <section id="reviews" className="relative py-20 bg-white border-t border-neutral-150 overflow-hidden">
      {/* Premium glowing background highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-red-400/2 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-amber-50 border border-amber-250 px-3.5 py-1.5 rounded-full mb-3.5 shadow-5xs">
            <span className="text-amber-800 text-[10px] font-mono font-black uppercase tracking-widest flex items-center">
              ⭐ {data.ratingText}
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-none">
            {data.heading}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 via-rose-600 to-red-700 font-extrabold">
              {data.span}
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-semibold">
            {data.desc}
          </p>
        </div>

        {/* Global summary stats bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Box 1: Verified Badge Summary */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 border border-neutral-200 p-6 rounded-3xl flex items-center space-x-4">
            <div className="h-14 w-14 rounded-2xl bg-amber-100 border border-amber-200/50 flex items-center justify-center text-amber-600 font-black shrink-0 text-xl shadow-2xs">
              ★ 4.9
            </div>
            <div>
              <span className="block text-neutral-900 font-black text-base">{data.totalReviews}</span>
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider font-mono">
                {currentLang === 'en' ? 'Verified Players feedback' : 'असली और प्रमाणित खिलाड़ी रिव्यूज'}
              </span>
            </div>
          </div>

          {/* Box 2: Instant limits */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 border border-neutral-200 p-6 rounded-3xl flex items-center space-x-4">
            <div className="h-14 w-14 rounded-2xl bg-red-50 border border-red-150 flex items-center justify-center text-red-600 font-black shrink-0 text-lg shadow-2xs">
              ₹100
            </div>
            <div>
              <span className="block text-neutral-900 font-black text-base">{data.depositBadge}</span>
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider font-mono">
                {data.withdrawalBadge}
              </span>
            </div>
          </div>

          {/* Box 3: Satisfaction score */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 border border-neutral-200 p-6 rounded-3xl flex items-center space-x-4">
            <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 font-black shrink-0 text-lg shadow-2xs">
              98%
            </div>
            <div>
              <span className="block text-neutral-900 font-black text-base">{data.statsTitle}</span>
              <span className="text-xs text-neutral-400 font-mono font-bold uppercase tracking-wider">
                {data.statsDesc}
              </span>
            </div>
          </div>

        </div>

        {/* Customer reviews feed layout block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review, idx) => (
            <div
              key={idx}
              id={`idx_testimonial_${idx}`}
              className="bg-neutral-50/70 hover:bg-white border border-neutral-200/80 hover:border-amber-300 hover:shadow-md p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-neutral-900 text-sm font-black font-display flex items-center gap-1">
                      {review.name}
                      <span className="inline-block text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-md font-bold text-center">
                        ✓ {data.verifiedLabel}
                      </span>
                    </h4>
                    <span className="text-[10px] text-neutral-400 font-mono font-bold block">{review.location}</span>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current shrink-0" />
                    ))}
                  </div>
                </div>

                {/* Sub-badge win tags if defined */}
                {review.winAmount && (
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-extrabold bg-amber-100/60 text-amber-900 border border-amber-200/50 px-2 py-1 rounded-lg w-max shadow-3xs">
                    <span>🏆 {review.winAmount}</span>
                    <span className="text-neutral-400">|</span>
                    <span>{review.market}</span>
                  </div>
                )}

                {/* Testimonial Core Body */}
                <p className="text-neutral-600 font-sans text-xs sm:text-sm leading-relaxed font-semibold font-sans italic pt-1">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom vote helpful bar */}
              <div className="border-t border-neutral-200/50 pt-4.5 mt-5 flex justify-between items-center text-[10px] font-bold font-mono text-neutral-400">
                <span>{currentLang === 'en' ? `Posted ${review.date}` : `रिव्यू पोस्ट: ${review.date}`}</span>
                
                <button
                  onClick={() => handleLike(idx)}
                  disabled={likedList[idx]}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-neutral-250 hover:bg-neutral-100 transition-colors cursor-pointer ${
                    likedList[idx] ? 'text-emerald-700 bg-emerald-50 border-emerald-150' : 'text-neutral-500'
                  }`}
                >
                  <ThumbsUp className="h-3 w-3" />
                  <span>{likedList[idx] ? 'Liked!' : 'Helpful'} ({likes[idx] || (8 + idx * 3)})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic call to action row */}
        <div className="mt-12 bg-gradient-to-r from-red-700 via-red-600 to-rose-700 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_8px_30px_rgba(224,36,36,0.25)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          <div className="text-center md:text-left space-y-2 relative z-10 max-w-xl">
            <h3 className="font-display text-lg sm:text-xl font-black text-white leading-none">
              {currentLang === 'en' ? 'Start Playing Today with Just ₹100' : 'केवल ₹100 के साथ आज ही शुरुआत करें!'}
            </h3>
            <p className="text-rose-100 font-sans text-xs sm:text-sm font-semibold">
              {data.reviewerCta}
            </p>
          </div>

          <a
            href="https://sara567.info/Sara567.apk"
            download
            referrerPolicy="no-referrer"
            className="relative shrink-0 flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-neutral-900 hover:scale-[1.03] transition-all font-black px-6 py-4.5 rounded-2xl text-xs uppercase tracking-wider cursor-pointer border border-yellow-500 shadow-md group/tag"
          >
            <Download className="h-4 w-4 stroke-[2.5] text-neutral-900 group-hover/tag:animate-bounce" />
            <span>{currentLang === 'en' ? 'Download Original APK (12MB)' : 'ओरिजनल ऐप डाउनलोड करें'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
