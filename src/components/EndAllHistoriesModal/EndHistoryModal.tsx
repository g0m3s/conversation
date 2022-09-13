import React from 'react'
import { Button } from '..'
import Lottie from 'react-lottie'
import { Typography, Dialog, Stack } from '@mui/material'
import finishAnimation from '../../assets/finishAnimation2.json'

interface EndHistoryModalProps {
  isOpen: boolean
  onClose: () => void
}

export const EndAllHistoriesModal: React.FC<EndHistoryModalProps> = (props) => {
  const { isOpen, onClose } = props

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
            loop: false,
            autoplay: false,
            animationData: finishAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
        <Typography textAlign='center' mt={3} mb={2} variant='h4' sx={{ fontWeight: 'bold' }}>
          Impressionante!! 😮
        </Typography>
        <Typography textAlign='center' mt={3} mb={2} variant='h4' sx={{ fontWeight: 'bold' }}>
          Parabéns, você completou todos as nossas histórias. Você pode refazê-las para melhorar sua precisão e treinar ainda mais.
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
