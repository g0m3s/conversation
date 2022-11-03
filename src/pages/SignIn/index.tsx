import { db } from '../..'
import { useState } from 'react'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { Stack, Typography } from '@mui/material'
import { Button, Input, Header } from '../../components'
import waveImage from '../../assets/images/fullWave.svg'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

type SignInForm = {
  name: string
  email: string
  password: string
}

export const SignIn: React.FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<SignInForm>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userId = user.uid
      const docRef = doc(db, 'validate-payment', userId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        navigate('/app')
      }
    }
  })

  const onSubmit = (data: SignInForm) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {

        const userId = userCredential.user.uid
        const docRef = doc(db, 'validate-payment', userId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          navigate('/app')
        } else {
          navigate('/payment?fromLogin=true')
        }
      })
      .catch((error) => {
        setIsLoading(false)
        const errorMessage = error.message
        alert(errorMessage)
      })
  }

  return (
    <Stack alignItems='center' width='100vw'>
      <Header hideButton={true} />
      <Stack
        pt={6}
        width='100%'
        bgcolor='#e8eaed'
        alignItems='center'
        pb={{ xs: 10, lg: 2 }}
      >
        <Typography variant='h1'>Login</Typography>
        <Stack
          mt={10}
          gap={4}
          width='100%'
          height='100%'
          id='signInForm'
          component='form'
          alignItems='center'
          justifyContent='center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label='E-mail'
            inputProps={{ ...register('email') }}
          />
          <Input
            label='Senha'
            type='password'
            placeholder='********'
            inputProps={{ ...register('password') }}
          />
          <Stack width='80%'>
            <Typography textAlign='right' variant='body2'>Não tem conta?
              <a href='/signUp' style={{ color: 'rgb(0,128,0)', textDecoration: 'underline', marginLeft: 2 }}>
                <b>
                  Cadastre-se
                </b>
              </a>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box
        component='img'
        sx={{
          width: '100vw',
          objectFit: 'fill',
          filter: 'drop-shadow(0px 7px 5px rgba(0, 0, 0, .05))'
        }}
        src={waveImage}
      />
      <Stack alignItems='center' width='80%'>
        <Button
          fullWidth
          type='submit'
          form='signInForm'
          loading={isLoading}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  )
}
