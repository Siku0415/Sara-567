import { GameMarket, GameRate, FAQItem } from './types';

export const GAME_RATES: GameRate[] = [
  {
    id: 'single_digit',
    name: 'Single Digit',
    rate: '10 Ka 95',
    payout: '9.5x',
    desc: 'Bidding on any single digit number from 0 to 9.'
  },
  {
    id: 'jodi_digit',
    name: 'Jodi Digit',
    rate: '10 Ka 950',
    payout: '95x',
    desc: 'Double digit combination from 00 to 99.'
  },
  {
    id: 'single_panna',
    name: 'Single Panna',
    rate: '10 Ka 1400',
    payout: '140x',
    desc: 'Three unique digit combination (no repeating digits).'
  },
  {
    id: 'double_panna',
    name: 'Double Panna',
    rate: '10 Ka 2800',
    payout: '280x',
    desc: 'Three-digit panel featuring two matching digits (e.g. 112).'
  },
  {
    id: 'triple_panna',
    name: 'Triple Panna',
    rate: '10 Ka 7000',
    payout: '700x',
    desc: 'Three-digit panel where all digits are identical (e.g. 333).'
  },
  {
    id: 'half_sangam',
    name: 'Half Sangam',
    rate: '10 Ka 10000',
    payout: '1000x',
    desc: 'Combine Single Ank and Panna, or vice-versa.'
  },
  {
    id: 'full_sangam',
    name: 'Full Sangam',
    rate: '10 Ka 100000',
    payout: '10000x',
    desc: 'Combine both Open and Close Panna configurations.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I download and install the Sara 567 application?',
    answer: 'Click on the "Download Now" button at the top of the page to download the Sara 567 APK file. Make sure to enable "Install from Unknown Sources" in your Android device settings before opening the APK.'
  },
  {
    question: 'Are my credentials and bids secure on the platform?',
    answer: 'Yes, Sara 567 uses industry-standard end-to-end encryption to secure user credentials, transaction history, and bidding systems.'
  },
  {
    question: 'What are the minimum amounts for deposits and withdrawals?',
    answer: 'Sara 567 offers low barriers to entry. The minimum deposit is ₹100 and the minimum withdrawal is ₹500, with instant payout processing via UPI, GPay, PhonePe, and NetBanking.'
  },
  {
    question: 'What are Game Rates and how are payouts computed?',
    answer: 'Game Rates determine your winnings. If the rate is 10 Ka 950 (95x) and you bid ₹100 on a winning Jodi, you will receive ₹9,500 instantly in your wallet.'
  },
  {
    question: 'Who should I contact if I face issues?',
    answer: 'Our customer support is available 24/7. You can instantly reach us via the "Whatsapp" live support button or by clicking "Call Now" to talk directly with an executive.'
  }
];

export const INITIAL_MARKETS: Omit<GameMarket, 'status' | 'openResult' | 'jodiResult' | 'closeResult'>[] = [
  { id: 'milan_morning', name: 'MILAN MORNING', openTime: '10:15 AM', closeTime: '11:15 AM' },
  { id: 'kalyan_morning', name: 'KALYAN MORNING', openTime: '11:00 AM', closeTime: '12:00 PM' },
  { id: 'sridevi', name: 'SRIDEVI', openTime: '11:35 AM', closeTime: '12:35 PM' },
  { id: 'madhur_morning', name: 'MADHUR MORNING', openTime: '11:30 AM', closeTime: '12:30 PM' },
  { id: 'time_bazar', name: 'TIME BAZAR', openTime: '01:00 PM', closeTime: '02:00 PM' },
  { id: 'tara_mumbai_day', name: 'TARA MUMBAI DAY', openTime: '01:30 PM', closeTime: '02:30 PM' },
  { id: 'milan_day', name: 'MILAN DAY', openTime: '03:00 PM', closeTime: '05:00 PM' },
  { id: 'rajdhani_day', name: 'RAJDHANI DAY', openTime: '03:05 PM', closeTime: '05:05 PM' },
  { id: 'kalyan', name: 'KALYAN', openTime: '04:10 PM', closeTime: '06:10 PM' },
  { id: 'sridevi_night', name: 'SRIDEVI NIGHT', openTime: '07:00 PM', closeTime: '08:00 PM' },
  { id: 'madhur_night', name: 'MADHUR NIGHT', openTime: '08:30 PM', closeTime: '10:30 PM' },
  { id: 'milan_night', name: 'MILAN NIGHT', openTime: '09:00 PM', closeTime: '11:00 PM' },
  { id: 'kalyan_night', name: 'KALYAN NIGHT', openTime: '09:25 PM', closeTime: '11:30 PM' },
  { id: 'rajdhani_night', name: 'RAJDHANI NIGHT', openTime: '09:30 PM', closeTime: '11:45 PM' },
  { id: 'main_bazar', name: 'MAIN BAZAR', openTime: '09:40 PM', closeTime: '12:05 AM' }
];

// Helper to determine if current Indian Standard Time is within market hours
export function parseTimeToMinutes(timeStr: string): number {
  const [time, modifier] = timeStr.trim().split(' ');
  let [hoursStr, minutesStr] = time.split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  }
  if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

// Generate valid random Matka panna/jodi numbers based on a seed or time
export function generateMatkaNumbers(marketId: string, currentMinutesIST: number, openMin: number, closeMin: number): {
  openResult: string;
  jodiResult: string;
  closeResult: string;
} {
  // Use marketId as a seed
  let hash = 0;
  for (let i = 0; i < marketId.length; i++) {
    hash = (hash << 5) - hash + marketId.charCodeAt(i);
    hash |= 0;
  }
  
  const absHash = Math.abs(hash);
  const openPanna = ((absHash % 899) + 100).toString(); // e.g. 120 - 998
  const closePanna = (((absHash * 31) % 899) + 100).toString();

  const openSum = (parseInt(openPanna[0]) + parseInt(openPanna[1]) + parseInt(openPanna[2])) % 10;
  const closeSum = (parseInt(closePanna[0]) + parseInt(closePanna[1]) + parseInt(closePanna[2])) % 10;
  
  const jodi = `${openSum}${closeSum}`;

  if (currentMinutesIST < openMin) {
    // Before open time, no results yet
    return { openResult: '***', jodiResult: '**', closeResult: '***' };
  } else if (currentMinutesIST >= openMin && currentMinutesIST < closeMin) {
    // During active bidding time, open result is released, close is pending
    return { openResult: openPanna, jodiResult: `${openSum}*`, closeResult: '***' };
  } else {
    // Closed, full results shown
    return { openResult: openPanna, jodiResult: jodi, closeResult: closePanna };
  }
}

// Get live status in IST
export function getLiveMarketData(): GameMarket[] {
  // Convert current UTC time to IST (UTC + 5:30)
  const now = new Date();
  const utcOffsetMs = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffsetMs = 5.5 * 3600000;
  const istTime = new Date(utcOffsetMs + istOffsetMs);

  const istHours = istTime.getHours();
  const istMinutes = istTime.getMinutes();
  const currentMinutesIST = istHours * 60 + istMinutes;

  return INITIAL_MARKETS.map((m) => {
    let openMin = parseTimeToMinutes(m.openTime);
    let closeMin = parseTimeToMinutes(m.closeTime);

    // Handle wrap-around midnight (e.g. MAIN BAZAR closes 12:05 AM of next day)
    if (closeMin < openMin) {
      if (currentMinutesIST < closeMin) {
        // We are currently in the early morning part (e.g. 12:03 AM)
        openMin = openMin - 1440; // Treat openMin as yesterday
      } else {
        // We are in the evening before midnight
        closeMin = closeMin + 1440; // Treat closeMin as tomorrow
      }
    }

    const isOpen = currentMinutesIST >= openMin && currentMinutesIST < closeMin;
    const { openResult, jodiResult, closeResult } = generateMatkaNumbers(m.id, currentMinutesIST, openMin, closeMin);

    return {
      id: m.id,
      name: m.name,
      openTime: m.openTime,
      closeTime: m.closeTime,
      openResult,
      jodiResult,
      closeResult,
      status: isOpen ? 'OPEN' : 'CLOSED',
    };
  });
}
