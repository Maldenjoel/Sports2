import Link from 'next/link'
import { getArticlesByCategory } from '../../../lib/articles'

export default function IPL2026Page() {
  const articles = getArticlesByCategory('cricket', 'ipl2026')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/cricket" className="hover:text-blue-600">Cricket</Link>
        <span className="mx-2">›</span>
        <span>IPL 2026</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">🏏 IPL 2026 Predictions</h1>
        <p className="text-xl">Expert match predictions, pitch reports, and winning strategies for every IPL 2026 match</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">{articles.length}</div>
          <div className="text-gray-600 mt-2">Match Predictions</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600">10</div>
          <div className="text-gray-600 mt-2">Teams</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">74</div>
          <div className="text-gray-600 mt-2">Total Matches</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-orange-600">2</div>
          <div className="text-gray-600 mt-2">Months</div>
        </div>
      </div>

      {/* All Predictions */}
      <section>
        <h2 className="text-3xl font-bold mb-8">All Match Predictions</h2>
        
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/cricket/ipl2026/${article.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-l-4 border-blue-500 hover:border-blue-700"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600">IPL 2026</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                
                {article.team1 && article.team2 && (
                  <div className="flex items-center justify-between mb-3 text-sm font-semibold text-gray-700">
                    <span>{article.team1}</span>
                    <span className="text-blue-600">vs</span>
                    <span>{article.team2}</span>
                  </div>
                )}
                
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                
                {article.prediction && (
                  <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                    <p className="text-sm font-semibold text-green-800">
                      🎯 {article.prediction}
                    </p>
                  </div>
                )}
                
                <span className="text-blue-600 font-semibold">Read Full Analysis →</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">🏏</div>
            <h3 className="text-2xl font-bold mb-3">No Predictions Yet</h3>
            <p className="text-gray-600 mb-6">
              IPL 2026 predictions will be added as matches are scheduled. Check back soon!
            </p>
            <Link href="/cricket" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Back to Cricket
            </Link>
          </div>
        )}
      </section>

      {/* Info Box */}
      <section className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4">📝 What You'll Find in Each Prediction:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold mb-1">Detailed Pitch Report</h4>
              <p className="text-sm text-gray-600">Complete analysis of playing conditions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold mb-1">Team Analysis</h4>
              <p className="text-sm text-gray-600">Strengths, weaknesses, and probable XI</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold mb-1">Key Player Battles</h4>
              <p className="text-sm text-gray-600">Individual matchups that decide the game</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold mb-1">Fantasy Tips</h4>
              <p className="text-sm text-gray-600">Dream11 captain and best picks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
