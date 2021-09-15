import { useEffect } from 'react'
import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import './styles.css'

const APP_SIZE = {
  DESKTOP: '1100',
  TABLET: '768'
}

export const CardPoll = ({ isGrid }) => {
  let screenSize = 0
  useEffect(() => {
    screenSize = window.screen.width
  }, [])
  const width = 50
  return (
    <footer className={`card__poll ${isGrid ? 'grid__poll' : 'list__poll'}`}>
      <button className='poll card__thumbUp' style={{ width: width + '%' }}>
        <ThumbUp
          width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
          height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
        />
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
        <span className={isGrid ? 'grid__percentage' : 'list__percentage'}>
          {width}%
        </span>
        <ThumbDown
          width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
          height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
        />
      </button>
    </footer>
  )
}
