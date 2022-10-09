import { useState } from 'react'
import Lottie from 'react-lottie'
import { Button } from '../../../../components'
import { Box, Stack, Typography } from '@mui/material'
import graphicIcon from '../../../../assets/images/graphicIcon.png'
import insightIcon from '../../../../assets/images/insightIcon.png'
import progressBar from '../../../../assets/animations/progressBar.json'
import lookingAtPhone from '../../../../assets/images/lookingAtPhone.jpg'


export const TrackPrecision: React.FC = () => {

  const [animationDivHaveFocus, setAnimationDivHaveFocus] = useState<boolean>(false)

  return (
    <Stack
      py={2}
      mt={8}
      height='75vh'
      direction='row'
      component='section'
      alignItems='center'
      justifyContent='center'
      onFocus={() => console.log('opa')}
    >
      <Stack
        width='50%'
        height='100%'
        alignItems='center'
        position='relative'
        justifyContent='center'
      >
        <Box
          component='img'
          src={lookingAtPhone}
          sx={{
            height: '500px',
            objectFit: 'fill',
            borderRadius: '30px',
            filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, .5))'
          }}
        />
        <Stack
          top={80}
          left={450}
          width={200}
          height={200}
          bgcolor='#FFF'
          borderRadius='50%'
          position='absolute'
        >
          <Lottie
            speed={.25}
            width={200}
            height={200}
            options={{
              loop: false,
              autoplay: animationDivHaveFocus,
              animationData: progressBar,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
          />
        </Stack>
      </Stack>
      <Stack pr={8} width='50%'
        justifyContent='space-between'
      >
        <Typography fontSize='40px' variant='h1'>
          Acompanhe sua precisão em tempo real enquanto faz os exercícios
        </Typography>
        <Stack padding={0} mt={4} gap={3} component='ul'>
          <Stack gap={2} direction='row' component='li'>
            <Box style={{ height: '20px', width: '20px' }} component='img' src={insightIcon} />
            <Stack>
              <Typography sx={{ fontWeight: 'bold' }}>Histórias personalizadas</Typography>
              <Typography sx={{ opacity: .7 }}>Histórias criadas pensando em situações do seu dia a dia e que te ajudarão a lidar com várias situações durante uma viagem ou uma nova moradia em outro país</Typography>
            </Stack>
          </Stack>
          <Stack gap={2} direction='row' component='li'>
            <Box style={{ height: '20px', width: '20px' }} component='img' src={graphicIcon} />
            <Stack>
              <Typography sx={{ fontWeight: 'bold' }}>Acompanhe sua evolução</Typography>
              <Typography sx={{ opacity: .7 }}>Confira sua precisão em tempo real e aumente sua média de precisão ao final de cada história</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Button fullWidth sx={{
          mt: 8,
          bgcolor: '#484cff',
          boxShadow: '0px 0px 10px #484cff',
        }}
        >
          Baixar agora
        </Button>
      </Stack>
    </Stack>
  )
}
