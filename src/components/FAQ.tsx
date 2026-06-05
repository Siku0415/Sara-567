import { useState } from 'react';
import { HelpCircle, ChevronRight, Download, Shield, Smartphone } from 'lucide-react';
import { TRANSLATIONS, LanguageCode } from '../translations';

// High-quality localized Q&A matching the requested Minimum Deposit limits and 24-Hour Withdrawal availability
const FAQ_LOCALIZATION: Record<LanguageCode, { q: string; a: string }[]> = {
  en: [
    {
      q: 'How do I download and install the Sara 567 application?',
      a: 'Simply click the "Download App Now" button to load the lightweight Android APK. Please enable "Allow installation from Unknown Sources" in your device settings before opening.'
    },
    {
      q: 'What is the minimum deposit and withdrawal limit?',
      a: 'Our minimum deposit is only ₹100, which allows players to start small. Withdrawals are handled 24/7 with a minimum limit of ₹500 directly dispatched over GPay, PhonePe, or UPI.'
    },
    {
      q: 'How long do withdrawals take to settle?',
      a: 'Withdrawals are active 24 hours a day and are cleared within 5 to 15 minutes of requesting. No manual delays or weekend queues!'
    },
    {
      q: 'Are these game rates guaranteed on all Kalyan markets?',
      a: 'Yes, our premium rates (e.g., 10 Ka 95 for Single Digit, 10 Ka 950 for Jodi Digit) apply to all 15+ live markets uniformly.'
    },
    {
      q: 'How do I contact customer support if I run into any issues?',
      a: 'Our staff are available 24 hours. Just click on WhatsApp Support or Call Now to speak with a direct support assistant.'
    }
  ],
  hi: [
    {
      q: 'मैं सारा 567 ऐप कैसे डाउनलोड और इंस्टॉल करूं?',
      a: 'लाइटवेट एंड्रॉइड एपीके (APK) डाउनलोड करने के लिए "अभी ऐप डाउनलोड करें" बटन पर क्लिक करें। डाउनलोड पूरा होने पर अपने फोन की सेटिंग में "अज्ञात स्रोतों से इंस्टॉल करने" की अनुमति दें।'
    },
    {
      q: 'न्यूनतम जमा (Deposit) और निकासी (Withdrawal) की सीमा क्या है?',
      a: 'हमारा न्यूनतम जमा केवल ₹100 है जिससे आप बिना किसी झंझट के शुरुआत कर सकते हैं। निकासी 24 घंटे चालू है, जिसमें न्यूनतम सीमा ₹500 है जो सीधे आपके UPI खाते में भेजी जाती है।'
    },
    {
      q: 'विथड्रॉल सेटल होने में कितना समय लगता है?',
      a: 'विथड्रॉल सेवाएं २४ घंटे चालू हैं और अनुरोध करने के बाद सिर्फ 5 से 15 मिनट के भीतर पैसा सीधे आपके बैंक खाते में ट्रांसफर कर दिया जाता है।'
    },
    {
      q: 'क्या ये दरें सभी मटका बाजारों पर लागू हैं?',
      a: 'हाँ, हमारी प्रीमियम दरें (जैसे सिंगल डिजिट के लिए 9.5 गुना, जोड़ी के लिए 95 गुना) सभी 15 से अधिक लाइव बाजारों पर समान रूप से लागू होती हैं।'
    },
    {
      q: 'ग्राहक सहायता से कैसे संपर्क करें?',
      a: 'हमारी टीम चौबीसों घंटे सेवाएं प्रदान करती है। आप सीधे व्हाट्सएप बटन या कॉल आइकन पर क्लिक कर हमारे सहायता सहायक से बात कर सकते हैं।'
    }
  ],
  mr: [
    {
      q: 'मी सारा 567 अॅप कशा प्रकारे डाऊनロード करू?',
      a: '"आता अॅप डाउनलोड करा" बटनावर क्लिक करून अधिकृत मटका अॅप डाऊनलोड करा. इन्स्टॉल करण्यापूर्वी मोबाईल सेटिंग्जमध्ये "Unknown Sources" चालू करा.'
    },
    {
      q: 'किमान डिपॉझिट आणि विथड्रॉल मर्यादा किती आहे?',
      a: 'किमान डिपॉझिट फक्त ₹१०० आहे, जेणेकरून तुम्ही कमीत कमी पैशात सुरुवात करू शकता. हि विथड्रॉल सुविधा २४ तास उपलब्ध आहे (किमान मर्यादा ₹५००) जी थेट युपीआयवर दिली जाते.'
    },
    {
      q: 'पैसे काढल्यावर खात्यात येण्यासाठी किती वेळ लागतो?',
      a: 'विथड्रॉल प्रणाली २४ तास थेट स्वयंचलित काम करते. तुम्ही विनंती केल्यावर ५ ते १५ मिनिटांच्या आत पैसे खात्यात पाठवले जातात.'
    },
    {
      q: 'हे गेम रेट सर्व मटका मार्केटसाठी लागू आहेत का?',
      a: 'होय, आमचे उत्तम दर (सिंगल डिजिटसाठी ९.५ पट, जोडीसाठी ९५ पट) सर्व १५ पेक्षा जास्त लाईव्ह मटका बाजारांसाठी सारखे आहेत.'
    },
    {
      q: 'समस्या असल्यास मदतीसाठी कुठे संपर्क साधावा?',
      a: 'आमची थेट फोन सहाय्यता आणि व्हॉट्सअॅप चॅट २४ तास सुरु आहेत. खालील सहाय्यता बटनांवर क्लिक करून अडचण त्वरित सोडवू शकता.'
    }
  ],
  gu: [
    {
      q: 'સારા 567 એપ્લિકેશન કેવી રીતે ડાઉનલોડ કરું?',
      a: 'એપ્લિકેશન ડાઉનલોડ બટન દબાવીને સત્તાવાર ફાઈલ ફોનમાં મેળવો. ઇન્સ્ટોલેશન શરૂ કરતા પહેલા સેટિંગ્સમાં "Unknown Sources" ચાલુ કરવાની ખાતરી કરો.'
    },
    {
      q: 'ન્યૂનતમ ડિપોઝિટ અને વિથડ્રોઅલ લિમિટ કેટલી છે?',
      a: 'ખેલાડીઓ આસાનીથી રમી શકે તે માટે લઘુત્તમ ડિપોઝિટ માત્ર ₹100 છે. વિથડ્રોઅલ સેવા દિવસ-રાત 24 કલાક ચાલુ રહે છે અને ઓછામાં ઓછા ₹500 સીધા UPI/ખાતામાં મોકલી શકાય છે.'
    },
    {
      q: 'વિથડ્રોઅલ ખાતામાં આવતા કેટલો સમય લાગે છે?',
      a: 'અમારી બેંકિંગ પ્રણાલી ૨૪ કલાક ઓટોમેટિક કામ કરે છે. રિક્વેસ્ટ કર્યાના માત્ર 5 થી 15 મિનિટની અંદર પૈસા ત્વરિત સીધા પ્રાપ્ત થઈ જાય છે.'
    },
    {
      q: 'શું રમત ના દરો બધા લાઈવ માર્કેટમાં એક સમાન મળવાપાત્ર છે?',
      a: 'હા, સિંગલ માટે 9.5 ગણું અને જોડી માટે 95 ગણું તમામ 15+ મટકા માર્કેટ બજારોમાં સમાન લાગુ પડે છે.'
    },
    {
      q: 'કોઈ પણ ફરિયાદના નિવારણ માટે સપોર્ટ ટીમનો સંપર્ક કેવી રીતે કરવો?',
      a: 'અમારા નિષ્ણાતો ચોવીસ કલાક ઉપલબ્ધ છે. ડાયરેક્ટ વોટ્સએપ કે કૉલ બટન દબાવી ત્વરિત વાત કરો.'
    }
  ],
  kn: [
    {
      q: 'ಸಾರಾ 567 ಆ್ಯಪ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದು ಹೇಗೆ?',
      a: '"ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್" ಬಟನ್ ಪ್ರೆಸ್ ಮಾಡಿ ಅಧಿಕೃತ APK ಪಡೆದುಕೊಳ್ಳಿ. ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಮೊದಲು ಫೋನ್ ಸೆಟ್ಟಿಂಗ್ಸ್‌ನಲ್ಲಿ "Unknown Sources" ಸಕ್ರಿಯಗೊಳಿಸಲು ಮರೆಯಬೇಡಿ.'
    },
    {
      q: 'ಕನಿಷ್ಠ ಡೆಪಾಸಿಟ್ ಹಾಗೂ ವಿತ್‌ಡ್ರಾ ಮಿತಿ ಎಷ್ಟು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ?',
      a: 'ಕನಿಷ್ಠ ಡೆಪಾಸಿಟ್ ಕೇವಲ ₹100 ಆಗಿದೆ ಹಾಗೂ ಹಿಂಪಡೆಯಲು ಕನಿಷ್ಠ ಮಿತಿ ₹500 ಆಗಿದ್ದು ಅದು 24 ಗಂಟೆಯೂ ನೇರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.'
    },
    {
      q: 'ವಿತ್‌ಡ್ರಾ ಮಾಡಿದ ಎಷ್ಟು ಹೊತ್ತಿನಲ್ಲಿ ಹಣ ವರ್ಗಾವಣೆಯಾಗುತ್ತದೆ?',
      a: 'ಹಿಂತೆಗೆದುಕೊಳ್ಳುವ ಪ್ರಕ್ರಿಯೆ 24 ಗಂಟೆಯೂ ಆಟೋಮ್ಯಾಟಿಕ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ನೀವು ರಿಕ್ವೆಸ್ಟ್ ಕಳುಹಿಸಿದ 5 ರಿಂದ 15 ನಿಮಿಷಗಳಲ್ಲಿ ಹಣ ನೇರವಾಗಿ ಜಮೆಯಾಗುತ್ತದೆ.'
    },
    {
      q: 'ಈ ಗೇಮ್ ದರಗಳು ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆ ಮಾರುಕಟ್ಟೆಗಳಿಗೂ ಅನ್ವಯಿಸುತ್ತವೆಯೇ?',
      a: 'ಖಂಡಿತವಾಗಿ, ಸಿಂಗಲ್ ಸಂಖ್ಯೆಗೆ 9.5 ಪಟ್ಟು ಹಾಗೂ ಜೋಡಿಗೆ 95 ಪಟ್ಟು ದರಗಳು ನಮ್ಮ ಎಲ್ಲಾ 15+ ಲೈವ್ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿಯೂ ಒಂದೇ ಸಮನಾಗಿರುತ್ತದೆ.'
    },
    {
      q: 'ತೊಂದರೆ ಎದುರಾದಾಗ ಗ್ರಾಹಕ ಸೇವೆಗೆ ಕರೆ ಮಾಡುವುದು ಹೇಗೆ?',
      a: 'ಲಿಂಕ್ ಮಾಡಲಾದ ವಾಟ್ಸಾಪ್ ಸಹಾಯ ಅಥವಾ ನೇರ ಫೋನ್ ಕರೆ ಐಕಾನ್ ಬಳಸಿ ಸಹಾಯ ಪಡೆದುಕೊಳ್ಳಿ.'
    }
  ],
  ta: [
    {
      q: 'சாரா 567 செயலியை எவ்வாறு டவுன்லோடு செய்து நிறுவுவது?',
      a: '"செயலியை டவுன்லோடு" பொத்தானைக் கிளிக் செய்து ஆண்ட்ராய்டு APK பெறலாம். நிறுவும் முன் மொபைல் அமைப்புகளில் "Unknown Sources" என்பதை அனுமதிக்கவும்.'
    },
    {
      q: 'குறைந்தபட்ச டெபாசிட் மற்றும் வித்ரா வரம்புகள் என்ன?',
      a: 'குறைந்தபட்ச டெபாசிட் வெறும் ₹100 மற்றும் வித்ரா செய்ய குறைந்தபட்ச வரம்பு ₹500 ஆகும். இது 24 மணி நேரமும் விரைவாக செயல்படும்.'
    },
    {
      q: 'வித்ரா செய்த பணம் வரவு வைக்க எவ்வளவு நேரம் ஆகும்?',
      a: 'எங்கள் சிஸ்டம் 24 மணி நேரமும் செயல்படுகிறது. நீங்கள் வித்ரா கோரிக்கை விடுத்த 5 முதல் 15 நிமிடங்களுக்குள் பணம் மாற்றப்படும்.'
    },
    {
      q: 'விளையாட்டு விகிதங்கள் அனைத்து சந்தைகளுக்கும் பொருந்துமா?',
      a: 'ஆம், ஒற்றை இலக்கத்திற்கு 9.5 மடங்கும், ஜோடிக்கு 95 மடங்கும் எங்களின் அனைத்து 15+ சந்தைகளிலும் ஒரே மாதிரியாக இருக்கும்.'
    },
    {
      q: 'ஏதேனும் பிரச்சனை என்றால் எங்கு தொடர்பு கொள்வது?',
      a: 'எங்கள் வாடிக்கையாளர் சேவை 24 மணி நேரமும் செயல்படுகிறது. வாட்ஸ்அப் அல்லது தொலைபேசி அழைப்பைப் பயன்படுத்தி உதவி பெறலாம்.'
    }
  ],
  te: [
    {
      q: 'సారా 567 యాప్‌ను ఎలా డౌన్‌లోడ్ చేసుకోవాలి?',
      a: '"యాప్ ఇప్పుడే పొందండి" బటన్ ప్రెస్ చేసి ఆండ్రాయిడ్ APK ఫైల్ పొందండి. ఇన్‌స్టాల్ చేసే ముందు మొబైల్ సెట్టింగ్స్‌లో "Unknown Sources" అనుమతించండి.'
    },
    {
      q: 'కనిష్ట డిపాజిట్ మరియు విత్‌డ్రా పరిమితులు ఎంత?',
      a: 'కనిష్ట డిపాజిట్ కేవలం ₹100 మరియు విత్‌డ్రా చేయడానికి కనిష్ట పరిమితి ₹500 గా ఉంది, ఇది 24 గంటలూ అందుబాటులో ఉంటుంది.'
    },
    {
      q: 'విత్‌డ్రా చేసిన డబ్బు ఎంత సమయంలో జమ అవుతుంది?',
      a: 'మా విత్‌డ్రా వ్యవస్థ 24 గంటలూ పనిచేస్తుంది. అభ్యర్థన పెట్టిన 5 నుండి 15 నిమిషాల్లో డబ్బు క్రెడిట్ అవుతుంది.'
    },
    {
      q: 'ఆట రేట్లు అన్ని కల్యాణ్ మార్కెట్లకు ఒకేలా ఉంటాయా?',
      a: 'అవును, సింగిల్ డిజిట్‌కు 9.5 రెట్లు, జోడికి 95 రెట్లు మా 15+ మార్కెట్లన్నింటికీ ఒకే విధంగా వర్తిస్తాయి.'
    },
    {
      q: 'ఇబ్బంది ఎదురైతే ఎవరిని సంప్రదించాలి?',
      a: 'మా ప్రతినిధులు 24 గంటలూ అందుబాటులో ఉంటారు. వాట్సాప్ లేదా కాల్ బటన్ ద్వారా నేరుగా మాట్లాడవచ్చు.'
    }
  ]
};

interface FAQProps {
  currentLang: LanguageCode;
}

export default function FAQ({ currentLang }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default open first FAQ

  const t = TRANSLATIONS[currentLang];
  const list = FAQ_LOCALIZATION[currentLang] || FAQ_LOCALIZATION.en;

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-20 bg-white border-t border-neutral-150 overflow-hidden">
      {/* Light elegant soft red gradient detail */}
      <div className="absolute -bottom-1/5 right-1/10 w-96 h-96 bg-red-400/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-red-50 border border-red-150 px-3 py-1.5 rounded-full mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-red-650" />
            <span className="text-red-700 text-[10px] font-mono font-bold uppercase tracking-wider">
              {currentLang === 'en' ? 'SARA SUPPORT DESK' : 'सारा सहायता डेस्क'}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-none">
            {t.faqTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 to-red-750 font-black">
              {t.faqSpan}
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 font-sans text-sm sm:text-base font-semibold">
            {t.faqDesc}
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {list.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                id={`faq_accordion_${index}`}
                className="bg-white border border-neutral-200 hover:border-red-500/20 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                {/* Accordion trigger button header line */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left p-5 sm:p-6 text-neutral-800 hover:text-red-705 focus:outline-none cursor-pointer transition-colors"
                >
                  <span className="font-display font-extrabold text-sm sm:text-base leading-snug pr-5">
                    {faq.q}
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 text-neutral-400 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-90 text-red-600' : ''
                    }`}
                  />
                </button>

                {/* Collapsible answer text details */}
                <div
                  className={`transition-all duration-300 ease-in-out origin-top border-t border-neutral-100 ${
                    isOpen ? 'max-h-[300px] opacity-100 p-5 sm:p-6 bg-neutral-50/60' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-neutral-600 font-sans text-xs sm:text-sm leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highly Attractive Step-By-Step Installation & Deposit Visual Guide Card */}
        <div className="mt-16 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-[32px] p-6 sm:p-10 border-2 border-amber-400 shadow-[0_15px_45px_rgba(245,158,11,0.15)] relative overflow-hidden group">
          {/* Dynamic glowing ambient effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-red-600/15 transition-all"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="inline-flex items-center space-x-1 bg-amber-400/10 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest">
                🛡️ {currentLang === 'en' ? 'SARA 567 TRADEMARK SYSTEM' : 'सारा 567 प्रामाणिक डिजिटल मटका'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                {currentLang === 'en' ? 'Play in 3 Simple Steps' : 'केवल ३ आसान चरणों में शुरू करें और जीतें'}
              </h3>
              <p className="text-neutral-400 font-sans text-xs sm:text-sm font-semibold max-w-2xl">
                {currentLang === 'en' 
                  ? 'Follow this secure installation pattern to start playing with the certified official version on your Android device securely.'
                  : 'अपने एंड्रॉइड डिवाइस पर प्रमाणित और सुरक्षित सट्टा मटका गेम शुरू करने के लिए नीचे दिए गए निर्देशों का पालन करें।'
                }
              </p>
            </div>

            {/* Steps Infographic Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Step 1 */}
              <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl relative">
                <span className="absolute -top-3.5 left-4 bg-amber-400 text-neutral-950 font-black font-mono text-xs px-2.5 py-1 rounded-lg">STEP 1</span>
                <div className="flex items-center space-x-3 mb-2.5 pt-1">
                  <Download className="h-5 w-5 text-amber-400 shrink-0" />
                  <h4 className="font-extrabold text-sm">{currentLang === 'en' ? 'Get Official APK' : 'ऑफिशियल APK डाउनलोड'}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans font-semibold">
                  {currentLang === 'en'
                    ? 'Click download to instantly fetch the secure, lightweight 12MB Android installation package.'
                    : '12MB का अत्यंत सुरक्षित और हल्का मोबाइल एप्लिकेशन तुरंत प्राप्त करने के लिए डाउनलोड बटन दबाएं।'
                  }
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl relative">
                <span className="absolute -top-3.5 left-4 bg-amber-400 text-neutral-950 font-black font-mono text-xs px-2.5 py-1 rounded-lg">STEP 2</span>
                <div className="flex items-center space-x-3 mb-2.5 pt-1">
                  <Smartphone className="h-5 w-5 text-amber-400 shrink-0" />
                  <h4 className="font-extrabold text-sm">{currentLang === 'en' ? 'Allow Install' : 'अज्ञात स्रोतों को अनुमति'}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans font-semibold">
                  {currentLang === 'en'
                    ? 'Go to device settings and enable "Install from Unknown Sources" so the app launches perfectly.'
                    : 'फ़ोन में "Unknown Sources से इंस्टॉल" करने की अनुमति दें ताकि बिना रुकावट ऐप इंस्टॉल हो सके।'
                  }
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl relative">
                <span className="absolute -top-3.5 left-4 bg-amber-400 text-neutral-950 font-black font-mono text-xs px-2.5 py-1 rounded-lg">STEP 3</span>
                <div className="flex items-center space-x-3 mb-2.5 pt-1">
                  <Shield className="h-5 w-5 text-amber-400 shrink-0" />
                  <h4 className="font-extrabold text-sm">{currentLang === 'en' ? 'Deposit & Play' : '₹100 जोड़ें और खेलें'}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans font-semibold">
                  {currentLang === 'en'
                    ? 'Deposit ₹100 instantly via PhonePe/GPay & get access to Kalyan live rates and jodi.'
                    : 'सिर्फ ₹100 जमा करके कल्याण, राजधानी जैसे भव्य मटका बाजारों में उच्चतम दरों पर खेलें।'
                  }
                </p>
              </div>

            </div>

            {/* Call to action panel centered */}
            <div className="pt-6 text-center border-t border-neutral-800 flex flex-col items-center">
              <a
                href="https://sara567.info/Sara%20567.apk"
                download
                referrerPolicy="no-referrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 via-red-700 to-rose-600 hover:from-red-500 hover:to-red-650 text-white font-black px-12 py-5 rounded-2xl text-base transition-all shadow-[0_10px_35px_rgba(220,38,38,0.35)] hover:scale-[1.04]"
              >
                <Download className="h-5 w-5 text-yellow-300 animate-bounce" />
                <span>{currentLang === 'en' ? 'DOWNLOAD OFFICIAL ANDROID APP NOW' : 'ऑफिशियल एंड्रॉइड ऐप तुरंत डाउनलोड करें'}</span>
              </a>
              <span className="block text-[10px] text-neutral-500 font-mono font-bold uppercase tracking-wider mt-3">
                {currentLang === 'en' ? '⚡ SECURED BY SSL CERTIFICATE | 100% SAFE SOURCE' : '⚡ SSL सर्टिफाइड वेबसाइट | सुरक्षित सोर्स'}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
