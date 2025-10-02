// Dummy data for upcoming projects
export const projects = [
  {
    id: 'project-alpha',
    title: 'Project Alpha - Next-Gen Mobile Platform',
    description: 'Revolutionary mobile application platform that will redefine user experience with cutting-edge technology, augmented reality integration, and seamless cross-platform compatibility.',
    status: 'In Progress' as const,
    timeline: 'Q2 2025 - Q4 2025',
    category: 'Mobile Technology'
  },
  {
    id: 'project-beta',
    title: 'Project Beta - Blockchain Integration Hub',
    description: 'Advanced blockchain-based solution for secure transactions, smart contracts, and decentralized application development with enterprise-grade reliability.',
    status: 'Planning' as const,
    timeline: 'Q3 2025 - Q1 2026',
    category: 'Blockchain & Web3'
  },
  {
    id: 'project-gamma',
    title: 'Project Gamma - IoT Management System',
    description: 'Comprehensive Internet of Things management platform enabling seamless device connectivity, monitoring, and automation for smart enterprises.',
    status: 'Coming Soon' as const,
    timeline: 'Q4 2025 - Q2 2026',
    category: 'IoT Solutions'
  },
  {
    id: 'project-delta',
    title: 'Project Delta - Quantum Computing Initiative',
    description: 'Research and development initiative exploring quantum computing applications for complex business optimization and cryptographic security.',
    status: 'Beta' as const,
    timeline: 'Q1 2025 - Q3 2025',
    category: 'Quantum Technology'
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