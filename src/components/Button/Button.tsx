import React from 'react'
import { ButtonContent } from './components'
import { alpha, darken } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase'

export interface ButtonProps extends ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'large'
  loading?: boolean
  endIcon?: JSX.Element
  startIcon?: JSX.Element
  fullWidth?: boolean
  icon?: JSX.Element,
  href?: string,
}

/**
 * @param {icon} icon - An icon component. It disables
 * the following props:
 *  @param {'small' | 'large'} size
 *  @param {JSX.Element} endIcon
 *  @param {JSX.Element} startIcon
 * 
 * If you want a retangular IconButton, just pass your Icon as a child component and it will
 * maintain the default paddings.
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'small',
    children,
    startIcon,
    endIcon,
    fullWidth,
    loading,
    icon,
    sx,
    ...rest
  } = props

  const spinner = (
    <CircularProgress
      size={22}
      sx={[
        variant === 'primary' && {
          color: 'common.white'
        },
        variant === 'secondary' && {
          color: 'secondary.main'
        },
      ]}
    />
  )

  return (
    <ButtonBase
      sx={[
        (theme) => ({
          paddingLeft: 3,
          borderRadius: 2,
          paddingRight: 3,
          typography: 'button',
          width: props.fullWidth ? '100%' : undefined,
          transition: theme.transitions.create([
            'background-color',
            'box-shadow'
          ]),
          alignItems: 'center',
        }),
        (theme) => variant === 'primary' && ({
          backgroundColor: 'secondary.main',
          color: 'common.white',
          '&:focus': {
            boxShadow: `${alpha(theme.palette.secondary.main, 0.15)} 0 0 0 0.2rem`
          },
          '&:hover': {
            boxShadow: `${alpha(theme.palette.secondary.main, 0.15)} 0 0 0 0.2rem`,
          },
          '&:active': {
            backgroundColor: darken(theme.palette.secondary.main, 0.20)
          }
        }),
        (theme) => variant === 'secondary' && ({
          backgroundColor: 'common.white',
          color: 'secondary.main',
          '&:focus': {
            boxShadow: `${alpha(theme.palette.grey[700], 0.10)} 0 0 0 0.2rem`
          },
          '&:disabled': {
            border: `1px solid ${theme.palette.grey[200]}`,
          }
        }),
        (theme) => variant === 'tertiary' && ({
          backgroundColor: 'primary.light',
          color: 'primary.main',
          '&:focus': {
            boxShadow: `${alpha(theme.palette.grey[700], 0.10)} 0 0 0 0.2rem`
          }
        }),
        (theme) => (props.disabled || props.loading) && ({
          pointerEvents: 'none',
          backgroundColor: props.variant === 'primary' ? 'grey.200' : 'common.white',
          color: props.variant === 'primary' ? alpha(theme.palette.common.white, 0.8) : 'grey.200'
        }),
        icon && {
          padding: 1
        },
        size === 'small' && !icon && {
          paddingTop: 1.5,
          paddingBottom: 1
        },
        size === 'large' && !icon && {
          paddingTop: 2.5,
          paddingBottom: 2
        },
        ...Array.isArray(sx) ? sx : [sx]
      ]}
      {...rest}
    >
      <ButtonContent
        endIcon={loading ? undefined : endIcon}
        startIcon={loading ? spinner : startIcon}
        icon={icon}
      >
        {children}
      </ButtonContent>
    </ButtonBase>
  )
}
