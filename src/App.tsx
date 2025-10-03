import Button from "./components/ui/button"
import Card from "./components/ui/whyCard"
import WhySection from "./components/sections/WhySection"
import FeaturedResearch from "./components/sections/FeaturedResearch"
import HowSection from "./components/sections/HowSection"
import AuthModal from "./components/sections/AuthModal"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <div className=" bg-black relative flex flex-col items-center gap-6 ">

      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"></div>

        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>


      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            Empowering Youth
          </h1>


          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>


          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            The premier platform for young African researchers to publish, peer-review, and showcase their groundbreaking work to the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Start Publishing"
              variant="primary"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            />
            <Button
              text="Explore Research"
              variant="secondary"
            />
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-20">
          <Card
            icon={
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            number="1,200+"
            label="Published Papers"
          />

          <Card
            icon={
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            number="5,000+"
            label="Active Researchers"
          />

          <Card
            icon={
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z" />
              </svg>
            }
            number="150+"
            label="Universities"
          />
        </div>





        <WhySection />



        <HowSection />
        <FeaturedResearch />
        <AuthModal />

      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
