import { createContext, useState } from 'react'

export const Context = createContext([])

export default function VotesContextProvider({ children }) {
  const [data, setData] = useState([])
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  )
}
