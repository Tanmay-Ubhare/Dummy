import Link from 'next/link';

interface AboutCardProps {
  isPreview?: boolean;
}

export default function AboutCard({ isPreview = false }: AboutCardProps) {
  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#DBEAFE'}}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{backgroundColor: 'rgba(37, 99, 235, 0.1)'}}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{backgroundColor: 'rgba(59, 130, 246, 0.1)'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{backgroundColor: '#2563EB', color: 'white'}}>
            <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#3B82F6'}}></span>
            About Our Company
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: '#111827'}}>
            Innovality IT Private Ltd.
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#2563EB'}}></div>
          <p className="text-xl max-w-3xl mx-auto mt-6 font-bold" style={{color: '#111827'}}>
            Transforming businesses through innovative technology solutions and strategic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 font-semibold" style={{color: '#111827'}}>
                Innovality IT Private Ltd. is an innovative solutions provider driving technology 
                and business transformation across industries. We specialize in delivering 
                cutting-edge solutions that empower organizations to thrive in the digital age.
              </p>
              
              {!isPreview && (
                <div className="space-y-6 text-gray-900">
                  <p className="text-lg leading-relaxed font-semibold">
                    Our comprehensive approach combines strategic consulting, technology implementation, 
                    and ongoing support to ensure sustainable growth and competitive advantage for our clients.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    With a team of experienced professionals and a commitment to excellence, 
                    we have established ourselves as a trusted partner for businesses seeking 
                    digital transformation and operational efficiency.
                  </p>
                  
                  {/* Key strengths */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      { icon: '🎯', title: 'Strategic Focus', desc: 'Data-driven strategic planning' },
                      { icon: '⚡', title: 'Rapid Innovation', desc: 'Agile development methodology' },
                      { icon: '🤝', title: 'Client Partnership', desc: 'Collaborative approach' },
                      { icon: '🔧', title: 'Technical Excellence', desc: 'Cutting-edge solutions' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="font-semibold text-blue-700 text-sm">{item.title}</div>
                          <div className="text-gray-600 text-xs">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {isPreview && (
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  Learn more about us
                  <svg
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* CFO Profile Card */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              {/* Profile Card */}
              <div className="card-elevated p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: '#2563EB'}}>
                      JD
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: '#2563EB'}}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#2563EB'}}>Mr. John Doe</h3>
                    <p className="font-semibold text-lg mb-1" style={{color: '#111827'}}>Chief Financial Officer</p>
                    <div className="flex items-center justify-center space-x-4 text-sm" style={{color: '#6B7280'}}>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-2a1 1 0 00-1 1v1h2V5a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        15+ Years Experience
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    Mr. John Doe leads our financial strategy and growth initiatives. 
                    With over 15 years of experience in corporate finance and strategic planning, 
                    he drives our company&apos;s financial excellence and sustainable expansion.
                  </p>
                  
                  {!isPreview && (
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white p-4 rounded-xl border" style={{borderColor: '#E5E7EB'}}>
                        <div className="font-semibold mb-1" style={{color: '#2563EB'}}>Experience</div>
                        <div style={{color: '#6B7280'}}>15+ Years</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border" style={{borderColor: '#E5E7EB'}}>
                        <div className="font-semibold mb-1" style={{color: '#2563EB'}}>Specialization</div>
                        <div style={{color: '#6B7280'}}>Financial Strategy</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60" style={{backgroundColor: '#3B82F6'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-60" style={{backgroundColor: '#2563EB'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}