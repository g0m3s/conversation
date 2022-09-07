import React from 'react'
import { Button } from '..'
import Lottie from 'react-lottie'
import welcomeAnimation from '../../assets/welcome.json'
import { Typography, Dialog, Stack } from '@mui/material'

interface EndHistoryModalProps {
  isOpen: boolean
  historyID: number
  onClose: () => void
  averageMatch: string
}

export const EndHistoryModal: React.FC<EndHistoryModalProps> = (props) => {
  const { isOpen, averageMatch, historyID, onClose } = props

  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        sx: {
          marginY: 'auto',
          marginX: 'auto',
          borderRadius: 2,
          paddingY: { xs: 2, lg: 5 },
          paddingX: { xs: 2, lg: 4 },
          maxWidth: { xs: '90vw', lg: '50vw' },
          minWidth: { xs: '90vw', lg: '50vw' },
        }
      }}
    >
      <Stack alignItems='center' justifyContent={{ xs: 'space-between', lg: 'center' }}>
        <Lottie
          height={150}
          width={150}
          options={{
            loop: true,
            autoplay: true,
            animationData: welcomeAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
        <Typography textAlign='center' mt={3} mb={2} variant='h4' sx={{ fontWeight: 'bold' }}>
          Parabéns! você completou a história número {historyID} com uma média de precisão de {averageMatch}%
        </Typography>

        <Button
          fullWidth
          sx={{ mt: 2 }}
          variant='primary'
          onClick={onClose}
        >
          Continuar
        </Button>
      </Stack>
    </Dialog>
  )
}
