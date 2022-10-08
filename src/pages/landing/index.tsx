import { useState } from 'react'
import Lottie from 'react-lottie'
import { Header } from './components'
import { Button } from '../../components'
import { styled } from '@mui/material/styles'
import phoneFrame from '../../assets/i14frame.png'
import { Box, Stack, Typography } from '@mui/material'
import waveImage from '../../assets/images/fullWave.svg'
import graphicIcon from '../../assets/images/graphicIcon.png'
import insightIcon from '../../assets/images/insightIcon.png'
import appStoreLogo from '../../assets/images/appStoreLogo.png'
import lookingAtPhone from '../../assets/images/lookingAtPhone.jpg'
import progressBar from '../../assets/animations/progressBar.json'
import googlePlayLogo from '../../assets/images/googlePlayLogo.png'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

export const LandingPage: React.FC = () => {

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const [animationDivHaveFocus, setAnimationDivHaveFocus] = useState<boolean>(false)

  // useEffect(()=>{
  //   con
  // },[])

  return (
    <>
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
      <Stack direction='row'
        py={2}
        height='10vh'
        color='#FFF'
        bgcolor='#484cff'
        component='section'
        alignItems='center'
        justifyContent='center'
        sx={{ boxShadow: '0px 0px 10px #484cff' }}
      >
        <Typography variant='h2' mr={10}>Confira nas principais lojas de aplicativos</Typography>
        <Box
          mr={4}
          component='img'
          src={googlePlayLogo}
          sx={{
            width: '150px',
            cursor: 'pointer',
            objectFit: 'fill',
            filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, .08))'
          }}
        />
        <BootstrapTooltip placement='top' title='Ainda não disponível'>
          <Box
            component='img'
            src={appStoreLogo}
            sx={{
              opacity: .5,
              width: '150px',
              cursor: 'pointer',
              ObjectFit: 'fill',
              filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, .08))'
            }}
          />
        </BootstrapTooltip>

      </Stack>
      <Stack
        // on
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
    </>
  )
}
