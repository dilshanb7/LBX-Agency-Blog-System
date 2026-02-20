import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'pill' | 'gradient';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-white hover:text-brand-pink uppercase text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl font-bold",
    secondary: "bg-white text-black hover:bg-gray-100 text-sm px-6 py-3 rounded-full font-bold",
    // Fixed width 239.315px -> approx 239.3px on SM screens and up.
    // On mobile (default), use w-full for better touch targets and layout.
    // Height 51px.
    // Font: 15px, 600 weight, 0.75px spacing, uppercase.
    pill: "bg-[#FE4EF4] text-white hover:bg-white hover:text-[#FE4EF4] rounded-[35px] w-full sm:w-[239.3px] h-[51px] text-[15px] font-semibold tracking-[0.75px] leading-[130%] uppercase",
    // Gradient variant with gradient border on hover
    gradient: "text-white uppercase text-sm px-6 py-3 rounded-full font-bold shadow-lg bg-gradient-to-r from-[#FF0071] to-[#FF55FF] border-2 border-transparent bg-origin-border hover:text-[#FF0071] hover:bg-[linear-gradient(#fff,#fff),linear-gradient(90deg,#FF0071_0%,#FF55FF_100%)] hover:[background-clip:padding-box,border-box] hover:shadow-xl",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};