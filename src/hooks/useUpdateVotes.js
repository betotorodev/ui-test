import { useContext } from 'react'
import { Context } from '../context/VotesContext'

export const useUpdateVotes = () => {
  const { data, updateData } = useContext(Context)
  const updateVotes = (id, votes) => {
    const newData = data?.data?.map((character) => {
      if (character.id === id) {
        return {
          ...character,
          votes: {
            positive: votes.positive,
            negative: votes.negative
          }
        }
      }
      return character
    })
    updateData(newData)
    // setData(newData)
  }
  return { updateVotes }
}
