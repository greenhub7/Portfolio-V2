import { useEffect, useState } from 'react';
import { ChevronDown, Github, Mail, Linkedin, Brain, Blocks, Monitor, Bot, Smartphone, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      name: 'AI & Machine Learning',
      description: 'Neural networks, NLP, Computer Vision',
      icon: Brain,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Blockchain Development',
      description: 'Smart contracts, DeFi, Web3 integration',
      icon: Blocks,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Full Stack Development',
      description: 'React, Node.js, Cloud architecture',
      icon: Monitor,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Bot Development',
      description: 'Trading bots, Automation, APIs',
      icon: Bot,
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Mobile Applications',
      description: 'React Native, Flutter, iOS/Android',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    { name: 'Email', icon: Mail, url: 'mailto:freeburner80@gmail.com', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/greenhub7', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vex-h-pro-960729352/', color: 'hover:text-blue-500' }
  ];

  const metrics = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Client Satisfaction', value: '100%' }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for new projects
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
                  Full Stack Developer & Technical Architect
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Building Digital
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Transforming ideas into scalable applications with <span className="text-blue-400 font-semibold">7+ years</span> of expertise 
                  in modern web technologies, blockchain, and AI integration.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                {metrics.map((metric, index) => (
                  <div 
                    key={metric.label} 
                    className="text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToProjects}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="mailto:freeburner80@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <Mail size={20} />
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <p className="text-gray-400 text-sm">Connect with me:</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5 text-gray-300 group-hover:text-current" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-white mb-4">Expertise & Technologies</h2>
                <p className="text-gray-400">Specialized in cutting-edge technologies that drive innovation</p>
              </div>
              
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm">Explore My Work</span>
            <ChevronDown size={24} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;