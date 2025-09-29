import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

interface ProductCardProps {
  products: Product[];
  isPreview?: boolean;
}

export default function ProductCard({ products, isPreview = false }: ProductCardProps) {
  const displayProducts = isPreview ? products.slice(0, 3) : products;

  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#DBEAFE'}}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" style={{backgroundColor: 'rgba(37, 99, 235, 0.1)'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{backgroundColor: '#2563EB', color: 'white'}}>
            <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#3B82F6'}}></span>
            Our Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: '#111827'}}>
            Products & Services
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{backgroundColor: '#2563EB'}}></div>
          <p className="text-xl max-w-3xl mx-auto font-light" style={{color: '#111827'}}>
            Innovative solutions designed to transform your business and drive sustainable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Main Card */}
              <div className="card-elevated bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 h-full hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl">
                {/* Header with solid color */}
                <div className="relative p-8" style={{backgroundColor: '#2563EB'}}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{product.icon || '🚀'}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed font-light">
                    {product.description}
                  </p>

                  {!isPreview && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-blue-700 mb-4 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start group/item">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" style={{backgroundColor: '#2563EB'}}>
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-sm transition-colors duration-200" style={{color: '#111827'}}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group/btn hover:bg-blue-500" 
                          style={{backgroundColor: '#2563EB'}}>
                    <span className="flex items-center justify-center">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#3B82F6'}}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#2563EB'}}></div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group hover:bg-blue-500 cursor-pointer"
              style={{backgroundColor: '#2563EB'}}
            >
              <span>View All Solutions</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}