import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="font-body flex min-h-screen flex-col bg-background px-40 py-8 antialiased">
      <App />
    </div>
  </React.StrictMode>,
)
