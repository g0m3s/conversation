import { Header } from '../Header'
import { keyframes } from '@emotion/react'
import { Box, Stack, Typography } from '@mui/material'
import { useIsMobile } from '../../../../hooks/useIsMobile'
import waveImage from '../../../../assets/images/fullWave.svg'
import phoneFrame from '../../../../assets/images/phoneFrame.png'

export const InitialSection: React.FC = () => {
  const isMobile = useIsMobile()

  const slideToLeftAnimation = keyframes`
  from {
    transform: translate(${isMobile ? '120px' : '220px'});
  }

  to {
    transform: translate(0px);
  }
  `

  return (
    <Stack width='100vw' minHeight='100vh'>
      <Header />
      <Stack
        py={2}
        width='100%'
        minHeight='75vh'
        bgcolor='#e8eaed'
        component='section'
        alignItems='center'
        justifyContent='center'
        direction={{ xs: 'column', lg: 'row' }}
      >
        <Stack
          height='100%'
          alignItems='center'
          pl={{ xs: 0, lg: 8 }}
          bgcolor='transparent'
          justifyContent='center'
          width={{ xs: '95%', lg: '50%' }}
        >
          <Typography
            variant='h1'
            fontSize={{ xs: '35px', lg: '54px' }}
            textAlign={{ xs: 'center', lg: 'left' }}
          >
            Melhore sua conversação de forma simples e objetiva
          </Typography>
          <Typography
            mt={3}
            px={{ xs: 2, lg: 0 }}
            textAlign={{ xs: 'justify', lg: 'left' }}
          >
            Uma ferramenta prática para te levar a domina o inglês. Você aprende com histórias divertidas e situações que podem acontecer no dia a dia de um novo país.
          </Typography>
        </Stack>
        <Stack
          width='50%'
          height='100%'
          alignItems='center'
          sx={{
            transition: 'all 300ms ease-out',
            animation: `${slideToLeftAnimation} .8s linear`,
          }}
        >
          <Box
            component='img'
            alt='imagem de um telefone'
            src={phoneFrame}
            sx={{
              width: { xs: '250px', lg: '55%' },
              filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, .08))'
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
