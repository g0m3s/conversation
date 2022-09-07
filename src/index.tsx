import './index.css'
import App from './App'
import React from 'react'
import './assets/TTCommons/FontFace.css'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material'
import { Theme } from './utils/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const firebaseConfig = {
  apiKey: 'AIzaSyAxCi9qXzLB6xy8v8V1xzxGIyKWYcZgqEE',
  authDomain: 'conversation-190e6.firebaseapp.com',
  projectId: 'conversation-190e6',
  storageBucket: 'conversation-190e6.appspot.com',
  messagingSenderId: '97203473203',
  appId: '1:97203473203:web:8b9fbeaa2c23be748a8c46'
}

initializeApp(firebaseConfig)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
