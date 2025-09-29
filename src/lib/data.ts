// Dummy data for products and services
export const products = [
  {
    id: 'product-a',
    title: 'Product A - Digital Transformation Suite',
    description: 'Comprehensive digital transformation platform designed to modernize legacy systems and streamline business processes.',
    features: [
      'Cloud-native architecture',
      'Real-time analytics dashboard',
      'API integration capabilities',
      'Security compliance framework',
      '24/7 monitoring and support'
    ],
    icon: '🚀'
  },
  {
    id: 'product-b',
    title: 'Product B - AI-Powered Analytics',
    description: 'Advanced artificial intelligence platform that provides predictive insights and automated decision-making capabilities.',
    features: [
      'Machine learning algorithms',
      'Predictive modeling',
      'Automated reporting',
      'Data visualization tools',
      'Custom AI model training'
    ],
    icon: '🤖'
  },
  {
    id: 'product-c',
    title: 'Product C - Cloud Infrastructure Solutions',
    description: 'Scalable cloud infrastructure services providing secure, reliable, and cost-effective hosting solutions.',
    features: [
      'Multi-cloud deployment',
      'Auto-scaling capabilities',
      'Disaster recovery systems',
      'Performance optimization',
      'Cost management tools'
    ],
    icon: '☁️'
  },
  {
    id: 'product-d',
    title: 'Enterprise Security Platform',
    description: 'Comprehensive cybersecurity solution protecting businesses from modern threats with advanced monitoring.',
    features: [
      'Threat detection and response',
      'Identity access management',
      'Security compliance auditing',
      'Incident response automation',
      'Risk assessment tools'
    ],
    icon: '🛡️'
  }
];

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
  name: 'Innovality Private Limited',
  tagline: 'Driving technology and business transformation',
  description: 'Innovality Private Limited is an innovative solutions provider driving technology and business transformation. Our leadership team includes Mr. John Doe, CFO of Innovality Pvt. Ltd., who leads financial strategy and growth.',
  contact: {
    email: 'innovalityit@gmail.com',
    phone: '+91-9892339356',
    address: '705, The Crown, Plot No 35, sector 15 16, Kharghar, Navi Mumbai, 410210 Maharashtra, India'
  },
  cfo: {
    name: 'Mr. John Doe',
    title: 'Chief Financial Officer',
    description: 'Mr. John Doe leads our financial strategy and growth initiatives. With over 15 years of experience in corporate finance and strategic planning, he drives our company\'s financial excellence and sustainable expansion.',
    experience: '15+ Years',
    specialization: 'Financial Strategy'
  }
};