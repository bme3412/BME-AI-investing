// src/app/page.js
import Panel from '../components/Panel'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with About Me */}
      <header className="flex justify-end p-4">
        <AboutMe />
      </header>

      {/* Main Content with Panels */}
      <main className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-4">
          <Panel title="Page One" href="/page-one" />
          <Panel title="Page Two" href="/page-two" />
          <Panel title="Page Three" href="/page-three" />
          <Panel title="Page Four" href="/page-four" />
        </div>
      </main>
    </div>
  )
}
