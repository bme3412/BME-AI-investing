import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const projectDetails = {
    "Clarity 2.0 - Big Tech Investment Co-Pilot": {
      rationale: "Clarity 2.0 - ask anything about the world's leading technology companies and get instant answers and insights. Potentially saves users as much as 50-70% of the time it takes to read and analyze complete earnings transcripts (assumes 1-hour transcript and 250 words-per-minute reading speed).",
      features: [
        "Uses RAG techniques and vector database technology to enable semantic search across 10 of the most important tech companies",
        "Embeddings generated and stored for 200+ quarterly earnings transcripts and financials",
        "Enables users to query across companies, over time periods or specific points in time",
        "Hours of time saved per users, all powered by generative AI"
      ],
      images: [
        "/next-js-copilot.png",
        "/clarity-prompt.png",
        "/clarity-response.png"
      ]
    },
    "AI Investing Blog": {
      rationale: "Comprehensive thought pieces and case studies about the advantages of using AI to transform investment management.",
      features: [
        "Provides gentle introduction to LLM technology and its applications",
        "Articles on Retrieval Augmented Generation (RAG) techniques, Vector Databases, Embeddings, Agents all applied to investment management",
        "Includes case studies of sucessful AI implementations by prominent investors and academic research",
      ],
      images: [
        "/investment-llm-blog.png",
        "/blog-llm.png",
        "/blog-casestudy.png"
      ]
    },
    "AI Investing Ideas": {
      rationale: "50-page slide deck documenting how using LLMs and AI techniques can improve the investment management process.",
      features: [
        "Provides details on several end-to-end examples of LLM applications used in investment management",
        "Includes examples of actual prompts used in applications",
        "Includes best practices and philosopy of using LLMs, through hands-on experience",
        "Provides high-level overivew of AI techniques for investment management"
      ],
      images: [
        "/slide-deck-cover.png",
        "/examples.png",
        "/prompts.png"
      ]
    },
    "ResumeLLM - About Me": {
      rationale: "I'm looking for my next great opportunity - so I turned my resume and work experience into an LLM co-pilot. Ask questions about my background, projects, and skills using your preferred generative AI model - OpenAI, Google Gemini, or Anthropic.",
      features: [
        "Uses RAG techniques and vector database technology to enable semantic search across my work experience, background, skills and projects",
        "Integrates OpenAI ChatGPT-4o, Google Gemini, and Anthropic Claude Sonnet 3.5 to generate dynamic responses",
        "Multi-modal option with ability to generate images to supplement responses using replicate.ai",
      ],
      images: [
        "/resume-llm.png",
        "/openai.png",
        "/google-ai.png"
      ]
    }
  };

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
                         shadow-sm hover:shadow-md hover:shadow-blue-500/10
                         font-sans"
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
                  <p className="text-gray-300 leading-relaxed font-sans">
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
                        <li key={index} className="flex items-start text-gray-300 font-sans">
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
                           hover:shadow-xl hover:shadow-blue-500/20
                           font-sans"
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
              <div className="space-y-6 lg:col-span-1">
                {details.images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative rounded-xl overflow-hidden
                             border border-gray-800/50
                             shadow-lg hover:shadow-xl hover:shadow-blue-500/20
                             transition-all duration-200
                             h-64 w-full group"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain
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