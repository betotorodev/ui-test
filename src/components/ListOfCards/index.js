import { useEffect, useState } from 'react'
import { Card } from './components/Card'
// import { Context } from '../../context/VotesContext'
import { useGetCharacters } from '../../hooks/useGetCharacters'
import './styles.css'

export const ListOfCards = () => {
  const { data } = useGetCharacters()
  // const { data } = useContext(Context)
  const [listView, setListView] = useState('Grid')
  const [screenSize, setScreenSize] = useState(0)
  const isGrid = listView === 'Grid'

  useEffect(() => {
    let windowSize = window.screen.width
    setScreenSize(windowSize)
    const listener = window.addEventListener('resize', (e) => {
      windowSize = e.currentTarget.innerWidth
      setScreenSize(windowSize)
      if (windowSize <= 500) {
        setListView('Grid')
      }
    })

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setListView(value)
  }

  return (
    <main role='main'>
      <section className='poll__title'>
        <h1>Previus Rulings</h1>
        {screenSize > 500 && (
          <select value={listView} onChange={handleChange} name='Type of view'>
            <option value='List'>List</option>
            <option value='Grid'>Grid</option>
          </select>
        )}
      </section>
      <section className={`${isGrid ? 'grid__layout' : 'list__layout'}`}>
        {data?.data?.map((item) => (
          <Card {...item} listView={listView} key={item.id} />
        ))}
      </section>
    </main>
  )
}
