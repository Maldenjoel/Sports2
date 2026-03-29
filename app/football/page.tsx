import Link from 'next/link'
import { getArticlesByCategory } from '../../lib/articles'

export default function FootballPage() {
  const premierLeagueArticles = getArticlesByCategory('football', 'premier-league')
  const championsLeagueArticles = getArticlesByCategory('football', 'champions-league')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">⚽ Football Predictions</h1>
      
      {/* Premier League Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Premier League</h2>
          <Link href="/football/premier-league" className="text-green-600 hover:underline">View All →</Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premierLeagueArticles.length > 0 ? (
            premierLeagueArticles.slice(0, 6).map((article) => (
              <Link 
                key={article.slug} 
                href={`/football/premier-league/${article.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-t-4 border-green-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-green-600">Premier League</span>
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
            ))
          ) : (
            <div className="col-span-3 bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">🚀 Premier League predictions coming soon!</p>
              <p className="text-gray-500 mt-2">Check back for detailed match analysis</p>
            </div>
          )}
        </div>
      </section>

      {/* Champions League Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">UEFA Champions League</h2>
          <Link href="/football/champions-league" className="text-blue-600 hover:underline">View All →</Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {championsLeagueArticles.length > 0 ? (
            championsLeagueArticles.slice(0, 6).map((article) => (
              <Link 
                key={article.slug} 
                href={`/football/champions-league/${article.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border-t-4 border-blue-600"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600">Champions League</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                {article.prediction && (
                  <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
                    <p className="text-sm font-semibold text-blue-800">Prediction: {article.prediction}</p>
                  </div>
                )}
                <span className="text-blue-600 font-semibold">Read Full Analysis →</span>
              </Link>
            ))
          ) : (
            <div className="col-span-3 bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">🏆 Champions League predictions coming soon!</p>
              <p className="text-gray-500 mt-2">Stay tuned for knockout stage analysis</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Box */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Football Predictions Coming Soon!</h3>
        <p className="text-gray-700 mb-4">
          We're working hard to bring you the best football match predictions, tactical analysis, 
          and betting tips for all major leagues and tournaments.
        </p>
        <p className="text-gray-600">
          Subscribe to get notified when we launch football predictions!
        </p>
      </section>
    </div>
  )
}
