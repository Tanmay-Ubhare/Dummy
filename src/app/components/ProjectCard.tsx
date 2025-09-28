import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Planning' | 'In Progress' | 'Coming Soon' | 'Beta';
  timeline: string;
  category: string;
}

interface ProjectCardProps {
  projects: Project[];
  isPreview?: boolean;
}

export default function ProjectCard({ projects, isPreview = false }: ProjectCardProps) {
  const displayProjects = isPreview ? projects.slice(0, 2) : projects;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Coming Soon':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Beta':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Upcoming Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exciting initiatives and innovations in development to shape the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-secondary">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.timeline}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {project.timeline}
                  </div>
                  <button className="text-primary hover:text-secondary font-semibold text-sm transition-colors duration-200">
                    Stay Updated →
                  </button>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="px-6 pb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      project.status === 'Planning'
                        ? 'bg-yellow-500 w-1/4'
                        : project.status === 'In Progress'
                        ? 'bg-blue-500 w-2/3'
                        : project.status === 'Beta'
                        ? 'bg-green-500 w-5/6'
                        : 'bg-purple-500 w-1/6'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View All Projects
              <svg
                className="ml-2 h-4 w-4"
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