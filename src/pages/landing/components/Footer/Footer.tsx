import { Box, Stack, Typography } from '@mui/material'
import waveImage from '../../../../assets/images/wave2.svg'

export const Footer: React.FC = () => {
  return (
    <Stack
      width='100vw'
      minHeight='15vh'
      component='footer'
    >
      <Box
        component='img'
        src={waveImage}
        sx={{
          width: '100vw',
          objectFit: 'fill',
          filter: 'drop-shadow(0px -5px 3px rgba(0, 0, 0, .08))'
        }}
      />
      <Stack
        width='100vw'
        minHeight='15vh'
        bgcolor='#484cff'
        component='footer'
        alignItems='center'
        justifyContent='center'
      >
        <Typography color='#FFF'>©To Speak • todos os direitos reservados</Typography>
      </Stack>
    </Stack>
  )
}
