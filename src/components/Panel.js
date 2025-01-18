import Link from 'next/link'
import Image from 'next/image'

const Panel = ({ 
  title, 
  url, 
  imageSrc = '/api/placeholder/400/300',
  description = 'Project description goes here'
}) => {
  // Check if URL is external
  const isExternal = url?.startsWith('http') || url?.startsWith('https');
  
  // Wrapper component based on whether URL is external
  const Wrapper = ({ children }) => {
    if (isExternal) {
      return (
        <a href={url} 
           target="_blank" 
           rel="noopener noreferrer"
           className="block transform hover:-translate-y-1 transition-transform duration-300 ease-out">
          {children}
        </a>
      );
    }
    return (
      <Link href={url || '#'} className="block transform hover:-translate-y-1 transition-transform duration-300 ease-out">
        {children}
      </Link>
    );
  };

  return (
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
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 text-blue-600 
                             font-medium hover:text-blue-700">
                  Explore Project 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16m0 0l-6-6m6 6l-6 6" 
                          stroke="currentColor" strokeWidth="2" 
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Panel