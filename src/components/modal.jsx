// Modal.js
import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../Theme-conteh';

const Modal = ({ isOpen, onClose, children }) => {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className={clsx('bg-white rounded-lg p-6 z-10', isDark && 'bg-gray-800 text-white')}>
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
