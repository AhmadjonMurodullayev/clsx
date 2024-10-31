// Input.js
import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../Theme-conteh';

const Input = ({ className, ...props }) => {
  const { isDark } = useTheme();

  return (
    <input
      className={clsx(
        'py-2 px-3 border rounded focus:outline-none',
        isDark ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-black border-gray-300',
        className
      )}
      {...props}
    />
  );
};

export default Input;
