import React, { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { ButtonProps } from '../../Button'
import { Stack, Typography } from '@mui/material'

export type ButtonContentProps = Pick<ButtonProps, 'startIcon' | 'endIcon' | 'icon'>

export const ButtonContent: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, icon, endIcon, startIcon } = props

  if (icon) {
    return icon
  }

  return (
    <>
      <Stack
        alignItems= 'center'
        justifyContent= 'center'
      >
        {startIcon}
      </Stack>
      <Box
        sx={{
          display: 'flex',
          marginTop: '1px',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: props.startIcon ? 2 : undefined,
          marginRight: props.endIcon ? 2 : undefined
        }}
      >
        <Typography variant='button'>{children}</Typography>
      </Box>
      <Stack
        alignItems= 'center'
        justifyContent= 'center'
      >
        {endIcon}
      </Stack>
    </>
  )
}
