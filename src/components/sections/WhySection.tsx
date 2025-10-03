export default function WhySection() {
  return (
    <>
      {/* Why Choose Our Platform Section */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          We provide the tools, community, and support you need to make your research impact the world.
        </p>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Rigorous Peer Review */}
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:bg-blue-900/40 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rigorous Peer Review</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Every submission goes through our comprehensive peer review process by experienced academics and industry experts.
            </p>
          </div>

          {/* Global Reach */}
          <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:bg-green-900/40 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Connect with researchers worldwide and showcase your work to an international academic community.
            </p>
          </div>

          {/* Youth-Focused Community */}
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:bg-purple-900/40 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Youth-Focused Community</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A platform designed specifically for young researchers, fostering collaboration and mentorship.
            </p>
          </div>

          {/* Fast Publication */}
          <div className="bg-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 text-center hover:bg-orange-900/40 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Publication</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Streamlined submission and review process gets your research published faster than traditional journals.
            </p>
          </div>
        </div>
      </div>

      {/* Built for the Next Generation Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for the Next Generation</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Our platform combines traditional academic rigor with modern technology to create an environment where young researchers can thrive, collaborate, and make meaningful contributions to their fields.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4">
              <li className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-lg">AI-powered research matching</span>
              </li>
              <li className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-lg">Interactive collaboration tools</span>
              </li>
              <li className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-lg">Comprehensive analytics dashboard</span>
              </li>
              <li className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-lg">Mobile-first design</span>
              </li>
            </ul>
          </div>

          {/* Right Content - Statistics Card */}
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-8">
              {/* 24/7 Support */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support</div>
              </div>

              {/* 98% Satisfaction */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
