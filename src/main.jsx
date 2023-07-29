import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/UI/screens/home/Home'
import './assets/styles/global.css'
import Router from './components/Router'
import AuthProvider from './provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
        <Router />
    </AuthProvider>
  </React.StrictMode>,
)
