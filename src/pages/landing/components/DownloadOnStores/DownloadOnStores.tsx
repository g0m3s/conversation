import { styled } from '@mui/material/styles'
import { Box, Stack, Typography } from '@mui/material'
import appStoreLogo from '../../../../assets/images/appStoreLogo.png'
import googlePlayLogo from '../../../../assets/images/googlePlayLogo.png'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

export const DownloadOnStores: React.FC = () => {

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <Stack direction='row'
      py={2}
      height='10vh'
      color='#FFF'
      bgcolor='#484cff'
      component='section'
      alignItems='center'
      justifyContent='center'
      sx={{ boxShadow: '0px 0px 10px #484cff' }}
    >
      <Typography variant='h2' mr={10}>Confira nas principais lojas de aplicativos</Typography>
      <Box
        mr={4}
        component='img'
        src={googlePlayLogo}
        sx={{
          width: '150px',
          cursor: 'pointer',
          objectFit: 'fill',
          filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, .08))'
        }}
      />
      <BootstrapTooltip placement='top' title='Ainda não disponível'>
        <Box
          component='img'
          src={appStoreLogo}
          sx={{
            opacity: .5,
            width: '150px',
            cursor: 'pointer',
            ObjectFit: 'fill',
            filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, .08))'
          }}
        />
      </BootstrapTooltip>

    </Stack>
  )
}
