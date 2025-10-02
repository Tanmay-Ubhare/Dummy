import Hero from './components/Hero';
import AboutCard from './components/AboutCard';
import ProjectCard from './components/ProjectCard';
import { projects } from '../lib/data';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview Section */}
      <AboutCard isPreview={true} />
      
      {/* Projects Preview Section */}
      <ProjectCard projects={projects} isPreview={true} />
    </div>
  );
}