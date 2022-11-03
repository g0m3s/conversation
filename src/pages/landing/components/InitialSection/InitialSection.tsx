import { Header } from '../../../../components/Header'
import { keyframes } from '@emotion/react'
import waveImage from '../../../../assets/images/fullWave.svg'
import { Box, Skeleton, Stack, SxProps, Typography } from '@mui/material'

export const InitialSection: React.FC = () => {

  const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-6px);} 
   60% {transform: translateY(-8px);} 
  `
  const bounceAnimation2 = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(6px);} 
   60% {transform: translateY(8px);} 
  `

  const leftBubbleStyle: SxProps = {
    px: 2,
    mr: 4,
    width: '80%',
    color: 'white',
    borderRadius: 2,
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    py: { xs: 1.5, lg: 2 },
    bgcolor: 'primary.light',
    animation: `${bounceAnimation} 4s linear infinite`,
    boxShadow: '5px 3px 10px rgba(0, 0, 0, .2)',
    '&:hover': {
      boxShadow: '5px 3px 15px rgba(0, 0, 0, .4)',
      // transform: 'translate3d(0px, 0px, 10px)'
    },
    '&:before': {
      width: '0px',
      left: '-16px',
      content: '""',
      height: '0px',
      right: '-16px',
      position: 'absolute',
      borderLeft: '15px solid transparent',
      borderRight: '15px solid #444c56',
      borderTop: '15px solid #444c56',
      borderBottom: '15px solid transparent',
    }
  }
  const rightBubbleStyle: SxProps = {
    px: 2,
    ml: 15,
    borderRadius: 2,
    bgcolor: '#FFF',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    color: 'primary.main',
    py: { xs: 1.5, lg: 2 },
    alignItems: 'flex-end',
    width: { xs: '85%', lg: '55%' },
    boxShadow: '-5px 3px 10px rgba(0, 0, 0, .15)',
    animation: `${bounceAnimation2} 4s linear infinite`,
    '&:hover': {
      boxShadow: '-5px 3px 15px rgba(0, 0, 0, .1)',
    },
    '&:before': {
      top: '0px',
      width: '0px',
      content: '""',
      height: '0px',
      right: '-16px',
      position: 'absolute',
      borderRight: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: `15px solid rgb(255, 255, 255)`,
      borderTop: `15px solid rgb(255, 255, 255)`,
    }
  }

  return (
    <Stack width='100vw' >
      <Header />
      <Stack
        width='100%'
        bgcolor='#e8eaed'
        component='section'
        alignItems='center'
        pt={{ xs: 6, lg: 0 }}
        minHeight={{ xs: '65vh', lg: '70vh' }}
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
            lineHeight={{ xs: '45px', lg: '62px' }}
            textAlign={{ xs: 'center', lg: 'left' }}
          >
            Melhore sua conversação de forma simples e objetiva
          </Typography>
          <Typography
            mt={3}
            px={{ xs: 2, lg: 0 }}
            textAlign={{ xs: 'justify', lg: 'left' }}
          >
            Uma ferramenta prática para te levar a dominar o inglês. Você aprende com histórias divertidas e situações que podem acontecer no dia a dia de um novo país.
          </Typography>
        </Stack>
        <Stack
          mt={4}
          gap={4}
          height='100%'
          alignItems='center'
          position='relative'
          width={{ xs: '100%', lg: '45%' }}
          sx={{
            transition: 'all 300ms ease-out',
          }}
        >
          <Stack
            p={2}
            gap={4}
            width='75%'
            borderRadius={4}
            position='relative'
          >
            <Stack
              position='absolute'
              sx={leftBubbleStyle}
              left={{ xs: -25, lg: -40 }}
            >
              <Skeleton variant='text' width={'80%'} />
              <Skeleton variant='text' width={'70%'} />
            </Stack>
            <Stack
              position='absolute'
              sx={rightBubbleStyle}
              right={{ xs: 80, lg: -100 }}
            >
              <Skeleton variant='text' width={'80%'} />
              <Skeleton variant='text' width={'70%'} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box
        component='img'
        sx={{
          width: '100vw',
          objectFit: 'fill',
          // filter: 'drop-shadow(0px 7px 5px rgba(0, 0, 0, .05))'
        }}
        src={waveImage}
      />
    </Stack>
  )
}
