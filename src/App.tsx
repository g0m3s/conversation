import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Payment } from './pages/Payment'
import { App as AppPage } from './pages/app'
import { LandingPage } from './pages/landing'
import { Route, Routes } from 'react-router-dom'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { ValidatePayment } from './pages/ValidatePayment'

export const App = () => {
  useEffect(() => {
    hotjar.initialize(3193036, 6)
  }, [])

  return (
    <Routes>
      <Route path='/app' element={<AppPage />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/validate-payment' element={<ValidatePayment />} />
    </Routes>
  )
}

export default App
