import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectDetailModal from './ProjectDetailModal';

const Panel = ({ 
  title, 
  url, 
  imageSrc = '/api/placeholder/400/300',
  description = 'Project description goes here',
  showDetails = true // New prop to control details button visibility
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Check if URL is external
  const isExternal = url?.startsWith('http') || url?.startsWith('https');
  
  // Wrapper component based on whether URL is external
  const Wrapper = ({ children }) => {
    if (isExternal) {
      return (
        <div className="block transform hover:-translate-y-1 transition-transform duration-300 ease-out">
          {children}
        </div>
      );
    }
    return (
      <div className="block transform hover:-translate-y-1 transition-transform duration-300 ease-out">
        {children}
      </div>
    );
  };

  return (
    <>
      <Wrapper>
        <div className="bg-white 
                      rounded-2xl
                      shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]
                      hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
                      transition-all duration-300 ease-out
                      cursor-pointer h-96 flex flex-col overflow-hidden
                      border border-gray-100
                      relative group">
          {/* Title Section */}
          <div className="bg-white border-b border-gray-100 p-4 relative z-20">
            <h2 className="text-xl font-bold text-gray-800 
                         text-center tracking-wide">
              {title}
            </h2>
          </div>
          
          {/* Image Section */}
          <div className="relative flex-grow w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Window Shade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/95
                         transform -translate-y-full transition-transform 
                         duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)]
                         group-hover:translate-y-0
                         flex items-center justify-center">
              <div className="p-8 max-w-md transition-none">
                <p className="text-gray-600 text-center leading-relaxed">
                  {description}
                </p>
                <div className="mt-6 flex justify-center gap-6">
                  {isExternal ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 
                               font-medium hover:text-blue-700"
                    >
                      Visit Project 
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6" 
                              stroke="currentColor" strokeWidth="2" 
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={url || '#'}
                      className="inline-flex items-center gap-2 text-blue-600 
                               font-medium hover:text-blue-700"
                    >
                      Visit Project 
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6" 
                              stroke="currentColor" strokeWidth="2" 
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  )}
                  
                  {showDetails && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 
                               text-blue-600 font-medium hover:text-blue-700"
                    >
                      View Details
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                              stroke="currentColor" strokeWidth="2" 
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                              stroke="currentColor" strokeWidth="2" 
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {showDetails && (
        <ProjectDetailModal
          project={{ title, url, imageSrc, description }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Panel;