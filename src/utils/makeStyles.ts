import { Theme } from './theme'
import { makeStyles as muiMakeStyles, Styles, WithStylesOptions } from '@mui/styles'

type MuiMakeStyles = typeof muiMakeStyles
type ThemeProps = typeof Theme

const defaultOptions: Omit<WithStylesOptions<ThemeProps>, 'withTheme'> = {
  defaultTheme: Theme
}

export const makeStyles = <
  Props extends object = {},
  ClassKey extends string = string
>(styles: Styles<ThemeProps, Props, ClassKey>, options: Omit<WithStylesOptions<ThemeProps>, 'withTheme'> = defaultOptions): ReturnType<MuiMakeStyles> => {
  return muiMakeStyles(styles, options)
}
