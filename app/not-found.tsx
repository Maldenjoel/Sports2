import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The match prediction you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
          <Link 
            href="/cricket" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            View Cricket Predictions
          </Link>
        </div>

        <div className="mt-12 bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Looking for something specific?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <Link href="/cricket/ipl2026" className="bg-white p-4 rounded hover:shadow-md transition">
              <span className="text-2xl mb-2 block">🏏</span>
              <p className="font-semibold">IPL 2026</p>
            </Link>
            <Link href="/cricket/international" className="bg-white p-4 rounded hover:shadow-md transition">
              <span className="text-2xl mb-2 block">🌍</span>
              <p className="font-semibold">International Cricket</p>
            </Link>
            <Link href="/football" className="bg-white p-4 rounded hover:shadow-md transition">
              <span className="text-2xl mb-2 block">⚽</span>
              <p className="font-semibold">Football</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
