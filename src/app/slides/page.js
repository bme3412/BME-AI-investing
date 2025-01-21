// src/app/slides/page.js
'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PDFViewer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-white">AI Investing Ideas</h1>
        </div>

        {/* PDF Container */}
        <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-[16/9] w-full">
            <iframe
              src="/AI-Investing-BrendanErhard.pdf"
              className="w-full h-full border-none"
              title="AI Investing Ideas Presentation"
              allowFullScreen
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Use your PDF viewer controls to navigate through the presentation</p>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;