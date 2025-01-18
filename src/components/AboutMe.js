import React from 'react';
import { FileText, GithubIcon, LinkedinIcon, Mail, Download, Award, Briefcase, Code, BookOpen, GitBranch, Sparkles } from 'lucide-react';

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
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Portfolio Analyst & AI Technology Innovator
          </h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <a 
              href="/resume.pdf" 
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <FileText size={18} />
              Resume
            </a>
            <a 
              href="/cover-letter.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Download size={18} />
              Cover Letter
            </a>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Briefcase size={24} />
            Professional Summary
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lead Portfolio Analyst at Columbia Threadneedle Investments, managing the Global Technology Growth Fund (CMTFX) 
              with $3.5bn AUM. The fund has achieved remarkable success, winning the Refinitiv Lipper Fund award for 5 
              consecutive years in the science and technology category, consistently delivering top-quartile performance 
              over 5 years and top-decile performance over 10 years.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Combining deep financial expertise with cutting-edge AI technology, I`ve pioneered the development of 
              innovative tools that enhance investment research and analysis. My approach integrates traditional 
              financial analysis with machine learning and large language models to generate deeper insights and 
              more efficient research processes.
            </p>
          </div>
        </section>

        {/* Current Role Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Award size={24} />
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Investment Performance</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Helped grow fund assets from $500M to $3.5bn</li>
                <li>• Top-quartile performance over 5 years (193 funds)</li>
                <li>• Top-decile performance over 10 years (156 funds)</li>
                <li>• 5 consecutive Refinitiv Lipper Fund awards</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Research & Analysis</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles size={24} />
            AI/ML Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.aiProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm">
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Code size={24} />
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Development & AI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Financial Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {skills.financial.map((skill, index) => (
                  <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen size={24} />
            Education & Achievements
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Boston College</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Bachelor of Arts in International Studies</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Concentration in Economics | GPA: 3.55/4.00</p>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">• High School Class Valedictorian (Class of 500)</p>
              <p className="text-gray-700 dark:text-gray-300">• Eagle Scout Award - Boy Scouts of America</p>
              <p className="text-gray-700 dark:text-gray-300">• Study Abroad: Institut d`Etudes Politiques de Paris</p>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <GitBranch size={24} />
            Open Source & Community
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Active contributor to the AI and financial technology community. My project portfolio and contributions 
              can be found at: <a href="https://ai-project-deploy.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">
              ai-project-deploy.vercel.app</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;