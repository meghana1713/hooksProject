import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import { ThemeContextProvider } from './context/ThemeContextProvider.jsx'
import { AppContextProvider } from './context/AppContextProvider.jsx'

createRoot(document.getElementById('root')).render(<ThemeContextProvider>
    <AppContextProvider>
        <App/>
    </AppContextProvider>
</ThemeContextProvider>)
