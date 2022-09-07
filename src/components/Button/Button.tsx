import React, { useState } from 'react'
import clsx from 'clsx'
import Stack from '@mui/material/Stack'
import { ButtonContent } from './components'
import { makeStyles } from '../../utils/makeStyles'
import { alpha, darken } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase'
import { LinkBaseProps } from '@mui/material/Link'

export interface ButtonProps extends ButtonBaseProps {
  href?: string,
  loading?: boolean
  icon?: JSX.Element
  fullWidth?: boolean
  onClick?: () => void
  endIcon?: JSX.Element
  startIcon?: JSX.Element
  size?: 'small' | 'large'
  variant?: 'primary' | 'secondary'
  linkAttributes?: LinkBaseProps
}
const useStyles = makeStyles((theme) => ({
  baseStyle: {
    ...theme.typography.button,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    width: (props: ButtonProps) => props.fullWidth ? '100%' : undefined,
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create([
      'background-color',
      'box-shadow'
    ])
  },
  primaryStyle: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:focus': {
      boxShadow: `${alpha(theme.palette.secondary.main, 0.15)} 0 0 0 0.2rem`
    },
    '&:active': {
      backgroundColor: darken(theme.palette.secondary.main, 0.20)
    }
  },
  secondaryStyle: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
    border: '1px solid #0BB849',
    '&:focus': {
      boxShadow: `${alpha(theme.palette.grey[700], 0.10)} 0 0 0 0.2rem`
    },
    '&:active': {
      boxShadow: theme.shadows[1]
    }
  },
  disableStyle: {
    pointerEvents: 'none',
    backgroundColor: (props: ButtonProps) => props.variant === 'primary' ? theme.palette.grey[200] : theme.palette.common.white,
    color: (props: ButtonProps) => props.variant === 'primary' ? alpha(theme.palette.common.white, 0.8) : theme.palette.grey[200]
  },
  smallStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  largeStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: (props: ButtonProps) => props.startIcon ? theme.spacing(2) : undefined,
    marginRight: (props: ButtonProps) => props.endIcon ? theme.spacing(2) : undefined
  },
  primarySpinner: {
    color: theme.palette.common.white
  },
  secondarySpinner: {
    color: theme.palette.secondary.main
  },
  iconButtonStyle: {
  }
}))

/**
 * @param {IconName} icon - Transforms the button into a square Icon Button. It disables
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
    onClick,
    ...rest
  } = props
  const [canFunctionRun, setCanFunctionRun] = useState<boolean>(true)
  const classes = useStyles(props)

  const spinner = (
    <CircularProgress
      size={22}
      className={clsx({
        [classes.primarySpinner]: variant === 'primary',
        [classes.secondarySpinner]: variant === 'secondary',
      })}
    />
  )

  const runFunction = () => {
    onClick && onClick()
    setCanFunctionRun(false)
    setTimeout(() => {
      if (!(props.disabled || props.loading)) {
        setCanFunctionRun(true)
      }
    }, 1500)
  }

  const verifyFunction = () => {
    onClick && canFunctionRun && runFunction()
  }

  return (
    <ButtonBase
      {...rest}
      onClick={verifyFunction}
      className={clsx({
        [classes.iconButtonStyle]: Boolean(icon)
      }, classes.baseStyle, props.className, {
        [classes.primaryStyle]: variant === 'primary',
        [classes.secondaryStyle]: variant === 'secondary',
        [classes.disableStyle]: !canFunctionRun || props.disabled || props.loading
      })}
    >
      <Stack
        direction='row'
        alignItems='center'
        sx={{ height: { xs: '40px', lg: 'auto' } }}
        className={clsx({
          [classes.smallStyle]: size === 'small' && !icon,
          [classes.largeStyle]: size === 'large' && !icon
        })}
      >
        <ButtonContent
          endIcon={loading ? undefined : endIcon}
          startIcon={loading ? spinner : startIcon}
          icon={icon}
        >
          {children}
        </ButtonContent>
      </Stack>
    </ButtonBase>
  )
}
