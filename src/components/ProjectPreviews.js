import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const ProjectPreview = ({ title, description, technologies, image, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-black">
      <div className={`max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
        <div className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">{title}</h2>
          <p className="text-lg text-gray-400 font-sans">{description}</p>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider font-sans">Technologies used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full font-sans">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="group flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-sans">
              <span>Learn more</span>
              <Plus className="w-4 h-4 group-hover:scale-125 transition-transform" />
            </button>
            <button className="group flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-sans">
              <span>Try it out</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className={`rounded-xl overflow-hidden bg-gray-900 p-8 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <img
            src={image || "/api/placeholder/800/600"}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectPreviews = () => {
  const projects = [
    {
      title: "Clarity 2.0 - Big Tech Investment Co-Pilot",
      description: "Ask anything about the world's leading technology companies and get instant answers and insights. Potentially saves users as much as 50-70% of the time it takes to read and analyze complete earnings transcripts (assumes 1-hour transcript and 250 words-per-minute reading speed).",
      technologies: ["OpenAI", "React", "Node.js", "Python", "Pinecone Vector Database","AWS"],
      image: "/copilot.png"
    },
    {
      title: "Global Market Analysis",
      description: "Visualize and analyze global market trends using AI to identify patterns and opportunities across different regions and asset classes.",
      technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL", "Docker"],
      image: "/globe.svg"
    },
    {
      title: "Financial Document Processing",
      description: "Automate the extraction and analysis of key information from financial statements, regulatory filings, and research reports.",
      technologies: ["PyTorch", "FastAPI", "Redis", "Elasticsearch", "GCP"],
      image: "/file.svg"
    },
    {
      title: "Portfolio Optimization",
      description: "AI-driven portfolio management tools for better risk assessment and asset allocation strategies.",
      technologies: ["R", "Pandas", "NumPy", "Azure ML", "Tableau"],
      image: "/window.svg"
    }
  ];

  return (
    <div className="w-full">
      {projects.map((project, index) => (
        <ProjectPreview
          key={project.title}
          {...project}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectPreviews;