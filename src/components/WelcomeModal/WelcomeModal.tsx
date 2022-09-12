import React from 'react'
import { Button } from '../'
import Lottie from 'react-lottie'
import welcomeAnimation from '../../assets/welcome.json'
import { Typography, Dialog, Stack } from '@mui/material'

interface WelcomeModalProps {
  isOpen: boolean,
  onClose: () => void
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {

  const Tip: React.FC<{ title: string, desc: string }> = (props) => {
    return (
      <Typography mt={1} justifyContent='center' fontWeight='bold' variant='body2'>
        {props.title}
        <Typography
          variant='body2'
          sx={{ textIndent: '1.5em', textAlign: 'justify' }}
        >
          {props.desc}
        </Typography>
      </Typography>
    )
  }

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
        <Typography textAlign='center' mt={3} mb={2} variant='h2' sx={{ fontWeight: 'bold' }}>
          Seja bem vindo(a)
        </Typography>
        <Typography mb={2} variant='body1' textAlign='center'>
          Este site tem como objetivo te ajudar a melhorar sua conversação em inglês.
        </Typography>
        <Stack>
          <Tip
            title='Como usar:'
            desc='No topo da página há dois balões de conversa. Você deve falar o conteúdo do balão branco. Aperte o botão "Falar" e dê a autorização necessária. Após terminar de falar, aperte novamente no botão.'
          />
          <Tip
            title='Dica:'
            desc={`Fale de devagar. Desta forma você consegue articular melhor as palavras e sua precisão será maior.\n\n
            Há várias histórias. Após terminar uma, você poderá fazer outra.
            `}
          />
        </Stack>

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
