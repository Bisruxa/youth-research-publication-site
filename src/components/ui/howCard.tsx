interface HowCardProps {
  stepNumber: number;
  emoji: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
  className?: string;
}

export default function HowCard({ 
  stepNumber, 
  emoji, 
  icon, 
  title, 
  description, 
  color,
  className = '' 
}: HowCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500'
  };

  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 ${className}`}>
      {/* Step number and emoji */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 ${colorClasses[color]} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
          {stepNumber}
        </div>
        <span className="text-2xl">{emoji}</span>
      </div>
      
      {/* Main icon */}
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      
      {/* Title and description */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
