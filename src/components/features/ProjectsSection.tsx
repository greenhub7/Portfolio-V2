import { useState } from 'react';
import { projects } from '../../constants/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../../types';
import { Filter, Grid, List, Search } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI', 'Blockchain', 'Fullstack', 'Chatbot', 'App'];
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const categoryStats = {
    All: projects.length,
    AI: projects.filter(p => p.category === 'AI').length,
    Blockchain: projects.filter(p => p.category === 'Blockchain').length,
    Fullstack: projects.filter(p => p.category === 'Fullstack').length,
    Chatbot: projects.filter(p => p.category === 'Chatbot').length,
    App: projects.filter(p => p.category === 'App').length,
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="featured-projects-title">
              Featured Projects
            </span>
          </h2>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="relative z-10">{category}</span>
                <span className="ml-2 text-xs opacity-75">
                  ({categoryStats[category as keyof typeof categoryStats]})
                </span>
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Results Summary */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="mb-8 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <p className="text-gray-300">
              Found <span className="text-blue-400 font-semibold">{filteredProjects.length}</span> projects
              {searchTerm && (
                <span> matching "<span className="text-white">{searchTerm}</span>"</span>
              )}
              {selectedCategory !== 'All' && (
                <span> in <span className="text-white">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && selectedCategory === 'All' && !searchTerm && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                    featured={true}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div className="mb-8">
          {!(selectedCategory === 'All' && !searchTerm && featuredProjects.length > 0) && (
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Projects' : `${selectedCategory} Projects`}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
          )}
          
          {/* Projects Grid/List */}
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }>
            {(selectedCategory === 'All' && !searchTerm ? regularProjects : filteredProjects).map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  viewMode={viewMode}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;