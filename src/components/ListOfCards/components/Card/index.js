import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import './style.css'

export const Card = () => {
  const width = 50
  return (
    <div className='card__container'>
      <div className='card__gradient'></div>
      <figure className='card__image-container'>
        <img src='https://i.imgur.com/bbptQSV.png' alt='Mark Zuckerberg' />
      </figure>
      <aside className='card__information'>
        <section className='card__information-profile'>
          <button className='card__button card__thumbUp'>
            <ThumbUp width='22' height='22' />
          </button>
          <div>
            <h1>Mark Zuckerberg</h1>
            <p>
              Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
              eu velit…
            </p>
          </div>
        </section>
        <section className='card__information-poll'>
          <p>1 month ago in Entertainment</p>
          <div className='card__buttons-container'>
            <button className='card__button card__thumbUp'>
              <ThumbUp width='22' height='22' />
            </button>
            <button className='card__button card__thumbDown'>
              <ThumbDown width='22' height='22' />
            </button>
            <button className='card__button--vote'>Vote now</button>
          </div>
        </section>
      </aside>
      <footer className='card__poll'>
        <button className='poll card__thumbUp' style={{ width: width + '%' }}>
          <ThumbUp width='22' height='22' />
          <span>{width}%</span>
        </button>
        <button className='poll card__thumbDown' style={{ width: width + '%' }}>
          <ThumbDown width='22' height='22' />
          <span>{width}%</span>
        </button>
      </footer>
    </div>
  )
}
