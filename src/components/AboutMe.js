import React from 'react';
import Link from 'next/link';
import { FileText, GithubIcon, LinkedinIcon, Mail, Download, Award, Briefcase, Code, BookOpen, GitBranch, Sparkles, ArrowLeft } from 'lucide-react';

const AboutMe = () => {
  const skills = {
    technical: [
      "Python (pandas, matplotlib, scikit-learn, numpy)",
      "Large Language Models (OpenAI, Anthropic, Replicate.ai)",
      "Web Development (Flask, JavaScript, HTML/CSS)",
      "Database Management (MySQL, MongoDB)",
      "Financial Platforms (Bloomberg BQNT/BQL, Blackrock Aladdin)",
      "AI/ML Frameworks (langchain, llama-index, huggingface)"
    ],
    financial: [
      "Portfolio Management",
      "Investment Analysis",
      "Market Research",
      "Financial Modeling",
      "Risk Assessment",
      "IPO Analysis"
    ],
    aiProjects: [
      {
        title: "10-K Parser",
        description: "Automated summarization tool for 10-K content with topic-based document querying capabilities",
        tech: ["OpenAI", "Vector Databases", "Python"]
      },
      {
        title: "Earnings Analyzer",
        description: "Real-time earnings call transcription and analysis system using OpenAI Whisper and AWS",
        tech: ["AWS", "OpenAI Whisper", "Audio Processing"]
      },
      {
        title: "Investment Research Assistant",
        description: "Automated information extraction from 4,000+ pages using OpenAI API and langchain",
        tech: ["LangChain", "OpenAI API", "Document Processing"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Back Button */}
      <div className="p-6">
        <Link href="/" className="inline-flex items-center space-x-2 group">
          <button className="px-6 py-2.5 text-white border border-white/50 rounded-lg
                          bg-black/30 backdrop-blur-sm
                          group-hover:border-white group-hover:bg-white/10
                          transition-all duration-300 ease-out
                          font-sans">
            <span className="relative z-10 font-medium tracking-wide flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </span>
          </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl p-8">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 font-mono tracking-tight
                         bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                         bg-clip-text text-transparent">
              Global Technology Investor & AI-Obsessed Developer
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href="/resume.pdf" 
                className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg
                          bg-black/30 backdrop-blur-sm
                          hover:border-white hover:bg-white/10
                          transition-all duration-300 text-white"
              >
                <FileText size={18} />
                Resume
              </a>
              <a 
                href="/cover-letter.pdf"
                className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg
                          bg-black/30 backdrop-blur-sm
                          hover:border-white hover:bg-white/10
                          transition-all duration-300 text-white"
              >
                <Download size={18} />
                Cover Letter
              </a>
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg
                          bg-black/30 backdrop-blur-sm
                          hover:border-white hover:bg-white/10
                          transition-all duration-300 text-white"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg
                          bg-black/30 backdrop-blur-sm
                          hover:border-white hover:bg-white/10
                          transition-all duration-300 text-white"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg
                          bg-black/30 backdrop-blur-sm
                          hover:border-white hover:bg-white/10
                          transition-all duration-300 text-white"
              >
                <Mail size={18} />
                Contact
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                         from-emerald-400 via-teal-500 to-cyan-500 flex items-center gap-2">
              <Briefcase size={24} />
              Professional Summary
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                Lead Portfolio Analyst at Columbia Threadneedle Investments, managing the Global Technology Growth Fund (CMTFX) 
                with $3.5bn AUM. The fund has achieved remarkable success, winning the Refinitiv Lipper Fund award for 5 
                consecutive years in the science and technology category, consistently delivering top-quartile performance 
                over 5 years and top-decile performance over 10 years.
              </p>
              <p className="text-gray-300">
                Combining deep financial expertise with cutting-edge AI technology, I`ve pioneered the development of 
                innovative tools that enhance investment research and analysis. My approach integrates traditional 
                financial analysis with machine learning and large language models to generate deeper insights and 
                more efficient research processes.
              </p>
            </div>
          </section>

          {/* Current Role Highlights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                         from-blue-400 to-purple-400 flex items-center gap-2">
              <Award size={24} />
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Investment Performance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Helped grow fund assets from $500M to $3.5bn</li>
                  <li>• Top-quartile performance over 5 years (193 funds)</li>
                  <li>• Top-decile performance over 10 years (156 funds)</li>
                  <li>• 5 consecutive Refinitiv Lipper Fund awards</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Research & Analysis</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Lead analyst for 100+ technology and healthcare IPOs annually</li>
                  <li>• Developed proprietary Python-based analysis tools</li>
                  <li>• Created interactive sector analysis models</li>
                  <li>• Managed $10M+ capital deployment decisions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                         from-emerald-400 to-cyan-400 flex items-center gap-2">
              <Sparkles size={24} />
              AI/ML Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.aiProjects.map((project, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-sm border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                         from-purple-400 to-pink-400 flex items-center gap-2">
              <Code size={24} />
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Development & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Financial Analysis</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.financial.map((skill, index) => (
                    <span key={index} className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                         from-blue-400 to-cyan-400 flex items-center gap-2">
              <BookOpen size={24} />
              Education & Achievements
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Boston College</h3>
              <p className="text-gray-300 mb-2">Bachelor of Arts in International Studies</p>
              <p className="text-gray-300 mb-4">Concentration in Economics | GPA: 3.55/4.00</p>
              <div className="space-y-2">
                <p className="text-gray-300">• High School Class Valedictorian (Class of 500)</p>
                <p className="text-gray-300">• Eagle Scout Award - Boy Scouts of America</p>
                <p className="text-gray-300">• Study Abroad: Institut d`Etudes Politiques de Paris</p>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                         from-teal-400 to-emerald-400 flex items-center gap-2">
              <GitBranch size={24} />
              Open Source & Community
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                Active contributor to the AI and financial technology community. My project portfolio and contributions 
                can be found at: <a href="https://ai-project-deploy.vercel.app" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200">
                ai-project-deploy.vercel.app</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;