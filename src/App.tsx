import { conversations } from './utils/talks'
import { Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useIsDarkMode } from './utils/useIsDarkMode'
import { stringCompare } from './utils/stringCompare'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Container, EndAllHistoriesModal, EndHistoryModal, SpeechButton, WelcomeModal } from './components'

export const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  const isDarkMode = useIsDarkMode()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [averageMatch, setAverageMatch] = useState<number[]>([0])
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true)
  const [currentConversationId, setCurrentConversationId] = useState<number>(0)
  const [showEndHistoryModal, setShowEndHistoryModal] = useState<boolean>(false)
  const [currentConversationPosition, setCurrentConversationPosition] = useState<number>(0)
  const [showLastAvailableHistoryModal, setShowLastAvailableHistoryModal] = useState<boolean>(false)
  const isEndConversationPosition = currentConversationPosition === (conversations[currentConversationId].length - 1)
  const [finishedHistoriesIds, setFinishedHistoriesIds] = useState<string[]>((localStorage.getItem('finishedHistoriesIds') !== null) ? [...JSON.parse(localStorage.getItem('finishedHistoriesIds')!) as string[]] : [])

  const matchPercentage = useMemo(() => {
    return stringCompare(conversations[currentConversationId][currentConversationPosition].user, transcript)
  }, [currentConversationId, currentConversationPosition, transcript])

  const startRecorder = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
  }

  const generateHistoryId = (): any => {
    const min = 1
    const max = conversations.length
    const result = Math.floor(Math.random() * (max - min) + min)

    const haveError = (finishedHistoriesIds.length > 0 && !!finishedHistoriesIds.find(item => item === String(result))) || result === currentConversationId

    const isLastAvailableHistory = finishedHistoriesIds.length === (conversations.length - 1)

    if (isLastAvailableHistory) {
      setShowLastAvailableHistoryModal(true)
      clearLocalStorage()
      return
    }
    if (haveError) {
      return generateHistoryId()
    }
    return setCurrentConversationId(result)
  }

  const clearLocalStorage = () => {
    localStorage.setItem('finishedHistoriesIds', JSON.stringify([String(currentConversationId)]))
    setFinishedHistoriesIds([String(currentConversationId)])
    generateHistoryId()
  }

  const saveIdOnLocalStorage = () => {
    const hasConflict = finishedHistoriesIds.length > 0 && !!(finishedHistoriesIds.find(item => item === String(currentConversationId)))

    if (!hasConflict) {
      if (finishedHistoriesIds.length > 0) {
        const newFinishedHistoriesIds = [...finishedHistoriesIds, String(currentConversationId)]
        localStorage.setItem('finishedHistoriesIds', JSON.stringify(newFinishedHistoriesIds))
        return
      }
      const newFinishedHistoriesIds = [String(currentConversationId)]
      localStorage.setItem('finishedHistoriesIds', JSON.stringify(newFinishedHistoriesIds))
      return
    }
    return
  }

  const callNextHistory = () => {
    SpeechRecognition.stopListening()
    saveIdOnLocalStorage()
    setIsLoading(false)
    setShowEndHistoryModal(true)
  }

  const stopRecorder = () => {
    setIsLoading(true)
    setTimeout(() => {
      SpeechRecognition.stopListening()
      if (matchPercentage >= 60) {
        if (isEndConversationPosition) {
          callNextHistory()
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

  const onCloseEndHistoryModal = () => {
    SpeechRecognition.stopListening()
    setShowEndHistoryModal(false)
    return generateHistoryId()
  }

  useEffect(() => {
    if (currentConversationId !== 0) {
      if (matchPercentage > 85) {
        stopRecorder()
        return
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchPercentage])

  useEffect(() => {
    generateHistoryId()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: isDarkMode ? 'white' : 'primary.main',
        backgroundColor: isDarkMode ? 'primary.main' : '#FFF',
      }}
    >
      <Stack
        pb={5}
        bgcolor='rgba(0,0,0,.1)'
        width={{ xs: '100%', lg: '75%' }}
        sx={{
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          boxShadow: '0px 0px 5px rgba(0,0,0,.1)',
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
        </Stack>
      </Stack>

      <SpeechButton
        isLoading={isLoading}
        listening={listening}
        statRecorder={startRecorder}
        stopRecorder={stopRecorder}
      />

      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
      />

      <EndHistoryModal
        isOpen={showEndHistoryModal}
        historyID={currentConversationId}
        averageMatch={generateAverageMatch()}
        onClose={() => onCloseEndHistoryModal()}
      />

      <EndAllHistoriesModal
        isOpen={showLastAvailableHistoryModal}
        onClose={() => setShowLastAvailableHistoryModal(false)}
      />
    </Stack>
  )
}

export default App
