import React from 'react';
import Panel from './Panel';
import { X } from 'lucide-react';

const ProjectsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop with enhanced blur and smooth animation */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50
                  opacity-100 transition-all duration-300 ease-in-out"
        onClick={onClose}
      />
      
      {/* Modal Container - adjusted for single pane fit */}
      <div className="fixed inset-4 z-50">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative bg-white dark:bg-gray-900 rounded-3xl 
                      shadow-2xl shadow-black/20 dark:shadow-black/40
                      border border-gray-200 dark:border-gray-800
                      w-full max-w-6xl transform transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Compact Header Area */}
            <div className="relative px-6 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Projects
              </h2>
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-3 right-4 p-1.5 rounded-full
                         text-gray-500 hover:text-gray-700 dark:text-gray-400 
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         transition-all duration-150 ease-in-out"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Content Area */}
            <div className="p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Panel 
                  title="Clarity 2.0 - Investment CoPilot" 
                  href="/page-one"
                  imageSrc="/copilot.png"
                  description="A powerful tool for organizing and visualizing complex information."
                  imageSize="small" // Add this prop to Panel component
                />
                <Panel 
                  title="Invest with AI blog" 
                  href="/page-two"
                  imageSrc="/globe.svg"
                  description="Exploring the intersection of AI and investment strategies."
                  imageSize="small"
                />
                <Panel 
                  title="Resume-LLM" 
                  href="/page-three"
                  imageSrc="/file.svg"
                  description="An innovative approach to resume creation and analysis."
                  imageSize="small"
                />
                <Panel 
                  title="Invest with AI Ideas" 
                  href="/page-four"
                  imageSrc="/window.svg"
                  description="A curated collection of AI-driven investment insights."
                  imageSize="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsModal;