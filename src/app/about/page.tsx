import { Metadata } from 'next';
import AboutCard from '../components/AboutCard';

export const metadata: Metadata = {
  title: 'About Us - Innovality Private Limited',
  description: 'Learn about Innovality Private Limited, our mission, leadership team, and commitment to driving technology and business transformation.',
  keywords: 'about innovality, company profile, leadership team, CFO, business transformation',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section for About */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Innovality</h1>
          <p className="text-xl sm:text-2xl font-medium max-w-3xl mx-auto">
            Transforming businesses through innovative technology solutions and strategic excellence
          </p>
        </div>
      </section>

      {/* About Content */}
      <AboutCard isPreview={false} />

      {/* Company Mission & Vision */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We are committed to delivering excellence 
                through strategic partnerships and cutting-edge digital transformation services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading catalyst for digital transformation, recognized globally 
                for our innovative solutions, exceptional service quality, and commitment 
                to sustainable business growth across all industry verticals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', icon: '💡', description: 'Continuous innovation drives our solutions and approach to challenges.' },
              { title: 'Excellence', icon: '⭐', description: 'We maintain the highest standards in everything we deliver.' },
              { title: 'Integrity', icon: '🤝', description: 'Transparency and honesty form the foundation of our relationships.' },
              { title: 'Growth', icon: '📈', description: 'We foster growth for our clients, partners, and team members.' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}