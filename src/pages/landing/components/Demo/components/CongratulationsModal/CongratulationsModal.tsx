import React from 'react'
import Lottie from 'react-lottie'
import { Button } from '../../../../../../components'
import { Typography, Dialog, Stack } from '@mui/material'
import finishAnimation from '../../../../../../assets/finishAnimation2.json'

interface CongratulationsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CongratulationsModal: React.FC<CongratulationsModalProps> = (props) => {
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
            loop: true,
            autoplay: isOpen,
            animationData: finishAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
        <Typography textAlign='center' mt={3} mb={2} variant='h4' sx={{ fontWeight: 'bold' }}>
          Uau, você mandou bem demais e completou nossa demonstração!
        </Typography>

        <Button
          fullWidth
          onClick={onClose}
          sx={{
            mt: 2,
            bgcolor: '#484cff'
          }}
        >
          Continuar
        </Button>
      </Stack>
    </Dialog>
  )
}
