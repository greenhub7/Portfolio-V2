import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/features/ParticleBackground';
import HeroSection from './components/features/HeroSection';
import ProjectsSection from './components/features/ProjectsSection';
import SkillsSection from './components/features/SkillsSection';
import TestimonialsSection from './components/features/TestimonialsSection';
import ContactSection from './components/features/ContactSection';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom animations to document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }

      @keyframes spin-slow {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
      }

      @keyframes gradientShift {
        0%, 100% { 
          background-position: 0% 50%; 
        }
        50% { 
          background-position: 100% 50%; 
        }
      }

      @keyframes subtleFloat {
        0%, 100% { 
          transform: translateY(0px); 
        }
        50% { 
          transform: translateY(-3px); 
        }
      }

      @keyframes textGlow {
        0%, 100% { 
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.3),
                       0 0 20px rgba(139, 92, 246, 0.2),
                       0 0 30px rgba(6, 182, 212, 0.1);
        }
        50% { 
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.5),
                       0 0 30px rgba(139, 92, 246, 0.3),
                       0 0 45px rgba(6, 182, 212, 0.2);
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }

      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }

      .animate-gradient-shift {
        background-size: 200% 200%;
        animation: gradientShift 4s ease-in-out infinite;
      }

      .animate-subtle-float {
        animation: subtleFloat 3s ease-in-out infinite;
      }

      .animate-text-glow {
        animation: textGlow 3s ease-in-out infinite;
      }

      .featured-projects-title {
        background: linear-gradient(
          45deg,
          #3b82f6 0%,
          #8b5cf6 25%,
          #06b6d4 50%,
          #3b82f6 75%,
          #8b5cf6 100%
        );
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: gradientShift 4s ease-in-out infinite, 
                   subtleFloat 3s ease-in-out infinite,
                   textGlow 3s ease-in-out infinite;
      }
      
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Accessibility - Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .animate-fade-in-up,
        .animate-fade-in,
        .animate-slide-up,
        .animate-float,
        .animate-shimmer,
        .animate-spin-slow {
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      
      <main className="relative z-10">
        <section id="about">
          <HeroSection />
        </section>
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;