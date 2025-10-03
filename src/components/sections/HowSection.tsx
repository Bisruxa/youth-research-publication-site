import HowCard from "../ui/howCard";
import Button from "../ui/button";

export default function HowSection() {
  const steps = [
    {
      stepNumber: 1,
      emoji: "👨‍💻",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Submit Your Research",
      description: "Upload your manuscript, data, and supporting materials through our intuitive submission portal.",
      color: "blue" as const
    },
    {
      stepNumber: 2,
      emoji: "👨‍🔬",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Peer Review Process",
      description: "Our network of expert reviewers evaluates your work for quality, originality, and impact.",
      color: "purple" as const
    },
    {
      stepNumber: 3,
      emoji: "👨‍🎓",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Publication & Recognition",
      description: "Once approved, your research is published with full attribution and academic recognition.",
      color: "green" as const
    },
    {
      stepNumber: 4,
      emoji: "👩‍💼",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Impact",
      description: "Your work reaches researchers worldwide, contributing to the global body of knowledge.",
      color: "orange" as const
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-xl text-white/80 mb-8">
          From submission to global recognition - your research journey made simple.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((step, index) => (
          <div key={step.stepNumber} className="relative">
            <HowCard
              stepNumber={step.stepNumber}
              emoji={step.emoji}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
            />
            
            {/* Connection line to next step */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-600"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-white text-lg mb-6">
          Ready to start your research journey?
        </p>
        <Button 
          text="Get Started Today" 
          variant="primary"
          className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
        />
      </div>
    </section>
  );
}
