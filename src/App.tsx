import { conversations } from './utils/talks'
import { Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { stringCompare } from './utils/stringCompare'
import { Container, EndHistoryModal, SpeechButton, WelcomeModal } from './components'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [averageMatch, setAverageMatch] = useState<number[]>([0])
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true)
  const [showEndHistoryModal, setShowEndHistoryModal] = useState<boolean>(false)
  const [currentConversationId, setCurrentConversationId] = useState<number>(0)
  const [currentConversationPosition, setCurrentConversationPosition] = useState<number>(0)

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    const result = Math.floor(Math.random() * (max - min) + min)

    if (result !== currentConversationId) {
      return result
    }
    return getRandomInt(min, max)
  }

  const matchPercentage = useMemo(() => {
    return stringCompare(conversations[currentConversationId][currentConversationPosition].user, transcript)
  }, [currentConversationId, currentConversationPosition, transcript])

  const startRecorder = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
  }

  const stopRecorder = () => {
    setIsLoading(true)
    setTimeout(() => {
      SpeechRecognition.stopListening()
      if (matchPercentage >= 60) {
        if (currentConversationPosition === (conversations[currentConversationId].length - 1)) {
          setIsLoading(false)
          setShowEndHistoryModal(true)
          return
        }
        setCurrentConversationPosition(prev => prev += 1)
        setAverageMatch(prev => [...prev, matchPercentage])
        resetTranscript()
        setIsLoading(false)
      }
      setIsLoading(false)
      resetTranscript()
    }, 1500)
  }

  const generateAverageMatch = () => {
    const averageMatchLength = averageMatch.length
    const matchSum = averageMatch.reduce((prev, current) => prev += current)
    return (matchSum / averageMatchLength).toFixed(2)
  }

  useEffect(() => {
    if (currentConversationId !== 0) {
      if (matchPercentage > 80) {
        setAverageMatch(prev => [...prev, matchPercentage])
        resetTranscript()
        if (currentConversationPosition === (conversations[currentConversationId].length - 1)) {
          SpeechRecognition.stopListening()
          setShowEndHistoryModal(true)
          return
        }
        setCurrentConversationPosition(prev => prev += 1)
        return
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchPercentage])

  useEffect(() => {
    const randomId = getRandomInt(1, 3)
    setCurrentConversationId(randomId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <Typography variant='h2'>História n° {currentConversationId}</Typography>
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
          isLoading={isLoading}
          listening={listening}
          statRecorder={startRecorder}
          stopRecorder={stopRecorder}
        />
      </Stack>

      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
      />

      <EndHistoryModal
        isOpen={showEndHistoryModal}
        historyID={currentConversationId}
        averageMatch={generateAverageMatch()}
        onClose={() => setShowEndHistoryModal(false)}
      />
    </Stack>
  )
}

export default App
