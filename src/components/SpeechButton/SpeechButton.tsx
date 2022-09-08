import { Button } from '../'
import Lottie from 'react-lottie'
import { Stack } from '@mui/material'
import { useIsDarkMode } from '../../utils/useIsDarkMode'
import recordingAnimation from '../../assets/recording.json'

interface SpeechButtonProps {
  isLoading: boolean
  listening: boolean
  statRecorder: () => void
  stopRecorder: () => void
}

export const SpeechButton: React.FC<SpeechButtonProps> = (props) => {
  const {
    listening,
    isLoading,
    statRecorder,
    stopRecorder,
  } = props

  const isDarkMode = useIsDarkMode()

  return (
    <Stack width='90%' mb={12}>
      <Button
        loading={isLoading}
        variant={isDarkMode ? 'secondary' : 'primary'}
        onClick={listening ? stopRecorder : statRecorder}
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
            />
          ) : undefined}
      >
        {isLoading ? 'Conferindo' : listening ? 'Encerrar' : 'Falar'}
      </Button>
    </Stack>
  )
}
