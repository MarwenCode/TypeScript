import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { CounterProvider } from './components/context/CounterContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
    <App />

    </CounterProvider>
   
  </React.StrictMode>,
)
