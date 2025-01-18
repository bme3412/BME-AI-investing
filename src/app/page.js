'use client'
import { useState } from 'react'
import Link from 'next/link'
import ProjectsModal from '../components/ProjectsModal'
import ProjectPreviews from '../components/ProjectPreviews'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-6">
          <h2 className="font-mono text-2xl tracking-tight font-bold 
                        bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                        bg-clip-text text-transparent 
                        hover:scale-105 transition-transform duration-300">
            AI investing portfolio by Brendan Erhard
          </h2>
          <Link href="/page-one" className="relative group">
            <button className="px-6 py-2.5 text-white border border-white/50 rounded-lg 
                           bg-black/30 backdrop-blur-sm
                           group-hover:border-white group-hover:bg-white/10
                           transition-all duration-300 ease-out
                           font-sans">
              <span className="relative z-10 font-medium tracking-wide">Learn More</span>
            </button>
          </Link>
        </div>
      </header>
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-12 md:pt-24 text-center min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight text-white font-sans">
          AI will transform the investment management industry
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-sans">
          AI is already changing the world, and the prospect of integrating generative AI into investment management is a generational opportunity that will transform the industry. View my AI investing projects and see my thoughts and experiences as an AI-obsessed technology investor.
        </p>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-12 px-8 py-4 bg-blue-600 hover:bg-blue-700 
                   text-white rounded-lg text-lg font-medium 
                   transition-colors duration-200 font-sans"
        >
          View Projects
        </button>
      </main>

      {/* Project Previews */}
      <section className="mt-20">
        <ProjectPreviews />
      </section>

      {/* Projects Modal */}
      <ProjectsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}