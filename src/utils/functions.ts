import { Dispatch, SetStateAction } from "react"
import { conversations } from "./talks"

export const saveIdOnLocalStorage = (currentConversationId: number) => {
  const finishedHistoriesIds = (localStorage.getItem('finishedHistoriesIds') !== null)
    ? [...JSON.parse(localStorage.getItem('finishedHistoriesIds')!) as string[]]
    : []

  const isValidLength = finishedHistoriesIds.length > 0
  const hasConflict = isValidLength && !!(finishedHistoriesIds.find(item => item === String(currentConversationId)))

  if (!hasConflict) {
    if (isValidLength) {
      const newFinishedHistoriesIds = [...finishedHistoriesIds, String(currentConversationId)]
      localStorage.setItem('finishedHistoriesIds', JSON.stringify(newFinishedHistoriesIds))
      return
    }
    const newFinishedHistoriesIds = [String(currentConversationId)]
    localStorage.setItem('finishedHistoriesIds', JSON.stringify(newFinishedHistoriesIds))
    return
  }
  return
}

export const generateHistoryId = (currentConversationId: number, setCurrentConversationId: Dispatch<SetStateAction<number>>): any => {
  const min = 1
  const max = conversations.length
  const result = Math.floor(Math.random() * (max - min) + min)

  const finishedHistoriesIds = (localStorage.getItem('finishedHistoriesIds') !== null)
    ? [...JSON.parse(localStorage.getItem('finishedHistoriesIds')!) as string[]]
    : []

  const haveError = (finishedHistoriesIds.length > 0 && !!finishedHistoriesIds.find(item => item === String(result))) || result === currentConversationId

  if (haveError) {
    return generateHistoryId(currentConversationId, setCurrentConversationId)
  }
  return setCurrentConversationId(result)
}
