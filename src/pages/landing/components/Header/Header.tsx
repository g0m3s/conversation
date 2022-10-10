import Lottie from 'react-lottie'
import { Stack } from '@mui/system'
import { AppBar, Box } from '@mui/material'
import { Button } from '../../../../components'
import speechBubble from '../../../../assets/animations/speechBubble.json'

export const Header: React.FC = () => {
  return (
    <Box
      height='10vh'
      alignItems='center'
      justifyContent='center'
      sx={{
        // opacity: .8
      }}
    >
      <AppBar position="fixed" sx={{
        height: '10vh',
        bgcolor: '#e8eaed',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Stack width='90%' justifyContent='space-between' direction='row'>
          <Stack>
            <Lottie
              width={50}
              height={50}
              options={{
                loop: false,
                autoplay: true,
                animationData: speechBubble,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                }
              }}
            />
          </Stack>
          <Button sx={{
            bgcolor: '#484cff',
            boxShadow: '0px 0px 10px #484cff',
            height: { xs: '40px', lg: 'auto' }
          }}
          >
            Baixar agora
          </Button>
        </Stack>
      </AppBar>
    </Box>
  )
}
