import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { validateEnvironment } from '@/lib/utils/env';
import App from './App';
import './index.css';

// Validate environment variables before starting the app
validateEnvironment();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);