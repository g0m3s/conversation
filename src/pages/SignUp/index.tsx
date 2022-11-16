import { db } from '../..'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { Stack, Typography, Box } from '@mui/material'
import waveImage from '../../assets/images/fullWave.svg'
import { Button, Input, Header } from '../../components'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

type SignUpForm = {
  email: string
  password: string
}

export const SignUp: React.FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<SignUpForm>()
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

  const onSubmit = async (data: SignUpForm) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // navigate('/payment')
        navigate('/app')
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
        <Typography variant='h1'>Criar conta</Typography>
        <Stack
          mt={10}
          gap={4}
          width='100%'
          height='100%'
          id='signUpForm'
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
            <Typography textAlign='right' variant='body2'>Já tem uma conta?
              <a href='/login' style={{ color: 'rgb(0,128,0)', textDecoration: 'underline', marginLeft: 2 }}>
                <b>
                  Faça login
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
          form='signUpForm'
          loading={isLoading}
        >
          Criar conta
        </Button>
      </Stack>
    </Stack>
  )
}
