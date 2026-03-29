import Link from 'next/link'
import { getArticlesByCategory } from '../../lib/articles'

export default function CricketPage() {
  const iplArticles = getArticlesByCategory('cricket', 'ipl2026')
  const internationalArticles = getArticlesByCategory('cricket', 'international')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">🏏 Cricket Predictions</h1>
      
      {/* IPL 2026 Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">IPL 2026</h2>
          <Link href="/cricket/ipl2026" className="text-blue-600 hover:underline">View All →</Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iplArticles.slice(0, 6).map((article) => (
            <Link 
              key={article.slug} 
              href={`/cricket/ipl2026/${article.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-t-4 border-blue-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-blue-600">IPL 2026</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
              {article.prediction && (
                <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                  <p className="text-sm font-semibold text-green-800">Prediction: {article.prediction}</p>
                </div>
              )}
              <span className="text-blue-600 font-semibold">Read Full Analysis →</span>
            </Link>
          ))}
        </div>
        
        {iplArticles.length === 0 && (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600">No IPL 2026 predictions yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* International Cricket Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">International Cricket</h2>
          <Link href="/cricket/international" className="text-blue-600 hover:underline">View All →</Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalArticles.slice(0, 6).map((article) => (
            <Link 
              key={article.slug} 
              href={`/cricket/international/${article.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-t-4 border-green-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-green-600">International</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
              {article.prediction && (
                <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                  <p className="text-sm font-semibold text-green-800">Prediction: {article.prediction}</p>
                </div>
              )}
              <span className="text-green-600 font-semibold">Read Full Analysis →</span>
            </Link>
          ))}
        </div>
        
        {internationalArticles.length === 0 && (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600">No international cricket predictions yet. Check back soon!</p>
          </div>
        )}
      </section>
    </div>
  )
}
