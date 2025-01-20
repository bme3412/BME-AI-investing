// src/components/Footer.js
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8">
            <Link 
              href="https://github.com/bme3412" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </Link>
            <Link 
              href="https://linkedin.com/in/brendan-erhard" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </Link>
            <Link 
              href="mailto:erhardbr@gmail.com"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </Link>
          </div>

          <div className="font-mono text-sm text-white">
            © {new Date().getFullYear()} Brendan Erhard | erhardbr@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;