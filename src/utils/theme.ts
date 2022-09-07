import { createTheme } from '@mui/material'

const customShadows = [
  'none',
  '0px 2px 5px rgba(0, 0, 0, 0.1)',
  '0px 2px 10px rgba(0, 0, 0, 0.1)',
  '0px 10px 35px rgba(0, 0, 0, 0.1)',
  ...Array(21).fill('none')
] as any

declare module '@mui/material/styles' {
  interface TypographyVariants {
    text1: React.CSSProperties
    text2: React.CSSProperties
    text3: React.CSSProperties
    text4: React.CSSProperties
    text5: React.CSSProperties
    text6: React.CSSProperties
    text7: React.CSSProperties
    text8: React.CSSProperties
    text9: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    text1?: React.CSSProperties
    text2?: React.CSSProperties
    text3?: React.CSSProperties
    text4?: React.CSSProperties
    text5?: React.CSSProperties
    text6?: React.CSSProperties
    text7?: React.CSSProperties
    text8?: React.CSSProperties
    text9?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    text1: true
    text2: true
    text3: true
    text4: true
    text5: true
    text6: true
    text7: true
    text8: true
    text9: true
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    sidebar: {
      minimizedWidthSmDown: number
      minimizedWidthSmUp: number
      expandedWidth: number
    },
    topbar: {
      height: number,
      backgroundColor: string
    }
  }
  interface ThemeOptions {
    sidebar?: {
      minimizedWidthSmDown?: number
      minimizedWidthSmUp?: number
      expandedWidth?: number
    },
    topbar?: {
      height?: number,
      backgroundColor?: string
    }
  }
}

export const Theme = createTheme({
  palette: {
    common: {
      black: '#181A1D',
      white: '#FFFFFF'
    },
    primary: {
      main: '#2d333b',
      light: '#444c56'
    },
    secondary: {
      main: '#333',
      light: 'rgba(14, 201, 81, 0.1)'
    },
    error: {
      main: '#EB4132',
      light: '#FDECEB'
    },
    success: {
      main: '#0EC951',
      light: '#E7FAEE'
    },
    warning: {
      main: '#F8742A',
      light: '#FFE0D0'
    },
    info: {
      main: '#9CADBF',
      light: '#DEE3EA'
    },
    grey: {
      50: '#ECECEC',
      100: '#EDEDFF',
      200: '#BBC8D7',
      300: '#9CADBF',
      400: '#728AA4',
      700: '#5D5F61',
      800: '#3C3C3C',
      900: '#333333'
    },
  },
  shadows: customShadows,
  typography: {
    // Default
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '150%'
    },
    h1: {
      fontFamily: 'TTCommons',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: '62px'
    },
    h2: {
      fontFamily: 'TTCommons',
      fontSize: '35px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    h3: {
      fontFamily: 'TTCommons',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    h4: {
      fontFamily: 'TTCommons',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '120%'
    },
    button: {
      fontFamily: 'TTCommons',
      fontSize: '16px',
      fontWeight: 600
    },
    text1: {
      fontFamily: 'TTCommons',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '150%'
    },
    text2: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '150%'
    },
    text3: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '150%'
    },
    text4: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '150%'
    },
    text5: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '150%'
    },
    text6: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '150%'
    },
    text7: {
      fontFamily: 'TTCommons',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '150%'
    },
    text8: {
      fontFamily: 'TTCommons',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '150%'
    },
    text9: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 400
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
})
