import './index.css'
import App from './App'
import { StrictMode } from 'react'
import { Theme } from './utils/theme'
import ReactDOM from 'react-dom/client'
import './assets/TTCommons/FontFace.css'
import { initializeApp } from 'firebase/app'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material'
import { getAnalytics } from 'firebase/analytics'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const firebaseConfig = {
  apiKey: "AIzaSyAxCi9qXzLB6xy8v8V1xzxGIyKWYcZgqEE",
  authDomain: "conversation-190e6.firebaseapp.com",
  projectId: "conversation-190e6",
  storageBucket: "conversation-190e6.appspot.com",
  messagingSenderId: "97203473203",
  appId: "1:97203473203:web:8b9fbeaa2c23be748a8c46",
  measurementId: "G-W7MFDKHTPX"
}

const app = initializeApp(firebaseConfig)

getAnalytics(app)

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)

reportWebVitals();
