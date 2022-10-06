import { useMemo } from 'react'
import { keyframes } from '@emotion/react'
import { Stack, Typography } from '@mui/material'
import { conversations } from '../../utils/talks'

interface ContainerProps {
  matchPercentage: number
  currentConversationId: number
  currentConversationPosition: number
}

export const Container: React.FC<ContainerProps> = (props) => {
  const {
    matchPercentage,
    currentConversationId,
    currentConversationPosition,
  } = props

  const RGBBorderColor = useMemo(() => {
    if (matchPercentage === 0) {
      return '255, 255, 255'
    }
    if (matchPercentage <= 30) {
      return '255, 0, 0'
    }
    if (matchPercentage > 30 && matchPercentage <= 60) {
      return '255, 165, 0'
    }
    if (matchPercentage > 60) {
      return '0,128,0'
    }
  }, [matchPercentage])

  const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-6px);} 
   60% {transform: translateY(-8px);} 
  `

  const leftBubbleStyle = {
    p: 2,
    borderRadius: 2,
    position: 'relative',
    bgcolor: 'primary.light',
    boxShadow: '5px 3px 10px rgba(0, 0, 0, .3)',
    '&:before': {
      width: '0px',
      left: '-16px',
      content: '""',
      height: '0px',
      right: '-16px',
      position: 'absolute',
      borderLeft: '15px solid transparent',
      borderRight: '15px solid #444c56',
      borderTop: '15px solid #444c56',
      borderBottom: '15px solid transparent',
    }
  }
  const rightBubbleStyle = {
    p: 2,
    width: 'auto',
    borderRadius: 2,
    textAlign: 'right',
    position: 'relative',
    bgcolor: `rgb(${RGBBorderColor})`,
    boxShadow: '-5px 3px 10px rgba(0, 0, 0, .2)',
    color: matchPercentage === 0 ? 'primary.main' : '#FFF',
    animation: (matchPercentage === 0 && currentConversationPosition === 0) ? `${bounceAnimation} 4s linear infinite` : '',
    '&:before': {
      top: '0px',
      width: '0px',
      content: '""',
      height: '0px',
      right: '-16px',
      position: 'absolute',
      borderRight: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: `15px solid rgb(${RGBBorderColor})`,
      borderTop: `15px solid rgb(${RGBBorderColor})`,
    }
  }

  const isValid = currentConversationId !== 0 && !!conversations[currentConversationId][currentConversationPosition]

  return (
    <Stack mt={5} width='90%'>
      {isValid && (
        <Stack gap={2} width='100%'>
          <Stack sx={leftBubbleStyle}>
            <Typography color='#FFF'>
              {currentConversationId && conversations[currentConversationId][currentConversationPosition].local}
            </Typography>
          </Stack>
          <Stack sx={rightBubbleStyle}>
            <Typography>{currentConversationId && conversations[currentConversationId][currentConversationPosition].user}</Typography>
          </Stack>
        </Stack>
      )}
      <Stack>
        <Typography
          mt={2}
          textAlign='right'
          color='primary.main'
        >
          Precisão: {matchPercentage.toFixed(2)}%
        </Typography>
      </Stack>
    </Stack>
  )
}
