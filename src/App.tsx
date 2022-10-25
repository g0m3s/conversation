import { db } from '.'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Payment } from './pages/Payment'
import { App as AppPage } from './pages/app'
import { LandingPage } from './pages/landing'
import { doc, getDoc } from 'firebase/firestore'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ValidatePayment } from './pages/ValidatePayment'
import { Route, Routes, useNavigate } from 'react-router-dom'

export const App = () => {
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    hotjar.initialize(3193036, 6)
  }, [])

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userId = user.uid
      const docRef = doc(db, 'validate-payment', userId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        navigate('/app')
      } else {
        navigate('/payment')
      }
    } else {
      navigate('/login?fromLogin=true')
    }
  })

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
