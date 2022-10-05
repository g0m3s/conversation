import { Button } from '../'
import Lottie from 'react-lottie'
import { Stack } from '@mui/material'
import { useIsDarkMode } from '../../utils/useIsDarkMode'
import recordingAnimation from '../../assets/recording.json'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

interface SpeechButtonProps {
  isLoading: boolean
  stopRecorder: () => void
}

export const SpeechButton: React.FC<SpeechButtonProps> = (props) => {
  const isDarkMode = useIsDarkMode()
  const { isLoading, stopRecorder } = props
  const { resetTranscript, listening } = useSpeechRecognition()

  const startRecorder = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
  }

  return (
    <Stack width={{ xs: '90%', lg: '75%' }} mb={12}>
      <Button
        loading={isLoading}
        variant={isDarkMode ? 'secondary' : 'primary'}
        onClick={listening ? stopRecorder : startRecorder}
        startIcon={
          listening ? (
            <Lottie
              height={30}
              width={30}
              options={{
                loop: true,
                autoplay: true,
                animationData: recordingAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              style={{
                filter: isDarkMode ? 'none' : 'invert(100%)'
              }}
            />
          ) : undefined}
      >
        {isLoading ? 'Conferindo' : listening ? 'Encerrar' : 'Falar'}
      </Button>
    </Stack>
  )
}
