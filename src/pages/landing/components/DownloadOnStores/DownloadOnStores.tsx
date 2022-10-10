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
    <Stack
      py={2}
      color='#FFF'
      minHeight='10vh'
      bgcolor='#484cff'
      component='section'
      alignItems='center'
      justifyContent='center'
      direction={{ xs: 'column', lg: 'row' }}
      sx={{ boxShadow: '0px 0px 10px #484cff' }}
    >
      <Typography
        variant='h3'
        textAlign='center'
        mr={{ xs: 0, lg: 10 }}
        fontSize={{ xs: '25px', lg: '54px' }}
      >
        Confira nas principais lojas de aplicativos
      </Typography>
      <Stack alignItems='center' direction='row'>
        <Box
          mr={4}
          component='img'
          src={googlePlayLogo}
          sx={{
            width: '150px',
            height: '60px',
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
    </Stack>
  )
}
