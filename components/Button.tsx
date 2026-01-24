import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'cta';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  size = 'md',
  className = '',
  ...props 
}) => {
  // Changed flex to inline-flex to allow text-center on parents to work for centering
  const baseStyles = "font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-md rounded-md inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-green-800",
    secondary: "bg-white text-brand-green border-2 border-brand-green hover:bg-gray-50",
    danger: "bg-brand-red text-white hover:bg-red-700",
    cta: "bg-brand-cta text-white hover:opacity-90 shadow-lg",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-4 px-10 text-lg md:text-xl",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};