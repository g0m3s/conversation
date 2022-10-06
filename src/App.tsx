import waveImage from './assets/wave.svg'
import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useIsDarkMode } from './utils/useIsDarkMode'
import { stringCompare } from './utils/stringCompare'
import { conversations, historyTitles } from './utils/talks'
import { generateHistoryId, saveIdOnLocalStorage } from './utils/functions'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Container, EndAllHistoriesModal, EndHistoryModal, SpeechButton, TipsSection, WelcomeModal } from './components'

export const App = () => {
  const {
    transcript,
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
  const finishedHistoriesIds = (localStorage.getItem('finishedHistoriesIds') !== null)
    ? [...JSON.parse(localStorage.getItem('finishedHistoriesIds')!) as string[]]
    : []

  const matchPercentage = useMemo(() => {
    const isAvailable = !!conversations[currentConversationId][currentConversationPosition].user && !!conversations[currentConversationId][currentConversationPosition].local
    return isAvailable ? stringCompare(conversations[currentConversationId][currentConversationPosition].user, transcript) : 0
  }, [currentConversationId, currentConversationPosition, transcript])

  const clearLocalStorage = () => {
    localStorage.setItem('finishedHistoriesIds', JSON.stringify(["0", String(currentConversationId)]))
    generateHistoryId(currentConversationId, setCurrentConversationId)
  }

  const lastAvailableHistory = () => {
    setCurrentConversationId(1)
    setCurrentConversationPosition(0)
    setShowLastAvailableHistoryModal(true)
    clearLocalStorage()
  }

  const callNextHistory = () => {
    const isLastAvailableHistory = finishedHistoriesIds.length === (conversations.length - 1)

    SpeechRecognition.stopListening()
    setIsLoading(false)
    if (isLastAvailableHistory) {
      lastAvailableHistory()
      return
    }
    saveIdOnLocalStorage(currentConversationId)
    setCurrentConversationPosition(0)
    setShowEndHistoryModal(true)
  }

  const stopRecorder = () => {
    setIsLoading(true)
    setTimeout(() => {
      SpeechRecognition.stopListening()
      if (matchPercentage >= 60) {
        const isEndConversationPosition = currentConversationPosition === (conversations[currentConversationId].length - 1)
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
    return generateHistoryId(currentConversationId, setCurrentConversationId)
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
    generateHistoryId(currentConversationId, setCurrentConversationId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  console.log(transcript)


  return (
    <Stack
      sx={{
        width: '100vw',
        overflowX: 'hidden',
        alignItems: 'center',
        color: isDarkMode ? 'white' : 'primary.main',
        backgroundColor: isDarkMode ? 'primary.main' : '#FFF',
      }}
    >
      <Stack
        sx={{
          width: '100%',
          minHeight: '94vh',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}
      >
        <Stack
          pb={5}
          bgcolor='#e8eaed'
          width={{ xs: '100%', lg: '75%' }}
          sx={{
            // borderBottomLeftRadius: '30px',
            // borderBottomRightRadius: '30px',
            boxShadow: '0px 0px 5px rgba(0,0,0,.1)',
          }}
        >
          <Stack mt={3} textAlign='center'>
            <Typography variant='h2' color='primary.main'>
              "{historyTitles[currentConversationId]}"
            </Typography>
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
        <Stack alignItems='center' width='100%'>
          <Box
            component='img'
            sx={{
              objectFit: 'fill',
              transform: 'rotate(-180deg)',
              width: { xs: '100vw', lg: '75vw' },
              filter: 'drop-shadow(0px -5px 3px rgba(0, 0, 0, .02))'
            }}
            src={waveImage}
          />
        </Stack>
        <SpeechButton isLoading={isLoading} stopRecorder={stopRecorder} />
      </Stack>

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

      <TipsSection />
    </Stack>
  )
}

export default App
