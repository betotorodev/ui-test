import { Card } from './components/Card'
import './styles.css'

export const ListOfCards = () => {
  return (
    <main role='main'>
      <section className='poll__title'>
        <h1>Previus Rulings</h1>
        <select name='Type of view'>
          <option value='List'>List</option>
          <option value='Grid'>Grid</option>
        </select>
      </section>
      <section>
        <Card />
      </section>
    </main>
  )
}
