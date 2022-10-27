import Lottie from 'react-lottie'
import { Stack } from '@mui/material'
import { Button } from './../../../../../../components/Button'
import recordingAnimation from '../../../../../../assets/recording.json'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

interface DemoSpeechButtonProps {
  isLoading: boolean
  stopRecorder: () => void
}

export const DemoSpeechButton: React.FC<DemoSpeechButtonProps> = (props) => {
  const { isLoading, stopRecorder } = props
  const { resetTranscript, listening } = useSpeechRecognition()

  const startRecorder = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
  }

  return (
    <Stack mt={2} width={{ xs: '90%', lg: '75%' }} mb={12}>
      <Button
        loading={isLoading}
        variant={'primary'}
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
                filter: 'invert(100%)'
              }}
            />
          ) : undefined}
      >
        {isLoading ? 'Conferindo' : listening ? 'Encerrar' : 'Falar'}
      </Button>
    </Stack>
  )
}
