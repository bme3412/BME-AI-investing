'use client'
import { useState } from 'react'
import ProjectsModal from '../../components/ProjectsModal'
import AboutMe from '../../components/AboutMe'
import ProjectPreviews from '../../components/ProjectPreviews'

export default function PageOne() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <AboutMe />
      </div>

      {/* Projects Modal */}
      <ProjectsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}