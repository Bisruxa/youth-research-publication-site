export default function Footer() {
  return (
    <footer className="bg-blue-900/20 backdrop-blur-sm border-t border-blue-500/20 relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Platform Branding */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-300">Youth</span>{" "}
              <span className="text-white">Research Platform</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering young African researchers to publish, collaborate, and make their mark on the global academic landscape.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-blue-600/30 hover:bg-blue-600/50 rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-blue-600/30 hover:bg-blue-600/50 rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-blue-600/30 hover:bg-blue-600/50 rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Platform */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">How It Works</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>

            {/* For Researchers */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">For Researchers</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Submit Paper</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Review Process</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Author Guidelines</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Peer Review</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Research Tools</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Templates</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">API Documentation</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Academic Ethics</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest research publications, platform updates, and academic opportunities delivered to your inbox.
          </p>
          
          {/* Newsletter Form */}
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            Made with ❤️ for young researchers worldwide
          </p>
          <p className="text-white/70 text-sm">
            © 2025 Youth Research Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
