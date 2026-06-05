export interface GameMarket {
  id: string;
  name: string;
  openTime: string;
  closeTime: string;
  openResult: string; // e.g. "1" or "123"
  jodiResult: string; // e.g. "56"
  closeResult: string; // e.g. "4" or "456"
  status: 'OPEN' | 'CLOSED';
}

export interface GameRate {
  id: string;
  name: string;
  rate: string; // e.g. "10 Ka 95"
  payout: string; // e.g. "9.5x" or "95x"
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
