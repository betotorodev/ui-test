import { Nav } from './components/Nav'
import { Header } from './components/Header'
import { Description } from './components/Description'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'
import { ListOfCards } from './components/ListOfCards'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <div className='max-centered'>
        <Description />
        <ListOfCards />
        <CallToAction />
        <hr role='separator' />
        <Footer />
      </div>
    </>
  )
}

export default App
