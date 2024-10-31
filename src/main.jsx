import { createRoot } from 'react-dom/client';
import "./index.css";
import { ThemeProvider } from './Theme-conteh.jsx'; 
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
