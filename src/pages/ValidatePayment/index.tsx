import { db } from '../..'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CircularProgress, Stack, Typography } from '@mui/material'

export const ValidatePayment: React.FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userId = user.uid
      setDoc(doc(db, '/validate-payment', userId), {
        payment: true,
      }).then(() => navigate('/app'))
    } else {
      navigate('/payment?fromLogin=true')
    }
  })

  return (
    <Stack alignItems='center' justifyContent='center' height='100vh' width='100vw'>
      <Typography textAlign='center' variant='h3'>Aguarde, estamos validando seu pagamento</Typography>
      <CircularProgress
        size={60}
        sx={{
          mt: 5,
          color: '#484cff',
          bgcolor: 'transparent'
        }}
      />
    </Stack>
  )
}
