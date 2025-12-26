import React, { useState } from 'react';
import { ExternalLink, Github, Users, Star, Calendar, ArrowRight, Brain, Blocks, Monitor, Bot, Smartphone } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  featured?: boolean;
  viewMode?: 'grid' | 'list';
}

const ProjectCard = ({ project, onClick, featured = false, viewMode = 'grid' }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const categoryColors = {
    AI: 'from-blue-500 to-cyan-500',
    Blockchain: 'from-yellow-500 to-orange-500', 
    App: 'from-green-500 to-emerald-500',
    Chatbot: 'from-purple-500 to-pink-500',
    Fullstack: 'from-red-500 to-rose-500'
  };

  const categoryIcons = {
    AI: Brain,
    Blockchain: Blocks,
    App: Smartphone,
    Chatbot: Bot,
    Fullstack: Monitor
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex gap-6">
          {/* Image */}
          <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            {!imageError ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                {React.createElement(categoryIcons[project.category], { 
                  className: "w-6 h-6 text-white/60" 
                })}
              </div>
            )}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span className="text-xs text-yellow-400 font-medium">Featured</span>
                    </div>
                  )}
                </div>
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${categoryColors[project.category]} text-white`}>
                  {React.createElement(categoryIcons[project.category], { 
                    className: "w-3 h-3" 
                  })}
                  {project.category}
                </div>
              </div>
              
              <div className="flex gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600/20 hover:bg-blue-600 border border-blue-600/30 hover:border-blue-600 text-blue-400 hover:text-white rounded-lg transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-600/20 hover:bg-gray-600 border border-gray-600/30 hover:border-gray-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {project.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/10">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {project.userCount && (
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <Users size={14} />
                  <span>{project.userCount}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer ${
        featured ? 'lg:col-span-1' : ''
      }`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        {!imageError ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            {React.createElement(categoryIcons[project.category], { 
              className: "w-12 h-12 text-white/60" 
            })}
          </div>
        )}
        
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[project.category]} text-white shadow-lg`}>
          {React.createElement(categoryIcons[project.category], { 
            className: "w-3 h-3 mr-1 inline" 
          })}
          {project.category}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-lg">
            <Star size={12} className="fill-current" />
            Featured
          </div>
        )}

        {/* Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>

        {/* User Count Badge */}
        {project.userCount && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-green-400 text-sm font-medium">
            <Users size={14} />
            {project.userCount}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <ArrowRight 
            size={20} 
            className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" 
          />
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 4 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 4 : 3) && (
            <span className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/10">
              +{project.technologies.length - (featured ? 4 : 3)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;