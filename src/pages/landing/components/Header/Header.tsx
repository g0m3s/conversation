import { Stack } from '@mui/system'
import { AppBar, Box } from '@mui/material'
import { Button } from '../../../../components'
import logo from '../../../../assets/images/logo3.png'

export const Header: React.FC = () => {
  return (
    <Box
      height='10vh'
      alignItems='center'
      justifyContent='center'
    >
      <AppBar position="fixed" sx={{
        height: '10vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'primary.main',
        boxShadow: '0px 3px 5px rgba(45, 51, 59, .5)'
      }}
      >
        <Stack height='100%' width='90%' alignItems='center' justifyContent='space-between' direction='row'>
          <Box
            component='img'
            src={logo}
            sx={{
              height: '80%',
              cursor: 'pointer',
              ObjectFit: 'fill',
              filter: 'drop-shadow(0px 0px 5px rgba(255, 255, 255, .08))'
            }}
          />
          <Button sx={{
            bgcolor: '#484cff',
            boxShadow: '0px 0px 10px #484cff',
            height: { xs: '40px', lg: '68%' }
          }}
          >
            Baixar agora
          </Button>
        </Stack>
      </AppBar>
    </Box>
  )
}
