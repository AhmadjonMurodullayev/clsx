// Button.js
import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../Theme-conteh';

const Button = ({ children, onClick, className, ...props }) => {
  const { isDark } = useTheme();

  return (
    <button
      onClick={onClick}
      className={clsx(
        'py-2 px-4 rounded focus:outline-none',
        isDark ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
