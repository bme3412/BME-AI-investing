// src/app/page-three/page.js
import Link from 'next/link'

export default function PageThree() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Page Three</h1>
      <p className="text-lg mb-6">This is the content for Page Three.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Go back to Home</a>
      </Link>
    </div>
  )
}
