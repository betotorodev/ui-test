import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import './styles.css'

export const ListOfCards = () => {
  const [listView, setListView] = useState('Grid')
  const [screenSize, setScreenSize] = useState(0)
  const isGrid = listView === 'Grid'
  const array = Array(6).fill('')

  useEffect(() => {
    let windowSize = window.screen.width
    setScreenSize(windowSize)
    const listener = window.addEventListener('resize', (e) => {
      windowSize = e.currentTarget.innerWidth
      setScreenSize(windowSize)
      if (windowSize <= 500) {
        setListView('Grid')
      }
      console.log(e.currentTarget.innerWidth)
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
        {array.map((item, index) => (
          <Card listView={listView} key={index} />
        ))}
      </section>
    </main>
  )
}
