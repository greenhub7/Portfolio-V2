import { useEffect, useRef, useState } from 'react';
import { skills } from '../../constants/projects';
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  ShoppingCart, 
  Blocks, 
  Brain,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with staggered delay
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 50);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  const categoryConfig = {
    Frontend: { 
      color: 'from-blue-500 to-cyan-500', 
      icon: Code2, 
      description: 'Modern UI/UX Development' 
    },
    Backend: { 
      color: 'from-green-500 to-emerald-500', 
      icon: Server, 
      description: 'Scalable Server Architecture' 
    },
    DevOps: { 
      color: 'from-orange-500 to-red-500', 
      icon: Cloud, 
      description: 'Cloud & Infrastructure' 
    },
    Database: { 
      color: 'from-purple-500 to-pink-500', 
      icon: Database, 
      description: 'Data Management & Analytics' 
    },
    'E-commerce': { 
      color: 'from-yellow-500 to-amber-500', 
      icon: ShoppingCart, 
      description: 'E-commerce Solutions' 
    },
    Blockchain: { 
      color: 'from-indigo-500 to-blue-500', 
      icon: Blocks, 
      description: 'Web3 & Smart Contracts' 
    },
    AI: { 
      color: 'from-violet-500 to-purple-500', 
      icon: Brain, 
      description: 'Machine Learning & AI' 
    }
  };

  const getSkillLevel = (level: number) => {
    if (level >= 95) return { label: 'Expert', color: 'text-green-400' };
    if (level >= 90) return { label: 'Advanced', color: 'text-blue-400' };
    if (level >= 80) return { label: 'Proficient', color: 'text-purple-400' };
    return { label: 'Intermediate', color: 'text-yellow-400' };
  };

  const stats = [
    { icon: TrendingUp, value: '7+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, value: '35+', label: 'Technologies', color: 'from-green-500 to-emerald-500' },
    { icon: Award, value: '100+', label: 'Projects', color: 'from-purple-500 to-pink-500' },
    { icon: Code2, value: '500K+', label: 'Users Impacted', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="featured-projects-title">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise across the modern technology stack
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div
                key={category}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${config.color} rounded-xl text-white font-semibold shadow-lg`}>
                    <config.icon size={24} />
                    <div>
                      <div className="text-lg font-bold">{category}</div>
                      <div className="text-sm opacity-90">{config.description}</div>
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                  <div className="text-sm text-gray-400 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {categorySkills.length} skills
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => {
                    const globalIndex = skills.findIndex(s => s === skill);
                    const isAnimated = animatedSkills.includes(globalIndex);
                    const skillLevel = getSkillLevel(skill.level);
                    
                    return (
                      <div
                        key={skill.name}
                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        {/* Skill Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                              {skill.name}
                            </h3>
                            <div className={`text-sm font-medium ${skillLevel.color}`}>
                              {skillLevel.label}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white mb-1">
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative bg-white/10 rounded-full overflow-hidden mb-4" style={{ height: '5px' }}>
                          <div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${config.color} transition-all duration-1000 ease-out rounded-full`}
                            style={{
                              width: isAnimated ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          />
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Skill Dots */}
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                  i < Math.ceil(skill.level / 20)
                                    ? `bg-gradient-to-r ${config.color}`
                                    : 'bg-white/20'
                                }`}
                                style={{ transitionDelay: `${(skillIndex * 100) + (i * 50)}ms` }}
                              />
                            ))}
                          </div>
                          <div className="text-xs text-gray-400 font-medium">
                            {Math.ceil(skill.level / 20)}/5
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack Summary */}
        <div className="mt-20">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Full-Stack Expertise
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Frontend Excellence</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Modern React ecosystem with TypeScript, Next.js, and advanced animation libraries for exceptional user experiences
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Backend Mastery</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scalable Node.js applications with robust authentication, real-time features, and microservices architecture
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Multi-cloud deployment with containerization, orchestration, and CI/CD pipeline expertise for reliable delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;