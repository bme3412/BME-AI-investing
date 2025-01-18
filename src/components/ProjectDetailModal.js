import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const projectDetails = {
    "Clarity 2.0 - Big Tech Investment Co-Pilot": {
      rationale: "Clarity 2.0 was developed to address the growing need for sophisticated investment analysis tools that leverage AI capabilities. The project aims to democratize access to advanced investment insights by providing real-time analysis of complex market data, making it accessible to both individual and institutional investors.",
      features: [
        "Real-time market data analysis with AI-driven insights",
        "Portfolio optimization using advanced algorithms",
        "Risk assessment and mitigation strategies",
        "Custom investment recommendations based on user preferences"
      ],
      images: [
        "/next-js-copilot.png",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    },
    "AI Investing Blog": {
      rationale: "The AI Investment Blog serves as a knowledge hub for investors seeking to understand the intersection of artificial intelligence and investment strategies. It was created to bridge the gap between technical AI concepts and practical investment applications.",
      features: [
        "In-depth analysis of AI-driven investment strategies",
        "Market trend predictions using machine learning",
        "Educational content on AI in finance",
        "Case studies of successful AI implementations"
      ],
      images: [
        "/investment-llm-blog.png",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    },
    "AI Investing Ideas": {
      rationale: "This platform was created to showcase innovative investment opportunities that leverage AI technologies. It serves as a curated collection of market trends and investment strategies that combine traditional wisdom with cutting-edge AI capabilities.",
      features: [
        "AI-driven market opportunity identification",
        "Risk-reward analysis using machine learning",
        "Automated trend detection and analysis",
        "Custom investment strategy generation"
      ],
      images: [
        "/buffet-tech.png",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    },
    "ResumeLLM - About Me": {
      rationale: "Resume-LLM was developed to revolutionize the way job seekers and recruiters interact with resume content. By leveraging multiple LLM models, it provides deeper insights into qualifications and experience, making the hiring process more efficient and effective.",
      features: [
        "Multi-model LLM analysis for comprehensive insights",
        "Skill gap identification and recommendations",
        "Career path optimization suggestions",
        "ATS compatibility analysis and improvements"
      ],
      images: [
        "/resume-llm.png",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    }
  };

  // Add a fallback for when project details aren't found
  const details = projectDetails[project.title] || {
    rationale: project.description,
    features: [],
    images: [project.imageSrc]
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[60]
                   animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      <div className="fixed inset-4 z-[60] overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl 
                       shadow-2xl shadow-blue-500/10
                       border border-gray-800/50 w-full max-w-7xl
                       animate-in slide-in-from-bottom-4 duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-8 py-6 border-b border-gray-800/50
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              <h2 className="text-2xl font-bold font-mono tracking-tight
                           bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                           bg-clip-text text-transparent">
                {project.title}
              </h2>
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full
                         text-gray-400 hover:text-white
                         hover:bg-gray-800
                         border border-gray-700 hover:border-gray-600
                         transition-all duration-200 ease-out
                         shadow-sm hover:shadow-md hover:shadow-blue-500/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left Side - Project Rationale */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4
                               font-mono">
                    Project Rationale
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {details.rationale}
                  </p>
                </div>

                {details.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4
                                 font-mono">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="inline-block w-2 h-2 mt-2 mr-3 
                                       bg-gradient-to-r from-blue-400 to-purple-400 
                                       rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3
                           bg-gradient-to-r from-blue-500 to-purple-500
                           hover:from-blue-600 hover:to-purple-600
                           rounded-lg font-semibold text-white
                           transition-all duration-200 shadow-lg
                           hover:shadow-xl hover:shadow-blue-500/20"
                >
                  Visit Project
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16m0 0l-6-6m6 6l-6 6" 
                          stroke="currentColor" strokeWidth="2" 
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Right Side - Project Images */}
              <div className="space-y-6">
                {details.images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative rounded-xl overflow-hidden
                             border border-gray-800/50
                             shadow-lg hover:shadow-xl hover:shadow-blue-500/20
                             transition-all duration-200
                             aspect-video group"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover
                               transition-transform duration-300
                               group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t 
                                from-black/40 to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-gray-800/50
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailModal;