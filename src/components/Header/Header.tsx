import { Button } from '..'
import { Stack } from '@mui/system'
import { AppBar, Box } from '@mui/material'
import logo from '../../assets/images/logo4.png'
import { useNavigate } from 'react-router-dom'

export const Header: React.FC<{ hideButton?: boolean }> = ({ hideButton = false }) => {
  const navigate = useNavigate()

  return (
    <Box
      height='10vh'
      alignItems='center'
      justifyContent='center'
    >
      <AppBar position='fixed' sx={{
        height: '10vh',
        bgcolor: '#e8eaed',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 5px 10px rgba(0,0,0,.015)',
      }}
      >
        <Stack height='100%' width='90%' alignItems='center' justifyContent='space-between' direction='row'>
          <Box
            src={logo}
            component='img'
            onClick={() => navigate('/')}
            sx={{
              height: '100%',
              cursor: 'pointer',
              ObjectFit: 'fill',
              borderRadius: '50%',
            }}
          />
          {!hideButton && (
            <Button sx={{
              bgcolor: '#484cff',
              height: { xs: '45px', lg: '68%' },
              boxShadow: '0px 0px 10px rgba(72, 76, 255, .5)'
            }}
              onClick={() => navigate('/signUp')}
            >
              Acessar agora
            </Button>
          )}
        </Stack>
      </AppBar>
    </Box>
  )
}
