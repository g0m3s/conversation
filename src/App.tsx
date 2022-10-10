import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import { LandingPage } from './pages/landing'
import { Route, Routes } from 'react-router-dom'
import { App as AppPage } from './pages/lsdkjaghdhsafdaskd523561243sadsad'

export const App = () => {

  useEffect(() => {
    hotjar.initialize(3193036, 6)
  }, [])

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/lsdkjaghdhsafdaskd523561243sadsad' element={<AppPage />} />
    </Routes>

  )
}

export default App
