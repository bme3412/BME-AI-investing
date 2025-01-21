import React, { useState } from 'react';
import { ArrowRight, Plus, Github } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import Link from 'next/link';

const ProjectPreview = ({ title, description, technologies, image, index, learnMoreUrl, tryItUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isEven = index % 2 === 0;
  
  return (
    <>
      <div className="min-h-[90vh] flex items-center justify-center p-8 bg-black">
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
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-sans"
              >
                <span>Details</span>
                <Plus className="w-4 h-4 group-hover:scale-125 transition-transform" />
              </button>
              {title === "AI Investing Ideas" ? (
                <Link
                  href="/slides"
                  className="group flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-sans"
                >
                  <span>Try it out!</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a
                  href={tryItUrl}
                  className="group flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-sans"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Try it out!</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <a
                href={learnMoreUrl}
                className="group flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors font-sans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className={`rounded-xl overflow-hidden bg-gray-900 p-8 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
            <img
              src={image || "/api/placeholder/800/600"}
              alt={title}
              className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <ProjectDetailModal
        project={{
          title,
          url: tryItUrl,
          imageSrc: image,
          description
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const ProjectPreviews = () => {
  const projects = [
    {
      title: "Clarity 2.0 - Big Tech Investment Co-Pilot",
      description: "Work smarter, not harder, and gain clarity. Ask anything about the world's leading technology companies and get instant answers and insights. Potentially saves users as much as 50-70% of the time it takes to read and analyze complete earnings transcripts (assumes 1-hour transcript and 250 words-per-minute reading speed).",
      technologies: ["OpenAI", "React", "Node.js", "Python", "Pinecone Vector Database","AWS"],
      image: "/next-js-copilot.png",
      learnMoreUrl: "https://github.com/bme3412/next-copilot",
      tryItUrl: "https://investment-copilot-eight.vercel.app/"
    },
    {
      title: "AI Investing Blog",
      description: "Comprehensive thought pieces and case studies about the advantages of using AI to transform investment management.",
      technologies: ["Next.js", "RAG", "Agents", "OpenAI", "Anthropic Claude"],
      image: "/investment-llm-blog.png",
      learnMoreUrl: "https://github.com/bme3412/investment-llm",
      tryItUrl: "https://investment-llm.vercel.app/"
    },
    {
      title: "AI Investing Ideas",
      description: "50-page slide deck documenting how using LLMs and AI techniques can improve the investment management process.",
      technologies: ["PyTorch", "FastAPI", "Redis", "Elasticsearch", "GCP"],
      image: "/buffet-tech.png",
      learnMoreUrl: "https://github.com/bme3412",
      tryItUrl: "https://bme-ai-investing.vercel.app/slides"
    },
    {
      title: "ResumeLLM - About Me",
      description: "I'm looking for my next great opportunity - so I turned my resume and work experience into an LLM co-pilot. Ask questions about my background, projects, and skills using your preferred generative AI model - OpenAI, Google Gemini, or Anthropic.",
      technologies: ["OpenAI o1", "Google Gemini", "Anthropic Claude Sonnet 3.5", "Multi-modal AI", "Next.js","Pinecone", "AWS S3"],
      image: "/resume-llm.png",
      learnMoreUrl: "https://github.com/bme3412/resume-LLM",
      tryItUrl: "https://llm-resume-bme.vercel.app/"
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