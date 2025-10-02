// Project types
export type ProjectStatus = 'Planning' | 'In Progress' | 'Coming Soon' | 'Beta';
export type Project = {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  timeline: string;
  category: string;
};

// Dummy data for upcoming projects
export const projects: Project[] = [
  {
    id: 'jyoti-dhara-ott',
    title: 'Jyoti Dhara - OTT',
    description: 'An over-the-top (OTT) streaming platform initiative to deliver curated video content with modern UX and scalable delivery.',
    status: 'Coming Soon',
    timeline: 'TBA',
    category: 'Media & Streaming'
  },
  {
    id: 'ar-account-receivable',
    title: 'AR - Account Receivable Software',
    description: 'A finance-focused Accounts Receivable application for invoice tracking, reconciliation, and collections analytics.',
    status: 'Coming Soon',
    timeline: 'TBA',
    category: 'FinTech'
  },
  {
    id: 'bharat-smart-park-app',
    title: 'Bharat Smart Park App',
    description: 'Smart park mobile app concept for discovery, ticketing, and guided experiences across parks and public spaces.',
    status: 'Coming Soon',
    timeline: 'TBA',
    category: 'Smart City / Civic'
  },
  {
    id: 'legal-assistant-app',
    title: 'Legal Assistant App',
    description: 'An AI-augmented assistant concept to help legal professionals organize cases, documents, and deadlines.',
    status: 'Coming Soon',
    timeline: 'TBA',
    category: 'LegalTech'
  }
];

// Company information
export const companyInfo = {
  name: 'Innovality IT Private Ltd.',
  tagline: 'Driving technology and business transformation',
  description: 'Innovality IT Private Ltd. is an innovative solutions provider driving technology and business transformation.',
  contact: {
    email: 'innovalityit@gmail.com',
    phone: '+91 98923 39356',
    address: '705, The Crown, Plot No. 35, Sector - 15, Kharghar, Navi Mumbai - 410 210, MH. India'
  },
  cfo: {
    name: 'Kedar Khairnar',
    title: 'Chief Financial Officer',
    description: 'Kedar Khairnar currently serves as the CFO at Innovality IT Private Ltd., overseeing financial strategy, planning, and governance.',
    experience: '—',
    specialization: 'Financial Strategy'
  }
};

// Optional team/business card contacts
export type Contact = {
  name: string;
  title: string; // keep blank titles as requested
  email: string;
  phone: string;
  address: string;
};

// Populate this array with details from the business card(s).
// Titles should remain blank strings per requirement.
export const contacts: Contact[] = [
  {
    name: 'Sajjan Gaikar',
    title: '',
    email: 'innovalityit@gmail.com',
    phone: '+91 79 7779 9854',
    address: '705, The Crown, Plot No. 35, Sector - 15, Kharghar, Navi Mumbai - 410 210, MH. India',
  },
  {
    name: 'Avinash Vyawahare',
    title: '',
    email: 'innovalityit@gmail.com',
    phone: '+91 98709 99207',
    address: '705, The Crown, Plot No. 35, Sector - 15, Kharghar, Navi Mumbai - 410 210, MH. India',
  },
  {
    name: 'Adv. Parambodh Jain',
    title: '',
    email: 'innovalityit@gmail.com',
    phone: '+91 93233 33323',
    address: '705, The Crown, Plot No. 35, Sector - 15, Kharghar, Navi Mumbai - 410 210, MH. India',
  },
  {
    name: 'Kedar Khairnar',
    title: '',
    email: 'innovalityit@gmail.com',
    phone: '+91 98923 39356',
    address: '705, The Crown, Plot No. 35, Sector - 15, Kharghar, Navi Mumbai - 410 210, MH. India',
  },
];