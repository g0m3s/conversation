import { useMediaQuery, Breakpoint } from '@mui/material'

/**
 * This hook will return true if the device is mobile. This hook uses the
 * useMediaQuery hook using theme.down(breakpoint). breakpoint has a default
 * value of 'lg'
 * @param breakpoint 
 */

export const useIsMobile = (breakpoint: Breakpoint = 'xs') => {
  // Fix this string later
  return useMediaQuery('@media (max-width:1199.95px)')
}
