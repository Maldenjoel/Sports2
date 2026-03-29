import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🏆 SportsHub
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/cricket" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Cricket
            </Link>
            <Link href="/football" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Football
            </Link>
            <Link href="/basketball" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Basketball
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
