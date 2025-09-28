import Hero from './components/Hero';
import AboutCard from './components/AboutCard';
import ProductCard from './components/ProductCard';
import ProjectCard from './components/ProjectCard';
import { products, projects } from '../lib/data';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview Section */}
      <AboutCard isPreview={true} />
      
      {/* Products Preview Section */}
      <ProductCard products={products} isPreview={true} />
      
      {/* Projects Preview Section */}
      <ProjectCard projects={projects} isPreview={true} />
    </div>
  );
}