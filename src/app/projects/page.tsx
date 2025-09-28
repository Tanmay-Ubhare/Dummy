import { Metadata } from 'next';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Upcoming Projects - Innovality Private Limited',
  description: 'Discover our upcoming projects and initiatives including mobile platforms, blockchain solutions, IoT systems, and quantum computing research.',
  keywords: 'upcoming projects, mobile platform, blockchain, IoT, quantum computing, innovation',
};

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Upcoming Projects</h1>
          <p className="text-xl sm:text-2xl font-medium max-w-3xl mx-auto">
            Innovation in progress - shaping the future of technology solutions
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectCard projects={projects} isPreview={false} />

      {/* Innovation Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Innovation Focus Areas</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are actively researching and developing solutions in cutting-edge technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Artificial Intelligence',
                description: 'Advanced AI and machine learning solutions for intelligent automation and decision-making.',
                technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
              },
              {
                icon: '🔗',
                title: 'Blockchain & Web3',
                description: 'Decentralized solutions, smart contracts, and blockchain-based applications.',
                technologies: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Cryptocurrency Integration']
              },
              {
                icon: '🌐',
                title: 'IoT & Edge Computing',
                description: 'Connected devices and edge computing solutions for real-time data processing.',
                technologies: ['Sensor Networks', 'Edge Analytics', 'Device Management', 'Real-time Monitoring']
              },
              {
                icon: '⚛️',
                title: 'Quantum Computing',
                description: 'Research and development in quantum computing applications and cryptographic security.',
                technologies: ['Quantum Algorithms', 'Quantum Cryptography', 'Optimization Problems', 'Quantum Simulation']
              }
            ].map((area, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{area.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">{area.title}</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{area.description}</p>
                <div className="space-y-1">
                  {area.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-xs bg-white px-2 py-1 rounded text-secondary font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Development Timeline</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-secondary"></div>
            <div className="space-y-12">
              {[
                { quarter: 'Q2 2025', title: 'Alpha Phase Launch', description: 'Initial testing and prototype development for Project Alpha' },
                { quarter: 'Q3 2025', title: 'Beta Program Start', description: 'Limited beta release for select clients and partners' },
                { quarter: 'Q4 2025', title: 'Full Production Release', description: 'Complete rollout of Project Alpha mobile platform' },
                { quarter: 'Q1 2026', title: 'Next Phase Projects', description: 'Launch of Project Beta blockchain integration hub' }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-primary mb-1">{milestone.title}</h3>
                      <p className="text-secondary text-sm font-medium mb-2">{milestone.quarter}</p>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Our Progress</h2>
          <p className="text-xl mb-8">
            Subscribe to receive updates about our latest projects and innovations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-6 py-3 bg-secondary hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-blue-200">
            No spam, only project updates and innovation insights.
          </p>
        </div>
      </section>
    </div>
  );
}