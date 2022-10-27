import { useMemo, useState } from 'react'
import { CongratulationsModal, DemoSpeechButton } from './components'
import { Stack, SxProps, Typography } from '@mui/material'
import { stringCompare } from '../../../../utils/stringCompare'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Button } from '../../../../components'
import { useNavigate } from 'react-router-dom'

const DEMO_TEXT = `Hello, welcome to our airline check-in. What's your flight?`
const USER_DEMO_TEXT = `Hi! my flight is to Brazil at nine o'clock`

export const Demo: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [isDemoCompleted, setIsDemoCompleted] = useState<boolean>(false)
  const {
    transcript,
    resetTranscript,
  } = useSpeechRecognition()

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
    boxShadow: '5px 3px 10px rgba(0, 0, 0, .2)',
    '&:hover': {
      boxShadow: '5px 3px 15px rgba(0, 0, 0, .4)',
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
    borderLeft: '.5px solid #e8eaed',
    borderBottom: '.5px solid #e8eaed',
    boxShadow: '12px 0px 12px rgba(0, 0, 0, .15)',
  }

  const matchPercentage = useMemo(() => {
    return stringCompare(USER_DEMO_TEXT, transcript)
  }, [transcript])

  const RGBBorderColor = useMemo(() => {
    if (matchPercentage === 0) {
      return '255, 255, 255'
    }
    if (matchPercentage <= 30) {
      return '255, 0, 0'
    }
    if (matchPercentage > 30 && matchPercentage <= 60) {
      return '255, 165, 0'
    }
    if (matchPercentage > 60) {
      return '0,128,0'
    }
  }, [matchPercentage])

  const stopRecorder = () => {
    setIsLoading(true)
    setTimeout(() => {
      SpeechRecognition.stopListening()
      resetTranscript()
      setIsLoading(false)
      if (matchPercentage > 60) {
        setModalIsOpen(true)
        setIsDemoCompleted(true)
      }
    }, 2000)
  }

  return (
    <Stack
      width='100vw'
      alignItems='center'

    >
      <Typography
        variant='h2'
        mb={{ xs: 2, lg: 4 }}
      >
        Faca um teste agora
      </Typography>
      <Stack
        height='100%'
        borderRadius={5}
        alignItems='center'
        width={{ xs: '95%', lg: '60%' }}
        bgcolor='rgba(232, 234, 237, .25)'
        boxShadow='0px 0px 10px rgba(0,0,0,.1)'
      >
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
              <Typography>{DEMO_TEXT}</Typography>
            </Stack>
            <Stack
              position='absolute'
              sx={{
                ...rightBubbleStyle,
                bgcolor: `rgb(${RGBBorderColor})`,
                '&:before': {
                  top: '0px',
                  width: '0px',
                  content: '""',
                  height: '0px',
                  right: '-16px',
                  position: 'absolute',
                  borderRight: '15px solid transparent',
                  borderBottom: '15px solid transparent',
                  borderLeft: `15px solid rgb(${RGBBorderColor})`,
                  borderTop: `15px solid rgb(${RGBBorderColor})`,
                },
                color: matchPercentage === 0 ? 'primary.main' : '#FFF',
              }}
              right={{ xs: 80, lg: -100 }}
            >
              <Typography>{USER_DEMO_TEXT}</Typography>
            </Stack>
            <Typography mt={4} textAlign='right'>Precisão: {matchPercentage.toFixed(2)}%</Typography>
          </Stack>
        </Stack>

        <Stack alignItems='center' width='100%'>
          {isDemoCompleted ?
            <Stack my={3} alignItems='center' width='100%'>
              <Button
                sx={{ width: '80%' }}
                onClick={() => navigate('/signUp')}
              >
                Acessar agora
              </Button>
            </Stack>
            :
            <DemoSpeechButton isLoading={isLoading} stopRecorder={stopRecorder} />
          }
        </Stack>
      </Stack>
      <CongratulationsModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </Stack>
  )
}
