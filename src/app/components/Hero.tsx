import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-300/15 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Main heading */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Innovative Technology Solutions
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Innovality
            </span>
            <span className="block text-teal-300 text-4xl sm:text-5xl lg:text-6xl mt-2">
              Private Limited
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium mb-6 max-w-4xl mx-auto leading-relaxed text-white bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
            Driving technology and business transformation through innovative solutions
          </p>
          
          <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed text-white bg-teal-600/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
            We empower organizations with cutting-edge technology solutions, strategic consulting, 
            and digital transformation services to achieve sustainable growth in today&apos;s dynamic market.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Link
            href="/about"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            <span>Learn More</span>
            <svg
              className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-white"
          >
            <span>Get In Touch</span>
            <svg
              className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Link>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {[
            { number: '10+', label: 'Years of Excellence', icon: '🏆' },
            { number: '50+', label: 'Successful Projects', icon: '🚀' },
            { number: '24/7', label: 'Support Available', icon: '⚡' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="glass-card p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-white/90 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}