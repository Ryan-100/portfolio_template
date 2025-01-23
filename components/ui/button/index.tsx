import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // Accept any content to render inside the button
  onClick?: () => void; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="w-fit h-fit rounded-lg overflow-hidden">
      <div className="gradient-border-wrapper">
        <button
          onClick={onClick}
          className="gradient-border"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
