import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-5 py-2 text-base',
  large: 'px-7 py-3 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 