import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
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

  const borderColor = useMemo(() => {
    if (matchPercentage === 0) {
      return '#dedede'
    }
    if (matchPercentage <= 30) {
      return 'red'
    }
    if (matchPercentage > 30 && matchPercentage <= 55) {
      return 'orange'
    }
    if (matchPercentage > 55) {
      return 'green'
    }
  }, [matchPercentage])

  return (
    <Stack mt={5} width='90%'>

      {currentConversationId && conversations[0] && (
        <Stack gap={2} width='100%'>
          <Stack
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: 'primary.light',
              border: `2px solid #dedede`
            }}
          >
            <Typography>{currentConversationId && conversations[0][currentConversationPosition].local}</Typography>
          </Stack>
          <Stack
            sx={{
              p: 2,
              borderColor,
              width: 'auto',
              bgcolor: '#FFF',
              borderRadius: 2,
              textAlign: 'right',
              borderWidth: '3px',
              borderStyle: 'solid',
              color: 'primary.main',
              // boxShadow: `0px 0px 10px ${borderColor}`
            }}
          >
            <Typography>{currentConversationId && conversations[0][currentConversationPosition].user}</Typography>
          </Stack>
        </Stack>
      )}
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
