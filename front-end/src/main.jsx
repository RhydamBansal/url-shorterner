import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Theme} from '@radix-ui/themes';
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Theme>
      <App />
    </Theme>
    </BrowserRouter>
  </StrictMode>
);
