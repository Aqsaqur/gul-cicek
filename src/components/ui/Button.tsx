import React from 'react';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-lg">
      {title}
    </button>
  );
};

export default Button;
