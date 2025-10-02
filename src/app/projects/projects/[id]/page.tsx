import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../../../lib/data';

interface ProjectPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found - Innovality Private Limited',
    };
  }

  return {
    title: `${project.title} - Innovality Private Limited`,
    description: project.description,
    keywords: `${project.title}, ${project.category}, ${project.status}, innovality projects`,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  // At this point, project is guaranteed to exist
  const proj = project!;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Planning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Coming Soon':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Beta':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Planning':
        return '📋';
      case 'In Progress':
        return '🚧';
      case 'Coming Soon':
        return '🚀';
      case 'Beta':
        return '🧪';
      default:
        return '📦';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link 
              href="/projects" 
              className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
          <div className="flex items-center">
            <div className="text-6xl mr-6">{getStatusIcon(proj.status)}</div>
            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                  proj.status
                )}`}
              >
                {proj.status}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{proj.title}</h1>
              <p className="text-xl sm:text-2xl font-medium text-blue-100">
                {proj.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center text-blue-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Timeline: {proj.timeline}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Overview */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">Project Overview</h2>
              
              {/* Key Highlights */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Innovation Focus</h3>
                  <p className="text-gray-700">
                    {getProjectFocus(proj.id)}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Expected Impact</h3>
                  <ul className="space-y-2 text-gray-700">
                    {getProjectImpacts(proj.id).map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">Key Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {getProjectTechnologies(proj.id).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Status */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">Development Timeline</h2>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Project Progress</span>
                  <span className="text-sm font-medium text-blue-600">
                    {getProgressPercentage(proj.status)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${
                      proj.status === 'Planning'
                        ? 'bg-yellow-500'
                        : proj.status === 'In Progress'
                        ? 'bg-blue-500'
                        : proj.status === 'Beta'
                        ? 'bg-green-500'
                        : 'bg-purple-500'
                    }`}
                    style={{ width: `${getProgressPercentage(proj.status)}%` }}
                  ></div>
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Milestones</h3>
                {getProjectMilestones(proj.id).map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border-l-4 border-blue-500 bg-blue-50">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                      <span className="text-xs text-blue-600 font-medium">{milestone.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stay Updated */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                <p className="mb-4 text-blue-100">
                  Get notified about project milestones and release updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    Get Updates
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-300 text-blue-100 hover:bg-blue-500 font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Related Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.filter(p => p.id !== proj.id).slice(0, 3).map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/projects/${relatedProject.id}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{relatedProject.category}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(
                      relatedProject.status
                    )}`}
                  >
                    {relatedProject.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{relatedProject.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{relatedProject.timeline}</span>
                  <span className="text-blue-500 font-medium text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper functions to generate project-specific content
function getProjectFocus(projectId: string): string {
  const focuses: { [key: string]: string } = {
    'jyoti-dhara-ott': 'Building an OTT streaming experience with scalable delivery, curated content, and modern user experience.',
    'ar-account-receivable': 'Improving invoicing, reconciliation, and collection processes with workflow and analytics for receivables.',
    'bharat-smart-park-app': 'Creating a smart park companion app for discovery, ticketing, and guided experiences in public spaces.',
    'legal-assistant-app': 'Designing an assistant to organize cases, documents, and deadlines for legal professionals.',
  };
  return focuses[projectId] || 'Advanced technology initiative focused on solving complex business challenges.';
}

function getProjectImpacts(projectId: string): string[] {
  const impacts: { [key: string]: string[] } = {
    'jyoti-dhara-ott': [
      'Scalable, reliable content delivery',
      'Personalized discovery and recommendations',
      'Modern, accessible viewing experience',
      'Operational insights for content strategy'
    ],
    'ar-account-receivable': [
      'Faster collections and reduced DSO',
      'Improved reconciliation accuracy',
      'Actionable receivables analytics',
      'Streamlined workflows and controls'
    ],
    'bharat-smart-park-app': [
      'Better citizen engagement',
      'Seamless ticketing and access',
      'Guided experiences and safety',
      'Operational visibility for park admins'
    ],
    'legal-assistant-app': [
      'Centralized case management',
      'Time savings for routine tasks',
      'Improved document organization',
      'Deadline tracking and reminders'
    ],
  };
  return impacts[projectId] || ['Enhanced business capabilities', 'Improved operational efficiency', 'Competitive technology advantage'];
}

function getProjectTechnologies(projectId: string): string[] {
  const technologies: { [key: string]: string[] } = {
    'jyoti-dhara-ott': ['Next.js', 'CDN', 'HLS/DASH', 'Node.js', 'PostgreSQL'],
    'ar-account-receivable': ['React', 'Node.js', 'PostgreSQL', 'Workflow Engine', 'Analytics'],
    'bharat-smart-park-app': ['React Native', 'Maps SDK', 'Payments', 'Node.js', 'PostgreSQL'],
    'legal-assistant-app': ['Next.js', 'OCR', 'Vector Store', 'Node.js', 'PostgreSQL'],
  };
  return technologies[projectId] || ['Advanced Technologies', 'Cloud Computing', 'AI/ML'];
}

function getProjectMilestones(projectId: string) {
  const milestones: { [key: string]: Array<{title: string, description: string, date: string, completed: boolean}> } = {
    'jyoti-dhara-ott': [
      { title: 'Concept Design', description: 'Define core OTT experience and content strategy', date: 'TBA', completed: false },
      { title: 'Delivery Pipeline', description: 'Plan streaming pipeline and encoding approach', date: 'TBA', completed: false },
    ],
    'ar-account-receivable': [
      { title: 'Process Mapping', description: 'Map AR workflows and controls', date: 'TBA', completed: false },
      { title: 'Data Model', description: 'Define key entities and analytics structures', date: 'TBA', completed: false },
    ],
    'bharat-smart-park-app': [
      { title: 'Use Case Definition', description: 'Citizen journeys and park admin flows', date: 'TBA', completed: false },
      { title: 'Payments & Access', description: 'Ticketing and access integration plan', date: 'TBA', completed: false },
    ],
    'legal-assistant-app': [
      { title: 'Document Pipeline', description: 'OCR and organization pipeline outline', date: 'TBA', completed: false },
      { title: 'Case View', description: 'Design for case-centric organization', date: 'TBA', completed: false },
    ],
  };
  return milestones[projectId] || [];
}

function getProgressPercentage(status: string): number {
  switch (status) {
    case 'Planning':
      return 25;
    case 'In Progress':
      return 65;
    case 'Beta':
      return 85;
    case 'Coming Soon':
      return 15;
    default:
      return 0;
  }
}