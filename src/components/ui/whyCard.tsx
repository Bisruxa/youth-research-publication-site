interface CardProps {
    icon: React.ReactNode;
    number: string;
    label: string;
    className?: string;
  }
  
  export default function Card({ icon, number, label, className = '' }: CardProps) {
    return (
      <div className={`bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center hover:bg-blue-900/40 transition-all duration-300 ${className}`}>
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <div className="text-4xl font-bold text-white mb-2">{number}</div>
        <div className="text-white/80">{label}</div>
      </div>
    )
  }
  