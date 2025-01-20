import React, { useState } from 'react';
import Panel from './Panel';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsModal = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isOpen) return null;

  const projects = [
    {
      title: "Clarity 2.0 - Investment CoPilot",
      url: "https://clarity-2-demo.yourdomain.com",
      imageSrc: "/next-js-copilot.png",
      description: "Ask anything about Big Tech companies and get instant insights. Built with generative AI and vector databases and saves users hours of time. "
    },
    {
      title: "AI Investing Blog",
      url: "https://investment-llm.vercel.app/",
      imageSrc: "/investment-llm-blog.png",
      description: "Comprehensive thought pieces and case studies about the advantages of using AI to transform investment management."
    },
    {
      title: "Resume-LLM",
      url: "https://llm-resume-bme.vercel.app/",
      imageSrc: "/resume-llm.png",
      description: "Interactive AI resume powered by AI - ask anything about my background, projects, and experiences!"
    },
    {
      title: "Invest with AI Ideas",
      url: "https://ai-investing-presentation.yourdomain.com",
      imageSrc: "/buffet-tech.png",
      description: "100-page slide deck of using LLMs and AI techniques to improve the investment management process."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = () => {
    const numVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    let indices = [];
    for (let i = 0; i < numVisible; i++) {
      indices.push((activeIndex + i) % projects.length);
    }
    return indices;
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50
                   animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      <div className="fixed inset-4 z-50 overflow-hidden">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl 
                      shadow-2xl shadow-blue-500/10
                      border border-gray-800/50
                      w-full max-w-6xl 
                      animate-in slide-in-from-bottom-4 duration-300
                      font-sans"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative px-8 py-6 border-b border-gray-800/50
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              <h2 className="text-2xl font-bold font-mono tracking-tight
                           bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                           bg-clip-text text-transparent">
                AI Investing Projects - Quick View
              </h2>
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full
                         text-gray-400 hover:text-white
                         hover:bg-gray-800
                         border border-gray-700 hover:border-gray-600
                         transition-all duration-200 ease-out
                         shadow-sm hover:shadow-md hover:shadow-blue-500/10
                         font-sans"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative p-8">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10
                         p-2 rounded-full bg-gray-800/80 text-white
                         hover:bg-gray-700 transition-all duration-200
                         border border-gray-700"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10
                         p-2 rounded-full bg-gray-800/80 text-white
                         hover:bg-gray-700 transition-all duration-200
                         border border-gray-700"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visibleProjects().map((projectIndex) => {
                  const project = projects[projectIndex];
                  
                  return (
                    <div key={projectIndex} className="relative overflow-visible p-2 -m-2">
                      <div className="transform transition-all duration-300 ease-out origin-center
                                    hover:scale-110 hover:z-30 relative">
                        <div className="relative">
                          <Panel {...project} showDetails={false} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="px-8 py-6 border-t border-gray-800/50
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsModal;