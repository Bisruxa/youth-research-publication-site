import Button from "../ui/button"

export default function FeaturedResearch() {
  return (
    <div className="max-w-7xl mx-auto mb-16 px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Research</h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Discover groundbreaking research from young African scholars making a global impact.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Artificial Intelligence
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Renewable Energy
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Environmental Science
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Medicine
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Engineering
          </button>
        </div>
      </div>

      {/* Research Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Machine Learning */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300">
          {/* Tags */}
          <div className="relative p-4">
            <div className="absolute top-4 left-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">Artificial Intelligence</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="px-4 pb-4">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 pb-4">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
              Machine Learning Applications in African Healthcare Systems
            </h3>
            <p className="text-white/70 text-sm mb-3">
              By Dr. Amara Okonkwo, Prof. Kwame Asante
            </p>
            <p className="text-white/60 text-sm mb-4 line-clamp-3">
              This comprehensive study explores the implementation of machine learning algorithms in healthcare systems across sub-Saharan Africa, focusing on diagnostic accuracy and resource optimization.
            </p>
            <p className="text-white/50 text-xs mb-4">
              University of Ghana • 2/15/2024
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-4 text-center">
              <div>
                <div className="text-white font-semibold text-sm">2,847</div>
                <div className="text-white/60 text-xs">Views</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">1,253</div>
                <div className="text-white/60 text-xs">Downloads</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">189</div>
                <div className="text-white/60 text-xs">Likes</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">34</div>
                <div className="text-white/60 text-xs">Comments</div>
              </div>
            </div>
            
            <Button text="Read More" variant="secondary" className="w-full" />
          </div>
        </div>

        {/* Card 2: Renewable Energy */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300">
          {/* Tags */}
          <div className="relative p-4">
            <div className="absolute top-4 left-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">Renewable Energy</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="px-4 pb-4">
            <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 pb-4">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
              Sustainable Energy Solutions for Rural African Communities
            </h3>
            <p className="text-white/70 text-sm mb-3">
              By Eng. Fatima Hassan, Dr. Joseph Mbeki
            </p>
            <p className="text-white/60 text-sm mb-4 line-clamp-3">
              An innovative approach to providing clean, sustainable energy to remote communities using locally sourced materials and renewable technology.
            </p>
            <p className="text-white/50 text-xs mb-4">
              Cairo University • 2/10/2024
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-4 text-center">
              <div>
                <div className="text-white font-semibold text-sm">1,924</div>
                <div className="text-white/60 text-xs">Views</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">876</div>
                <div className="text-white/60 text-xs">Downloads</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">145</div>
                <div className="text-white/60 text-xs">Likes</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">28</div>
                <div className="text-white/60 text-xs">Comments</div>
              </div>
            </div>
            
            <Button text="Read More" variant="secondary" className="w-full" />
          </div>
        </div>

        {/* Card 3: Environmental Science */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300">
          {/* Tags */}
          <div className="relative p-4">
            <div className="absolute top-4 left-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">Environmental Science</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="px-4 pb-4">
            <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 pb-4">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
              Climate Change Impact on West African Agriculture
            </h3>
            <p className="text-white/70 text-sm mb-3">
              By Dr. Adebayo Oluwaseun, Dr. Marie Diallo
            </p>
            <p className="text-white/60 text-sm mb-4 line-clamp-3">
              A comprehensive analysis of climate change effects on agricultural productivity in West Africa, with proposed adaptation strategies.
            </p>
            <p className="text-white/50 text-xs mb-4">
              University of Lagos • 2/5/2024
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-4 text-center">
              <div>
                <div className="text-white font-semibold text-sm">3,156</div>
                <div className="text-white/60 text-xs">Views</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">1,789</div>
                <div className="text-white/60 text-xs">Downloads</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">267</div>
                <div className="text-white/60 text-xs">Likes</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">52</div>
                <div className="text-white/60 text-xs">Comments</div>
              </div>
            </div>
            
            <Button text="Read More" variant="secondary" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
