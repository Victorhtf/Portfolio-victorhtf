import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { LanguageProvider } from './contexts/LanguageContext.jsx'
import { ThemeContext, ThemeProvider } from './contexts/ColorModeContext.jsx'

import "./styles/settings/dark-mode/main.sass"
import "./styles/settings/light-mode/main.sass"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App/>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
)

