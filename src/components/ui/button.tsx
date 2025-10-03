interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
    className?: string;
}

export default function Button({ text, variant = 'primary', icon, className = '' }: ButtonProps) {
    const baseClasses = "px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2";
    const variantClasses = variant === 'primary' 
        ? "bg-blue-600 hover:bg-blue-700 text-white" 
        : "bg-gray-700 hover:bg-gray-600 text-white";
    
    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`}>
            {text}
            {icon}
        </button>
    )
}