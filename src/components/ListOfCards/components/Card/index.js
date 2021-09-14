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
      <footer className='card__poll'>
        <div className='poll card__thumbUp' style={{ width: width + '%' }}>
          <ThumbUp width='22' height='22' />
          <span>{width}%</span>
        </div>
        <div className='poll card__thumbDown' style={{ width: width + '%' }}>
          <ThumbDown width='22' height='22' />
          <span>{width}%</span>
        </div>
      </footer>
    </div>
  )
}
