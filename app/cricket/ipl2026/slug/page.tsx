import { getArticleBySlug, getAllSlugs } from '../../../../lib/articles'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllSlugs('cricket', 'ipl2026')
  return slugs.map((slug) => ({ slug }))
}

export default function IPLArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug('cricket', 'ipl2026', params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/cricket" className="hover:text-blue-600">Cricket</Link>
        <span className="mx-2">›</span>
        <Link href="/cricket/ipl2026" className="hover:text-blue-600">IPL 2026</Link>
        <span className="mx-2">›</span>
        <span>{article.title}</span>
      </nav>

      {/* Article Header */}
      <article className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            IPL 2026
          </span>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>📅 {article.date}</span>
            <span>•</span>
            <span>🏏 Cricket</span>
          </div>
        </div>

        {/* Prediction Box */}
        {article.prediction && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-green-800">🎯 Match Prediction</h2>
            <p className="text-xl font-semibold text-green-900">{article.prediction}</p>
            {article.team1 && article.team2 && (
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-lg font-bold">{article.team1}</span>
                <span className="text-2xl">vs</span>
                <span className="text-lg font-bold">{article.team2}</span>
              </div>
            )}
          </div>
        )}

        {/* Article Content */}
        <div 
          className="article-content prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Share this prediction:</h3>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Share on Facebook
            </button>
            <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600">
              Share on Twitter
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Share on WhatsApp
            </button>
          </div>
        </div>
      </article>

      {/* Back to IPL */}
      <div className="mt-8">
        <Link href="/cricket/ipl2026" className="text-blue-600 hover:underline">
          ← Back to all IPL 2026 predictions
        </Link>
      </div>
    </div>
  )
}
