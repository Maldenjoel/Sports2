export default function BasketballPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">🏀 Basketball Predictions</h1>
      
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-12 text-center">
        <div className="text-8xl mb-6">🚀</div>
        <h2 className="text-3xl font-bold mb-4">Coming Soon!</h2>
        <p className="text-xl text-gray-700 mb-6">
          Basketball predictions and analysis are on the way. We'll be covering:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">🏆 NBA</h3>
            <p className="text-gray-600">Regular season, playoffs, and finals predictions</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">🌍 EuroLeague</h3>
            <p className="text-gray-600">European basketball championship analysis</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">🎯 College Basketball</h3>
            <p className="text-gray-600">March Madness and NCAA predictions</p>
          </div>
        </div>
        
        <div className="mt-8">
          <a href="/" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition inline-block">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
