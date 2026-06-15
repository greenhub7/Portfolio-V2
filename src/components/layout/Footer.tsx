import { Mail, Github, Linkedin } from 'lucide-react';

// Custom Discord Icon Component
const DiscordIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// Custom Telegram Icon Component
const TelegramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.820 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              VexPro
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              United by innovation, I can push the boundaries of AI, Blockchain, and web development — building a smarter, more connected future, one line of code at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:freeburner@gmail.com?subject=To%20VexPro&body=Hello%20TAO-STAR%2C%0A%0A..."
                className="p-3 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <Mail size={18} />
              </a>
              
              <a
                href="https://discord.com/users/tytanesk_7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <DiscordIcon size={18} />
              </a>

              <a
                href="https://t.me/Macbooksky"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <TelegramIcon size={18} />
              </a>

              <a
                href="https://wa.me/12695882615"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/in/vex-h-pro-960729352"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
              
              <a
                href="https://github.com/greenhub7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['About', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>AI/ML Development</li>
              <li>Blockchain Solutions</li>
              <li>Full Stack Development</li>
              <li>Chatbot Integration</li>
              <li>Mobile App Development</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} All rights reserved | Designed by VexPro.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for hire
            </span>
            <span>Response time: &lt; 24h</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
