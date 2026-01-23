import React from 'react';
import { Star } from 'lucide-react';

// --- Buttons ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'glass' | 'black-fill' | 'glow';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  // Styles mapping
  const variants: Record<string, React.CSSProperties> = {
    primary: { '--hover-color': '#333', '--hover-text': '#fff' } as React.CSSProperties,
    white: { '--hover-color': '#000', '--hover-text': '#fff' } as React.CSSProperties,
    glass: { '--hover-color': '#fff', '--hover-text': '#000' } as React.CSSProperties,
    glow: { '--hover-color': '#6366f1', '--hover-text': '#fff' } as React.CSSProperties, // Brand color
  };

  const variantClasses = {
    primary: "bg-black text-white border border-black",
    white: "bg-white text-black border border-white",
    outline: "bg-transparent text-black border border-black hover:border-black",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white",
    glow: "bg-black text-white border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.3)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-5 text-base tracking-wide uppercase",
  };

  const customStyle = variants[variant] || { '--hover-color': '#000', '--hover-text': '#fff' };

  return (
    <button 
      className={`btn-magnet rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.primary} ${sizes[size]} ${className}`} 
      style={customStyle as React.CSSProperties}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

// --- Star Rating ---

export const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={size} 
          className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} 
        />
      ))}
    </div>
  );
};

// --- Section Wrapper ---

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ 
  children, 
  className = "",
  id
}) => {
  return (
    <section id={id} className={`w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 ${className}`}>
      {children}
    </section>
  );
};

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
    return (
        <div className={`max-w-[1440px] mx-auto px-6 md:px-12 ${className}`}>
            {children}
        </div>
    )
}

// --- Marquee ---
export const Marquee: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right'; className?: string }> = ({
  children,
  direction = 'left',
  className = ""
}) => {
  return (
    <div className={`flex overflow-hidden w-full ${className}`}>
      <div className={`flex flex-shrink-0 gap-6 py-4 ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
        {children}
      </div>
      <div className={`flex flex-shrink-0 gap-6 py-4 ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};
