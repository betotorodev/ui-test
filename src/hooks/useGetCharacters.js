import { useContext } from 'react'
import { Context } from '../context/VotesContext'

export const useGetCharacters = () => {
  const { data } = useContext(Context)

  return { data }
}
