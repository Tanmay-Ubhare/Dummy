import { Metadata } from 'next';
import ProductCard from '../components/ProductCard';
import { products } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Products & Services - Innovality Private Limited',
  description: 'Explore our comprehensive range of products and services including digital transformation, AI-powered analytics, cloud infrastructure, and enterprise security solutions.',
  keywords: 'products, services, digital transformation, AI analytics, cloud infrastructure, enterprise security',
};

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Products & Services</h1>
          <p className="text-xl sm:text-2xl font-medium max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation journey
          </p>
        </div>
      </section>

      {/* Products Section */}
      <ProductCard products={products} isPreview={false} />

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Service Categories</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer specialized services across multiple domains to meet diverse business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Consulting Services',
                description: 'Strategic technology consulting to align your business objectives with digital solutions.',
                features: ['Digital Strategy', 'Process Optimization', 'Technology Roadmapping', 'Change Management']
              },
              {
                title: 'Development Services',
                description: 'Custom software development and application modernization services.',
                features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization']
              },
              {
                title: 'Support Services',
                description: 'Comprehensive support and maintenance for ongoing business continuity.',
                features: ['24/7 Support', 'Performance Monitoring', 'Security Updates', 'Training & Documentation']
              }
            ].map((category, index) => (
              <div key={index} className="bg-muted rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                <p className="text-gray-700 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you choose the right solutions for your unique business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-200"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}