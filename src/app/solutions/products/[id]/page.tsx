import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '../../../../lib/data';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return {
      title: 'Product Not Found - Innovality Private Limited',
    };
  }

  return {
    title: `${product.title} - Innovality Private Limited`,
    description: product.description,
    keywords: `${product.title}, ${product.features.join(', ')}, innovality solutions`,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link 
              href="/solutions" 
              className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center mr-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Solutions
            </Link>
            <span className="text-blue-300 text-sm font-medium px-3 py-1 bg-white/10 rounded-full">Product</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-7xl mr-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  {product.icon}
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">{product.title}</h1>
              <p className="text-xl font-medium text-blue-100 leading-relaxed mb-8">
                {product.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                >
                  Get Started Today
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 cursor-pointer">
                  Watch Demo
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/30">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/80 font-medium">Product Hero Image</p>
                    <p className="text-white/60 text-sm mt-1">1200 x 675 recommended</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive capabilities that make this solution perfect for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Feature Icon Placeholder */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getFeatureDescription(feature)}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">See It In Action</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual demonstrations and screenshots of our solution in real-world scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Screenshot placeholders */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 font-medium">Screenshot {item}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Feature Demonstration</h3>
                    <p className="text-gray-600 text-sm">Visual example of {product.features[item % product.features.length]?.split(' ')[0].toLowerCase()} functionality</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Specs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose This Solution?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits and technical excellence for your business success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 h-full">
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Accelerate digital transformation initiatives by up to 60%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Reduce operational costs and improve efficiency by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Enterprise-grade security with 99.9% uptime guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Scale seamlessly from startup to enterprise level</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">24/7 professional support with dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 h-full">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Specifications</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Deployment</h4>
                      <p className="text-gray-600">Cloud-native, On-premise, Hybrid</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Integration</h4>
                      <p className="text-gray-600">REST APIs, GraphQL, Webhooks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Security</h4>
                      <p className="text-gray-600">Enterprise-grade encryption</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
                      <p className="text-gray-600">24/7 Professional support</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Scalability</h4>
                      <p className="text-gray-600">Auto-scaling, Load balancing</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Compliance</h4>
                      <p className="text-gray-600">SOC2, GDPR, HIPAA ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Related Solutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Explore other products that complement this solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/solutions/products/${relatedProduct.id}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {relatedProduct.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {relatedProduct.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {relatedProduct.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to generate feature descriptions
function getFeatureDescription(feature: string): string {
  const descriptions: { [key: string]: string } = {
    'Cloud-native architecture': 'Built for modern cloud environments with microservices and containerization.',
    'Real-time analytics dashboard': 'Interactive dashboards with live data visualization and insights.',
    'API integration capabilities': 'Seamless integration with existing systems through robust APIs.',
    'Security compliance framework': 'Built-in compliance with industry standards like SOC2, GDPR, and HIPAA.',
    '24/7 monitoring and support': 'Round-the-clock system monitoring with expert technical support.',
    'Machine learning algorithms': 'Advanced ML models for predictive analytics and pattern recognition.',
    'Predictive modeling': 'Forecast trends and outcomes using statistical and ML techniques.',
    'Automated reporting': 'Generate comprehensive reports automatically based on your data.',
    'Data visualization tools': 'Interactive charts, graphs, and dashboards for data insights.',
    'Custom AI model training': 'Train specialized models tailored to your specific business needs.',
    'Multi-cloud deployment': 'Deploy across multiple cloud providers for redundancy and optimization.',
    'Auto-scaling capabilities': 'Automatically scale resources based on demand and usage patterns.',
    'Disaster recovery systems': 'Comprehensive backup and recovery solutions for business continuity.',
    'Performance optimization': 'Continuous monitoring and optimization for peak system performance.',
    'Cost management tools': 'Track, analyze, and optimize cloud spending and resource usage.',
    'Threat detection and response': 'Advanced AI-powered threat detection with automated response capabilities.',
    'Identity access management': 'Comprehensive user authentication and authorization systems.',
    'Security compliance auditing': 'Regular security audits and compliance reporting tools.',
    'Incident response automation': 'Automated incident detection, analysis, and response workflows.',
    'Risk assessment tools': 'Comprehensive risk analysis and mitigation planning tools.'
  };
  
  return descriptions[feature] || 'Advanced feature designed to enhance your business capabilities and streamline operations.';
}