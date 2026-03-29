import Link from 'next/link'
import { getRecentArticles } from '../lib/articles'

export default function Home() {
  const recentArticles = getRecentArticles(6)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports Prediction Hub</h1>
        <p className="text-xl mb-6">Get expert match predictions, detailed pitch reports, and winning strategies</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/cricket" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Cricket Predictions
          </Link>
          <Link href="/football" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Football Predictions
          </Link>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore by Sport</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cricket */}
          <Link href="/cricket" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-2 border-transparent hover:border-blue-500">
            <div className="text-4xl mb-4">🏏</div>
            <h3 className="text-2xl font-bold mb-3">Cricket</h3>
            <p className="text-gray-600 mb-4">IPL 2026, International Matches, T20 Leagues</p>
            <span className="text-blue-600 font-semibold">View Predictions →</span>
          </Link>

          {/* Football */}
          <Link href="/football" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-2 border-transparent hover:border-green-500">
            <div className="text-4xl mb-4">⚽</div>
            <h3 className="text-2xl font-bold mb-3">Football</h3>
            <p className="text-gray-600 mb-4">Premier League, Champions League, World Cup</p>
            <span className="text-green-600 font-semibold">View Predictions →</span>
          </Link>

          {/* Basketball */}
          <Link href="/basketball" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-2 border-transparent hover:border-orange-500">
            <div className="text-4xl mb-4">🏀</div>
            <h3 className="text-2xl font-bold mb-3">Basketball</h3>
            <p className="text-gray-600 mb-4">NBA, EuroLeague (Coming Soon)</p>
            <span className="text-orange-600 font-semibold">Coming Soon →</span>
          </Link>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Recent Predictions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/${article.category}/${article.subcategory}/${article.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-blue-600 uppercase">{article.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{article.subcategory}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="text-blue-600 font-semibold">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Data-Driven Analysis</h3>
            <p className="text-gray-600">Expert predictions backed by statistics and historical data</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Accurate Forecasts</h3>
            <p className="text-gray-600">High accuracy rate with detailed match breakdowns</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold mb-3">Daily Updates</h3>
            <p className="text-gray-600">Fresh predictions and reports added every day</p>
          </div>
        </div>
      </section>
    </div>
  )
}
