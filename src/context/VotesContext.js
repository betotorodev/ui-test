import { createContext, useState } from 'react'
import json from '../assets/data.json'

export const Context = createContext([])

export default function VotesContextProvider({ children }) {
  const [data, setData] = useState(() => {
    return JSON.parse(window.localStorage.getItem('data')) || json
  })
  // const [data, setData] = useState(json)

  return (
    <Context.Provider
      value={{
        data,
        updateData: (newData) => {
          setData({ data: newData })
          window.localStorage.setItem('data', JSON.stringify({ data: newData }))
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}
