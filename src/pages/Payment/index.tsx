import { Box } from '@mui/system'
import { Button } from '../../components'
import logo from '../../assets/images/logo.png'
import { Stack, Typography } from '@mui/material'
import waveImage from '../../assets/images/fullWave.svg'
import { useSearchParams } from 'react-router-dom'

export const Payment: React.FC = () => {
  const [searchParams] = useSearchParams()
  const fromLogin = searchParams.get('fromLogin')

  return (
    <Stack alignItems='center' width='100vw'>
      <Stack
        width='100%'
        bgcolor='#e8eaed'
        alignItems='center'
        pt={{ xs: 6, lg: 0 }}
        pb={10}
      >
        <Typography variant='h1'>Assinatura</Typography>
        <Typography width='80%' textAlign='center'>
          {fromLogin === 'true' && 'Realize o pagamento antes de acessar nossa plataforma'}
        </Typography>
        <Stack
          py={2}
          mt={10}
          gap={2}
          width='90%'
          height='100%'
          direction='row'
          borderRadius={4}
          alignItems='center'
          justifyContent='center'
          boxShadow='0px 0px 10px rgba(0, 0, 0, .08)'
        >
          <Box
            src={logo}
            component='img'
            sx={{
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              objectFit: 'fill',
              filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, .08))'
            }}
          />
          <Stack gap={2} height='100%' >
            <Typography><b>Assinatura (única) - To Speak</b></Typography>
            <Typography variant='body2'>Nossa plataforma possui um pequeno custo de adesão de apenas R$ 5,99 e que é pago uma única vez.</Typography>
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
          onClick={() => {
            window.open('https://mpago.la/2yPG1xy')
          }}
        >
          Realizar pagamento
        </Button>
      </Stack>
    </Stack>
  )
}
