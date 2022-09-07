import { Stack, Typography } from '@mui/material'
import { conversations } from './utils/talks'
import { useEffect, useMemo, useState } from 'react'
import { stringCompare } from './utils/stringCompare'
import { Container, SpeechButton } from './components'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  const [currentConversationId, setCurrentConversationId] = useState<number>(1)
  const [currentConversationPosition, setCurrentConversationPosition] = useState<number>(0)

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const statRecorder = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
  }

  const stopRecorder = () => {
    SpeechRecognition.stopListening()
    if (matchPercentage >= 60) {
      setCurrentConversationPosition(prev => prev += 1)
    }
    resetTranscript()
  }

  // useEffect(() => {
  //   setCurrentConversationId(getRandomInt(0, 2))
  // }, [])

  const matchPercentage = useMemo(() => {
    return stringCompare(conversations[0][currentConversationPosition].user, transcript)
  }, [currentConversationPosition, transcript])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <Stack
      sx={{
        width: '100vw',
        color: 'white',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'primary.main',
      }}
    >
      <Stack mt={3} textAlign='center'>
        <Typography variant='h2'>História n° 1</Typography>
      </Stack>
      <Stack
        width='100%'
        height='100%'
        alignItems='center'
        justifyContent='space-between'
      >
        <Container
          matchPercentage={matchPercentage}
          currentConversationId={currentConversationId}
          currentConversationPosition={currentConversationPosition}
        />

        <SpeechButton
          listening={listening}
          statRecorder={statRecorder}
          stopRecorder={stopRecorder}
        />
      </Stack>
    </Stack >
  )
}

export default App
