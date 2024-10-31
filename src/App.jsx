// App.js
import React, { useState } from 'react';
import { useTheme } from './Theme-conteh';
import Button from './components/button';
import Input from './components/input';
import Modal from './components/modal';

const App = () => {
  const { toggleTheme } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3">
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Input placeholder="Type something..." />
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-bold">Modal Title</h2>
        <p>Some modal content goes here.</p>
        <Button onClick={() => setModalOpen(false)}>Close Modal</Button>
      </Modal>
    </div>
  );
};



export default App;
