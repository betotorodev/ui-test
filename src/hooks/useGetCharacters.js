import { useEffect, useContext } from 'react'
import { getCharacters } from '../services/getCharacters'
import { Context } from '../context/VotesContext'

export const useGetCharacters = () => {
  const { data, setData } = useContext(Context)

  useEffect(() => {
    try {
      getCharacters().then((res) => {
        setData(res)
      })
    } catch (error) {
      console.log(error)
    }
  }, [data])

  return { data }
}
