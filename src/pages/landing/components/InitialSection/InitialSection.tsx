import { Header } from '../Header'
import { Box, Stack, Typography } from '@mui/material'
import phoneFrame from '../../../../assets/i14frame.png'
import waveImage from '../../../../assets/images/fullWave.svg'

export const InitialSection: React.FC = () => {

  return (
    <Stack minHeight='100vh'>
      <Header />
      <Stack direction='row'
        py={2}
        height='75vh'
        bgcolor='#e8eaed'
        component='section'
        alignItems='center'
        justifyContent='center'
      >
        <Stack pl={8} height='100%' bgcolor='transparent' justifyContent='center' alignItems='center' width='50%'>
          <Typography variant='h1'>
            Melhore sua conversação de forma simples e objetiva
          </Typography>
          <Typography mt={3} variant='body1'>
            Uma ferramente prática para te levar a domina o inglês. Você aprende com histórias divertidas e situações que podem acontecer no dia a dia de um novo país.
          </Typography>
        </Stack>
        <Stack height='100%' alignItems='center' width='50%'>
          <img
            alt='imagem de um telefone'
            src={phoneFrame}
            style={{
              // height: '550px',
              width: '500px'
            }}
          />
        </Stack>
      </Stack>
      <Box
        component='img'
        sx={{
          width: '100vw',
          objectFit: 'fill',
          filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, .08))'
        }}
        src={waveImage}
      />
    </Stack>
  )
}
