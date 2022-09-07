import Lottie from 'react-lottie'
import { Button } from '../Button'
import { Stack } from '@mui/material'
import recordingAnimation from '../../assets/recording.json'

interface SpeechButtonProps {
  listening: boolean
  statRecorder: () => void
  stopRecorder: () => void
}

export const SpeechButton: React.FC<SpeechButtonProps> = (props) => {
  const {
    listening,
    statRecorder,
    stopRecorder,
  } = props

  return (
    <Stack width='90%' mb={12}>
      <Button
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
        onClick={listening ? stopRecorder : statRecorder}
        sx={{
          borderRadius: 2,
          bgcolor: '#dedede',
          color: 'primary.main',
        }}
      >
        {listening ? 'Encerrar' : 'Falar'}
      </Button>
    </Stack>
  )
}
