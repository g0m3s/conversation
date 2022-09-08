import { useMemo } from 'react'
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
    if (matchPercentage > 30 && matchPercentage <= 55) {
      return '255, 165, 0'
    }
    if (matchPercentage > 55) {
      return '0,128,0'
    }
  }, [matchPercentage])

  return (
    <Stack mt={5} width='90%'>
      {currentConversationId !== 0 ? conversations[currentConversationId] && (
        <Stack gap={2} width='100%'>
          <Stack
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: 'primary.light',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, .1)'
            }}
          >
            <Typography color='#FFF'>
              {currentConversationId && conversations[currentConversationId][currentConversationPosition].local}
            </Typography>
          </Stack>
          <Stack
            sx={{
              p: 2,
              width: 'auto',
              borderRadius: 2,
              textAlign: 'right',
              bgcolor: `rgb(${RGBBorderColor})`,
              color: matchPercentage === 0 ? 'primary.main' : '#FFF',
            }}
          >
            <Typography>{currentConversationId && conversations[currentConversationId][currentConversationPosition].user}</Typography>
          </Stack>
        </Stack>
      ) : undefined}
      <Stack>
        <Typography
          mt={2}
          textAlign='right'
        >
          Precisão: {matchPercentage.toFixed(2)}%
        </Typography>
      </Stack>
    </Stack>
  )
}
