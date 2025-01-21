'use client';

import React, { useState } from 'react';
import { FileText, GithubIcon, LinkedinIcon, Mail, Sparkles, X } from 'lucide-react';

const AboutIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <a 
                href="mailto:brendan.erhard@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="text-blue-400" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-400">erhardbr@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/brendan-erhard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <LinkedinIcon className="text-blue-400" size={20} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-400">Connect with me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-mono tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Global Technology Investor & AI-Obsessed Developer
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="/Brendan-Erhard-Resume-1.2025.pdf" className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300">
              <FileText size={18} />
              Resume
            </a>
            <a href="/Brendan-Erhard-coverletter-2025.pdf" className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300">
              <FileText size={18} />
              Cover Letter
            </a>
            <a href="https://github.com/bme3412" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300">
              <GithubIcon size={18} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/brendan-erhard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300">
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Mail size={18} />
              Contact
            </button>
          </div>
        </header>

        {/* Introduction */}
        <section className="prose prose-invert max-w-none">
          <div className="bg-white/5 rounded-lg p-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              <Sparkles size={24} className="text-blue-400" />
              Summary
            </h2>
            <p className="text-gray-300 mb-4">
              Hi, I`m Brendan, thank you for visiting my AI/LLM Investing project portfolio. 
              As a global technology investor and analyst on a $4 billion AUM global tech fund, I have had a front-row seat to the explosion of AI across the economy. 
              It has been fascinating to be a part of. I remain very enthusiastic about the intersection of AI and investing, and I am excited to share my journey with you.
            </p>
            <p className="text-gray-300 mb-4">
              Since teaching myself Python in 2019, what started as a way to enhance my investment process has evolved into a deep passion for programming and AI development. I hope my hands-on experience and projects inspire you to explore the world of AI investing.
              I firmly believe that AI will transform the investment management industry, and I am excited to be a part of that transformation.
            </p>
            <p className="text-gray-300 mb-4">
              In addition to being a full-time tech investor, my technical journey spans multiple domains, including:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Building vector databases using Pydantic, Pinecone, and FAISS</li>
              <li>• Developing NLP solutions with Langchain, LlamaIndex, and Hugging Face</li>
              <li>• Creating RAG pipelines and implementing time series forecasting with Meta Prophet</li>
              <li>• Deploying full-stack applications (Python & JavaScript) that integrate OpenAI, Anthropic, and Google Gemini APIs</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutIntro;