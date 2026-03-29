import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🏆 SportsHub</h3>
            <p className="text-gray-400">Your trusted source for sports predictions and analysis</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sports</h4>
            <ul className="space-y-2">
              <li><Link href="/cricket" className="text-gray-400 hover:text-white transition">Cricket</Link></li>
              <li><Link href="/football" className="text-gray-400 hover:text-white transition">Football</Link></li>
              <li><Link href="/basketball" className="text-gray-400 hover:text-white transition">Basketball</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">📘</a>
              <a href="#" className="text-gray-400 hover:text-white transition">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white transition">📷</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sports Prediction Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
