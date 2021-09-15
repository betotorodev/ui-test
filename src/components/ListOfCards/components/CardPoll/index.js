import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import './styles.css'

export const CardPoll = ({ isGrid }) => {
  const width = 50
  return (
    <footer className={`card__poll ${isGrid ? 'grid__poll' : 'list__poll'}`}>
      <button className='poll card__thumbUp' style={{ width: width + '%' }}>
        <ThumbUp width={isGrid ? '15' : '22'} height={isGrid ? '15' : '22'} />
        <span className={isGrid ? 'grid__percentage' : 'list__percentage'}>
          {width}%
        </span>
      </button>
      <button
        className={`poll card__thumbDown ${
          isGrid ? 'grid__button-poll' : 'list__button-poll'
        }`}
        style={{ width: width + '%' }}
      >
        <ThumbDown width={isGrid ? '15' : '22'} height={isGrid ? '15' : '22'} />
        <span className={isGrid ? 'grid__percentage' : 'list__percentage'}>
          {width}%
        </span>
      </button>
    </footer>
  )
}
