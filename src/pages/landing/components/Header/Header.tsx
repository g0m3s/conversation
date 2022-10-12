import { Stack } from '@mui/system'
import { AppBar, Box } from '@mui/material'
import { Button } from '../../../../components'
import logo from '../../../../assets/images/logo4.png'

export const Header: React.FC = () => {
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
      }}
      >
        <Stack height='100%' width='90%' alignItems='center' justifyContent='space-between' direction='row'>
          <Box
            component='img'
            src={logo}
            sx={{
              height: '100%',
              cursor: 'pointer',
              ObjectFit: 'fill',
              borderRadius: '50%',
            }}
          />
          <Button sx={{
            bgcolor: '#484cff',
            boxShadow: '0px 0px 10px #484cff',
            height: { xs: '45px', lg: '68%' }
          }}
          >
            Baixar agora
          </Button>
        </Stack>
      </AppBar>
    </Box>
  )
}
