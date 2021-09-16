import { useEffect } from 'react'
import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import { useHandlePercentage } from '../../../../hooks/useHandlePercentage'
import './styles.css'

const APP_SIZE = {
  DESKTOP: '1100',
  TABLET: '768'
}

export const CardPoll = ({ isGrid, votes }) => {
  const { percentagePositive, percentageNegative } = useHandlePercentage(votes)
  let screenSize = 0
  useEffect(() => {
    screenSize = window.screen.width
  }, [])
  return (
    <footer className={`card__poll ${isGrid ? 'grid__poll' : 'list__poll'}`}>
      <button
        className='poll card__thumbUp'
        style={{ width: percentagePositive + '%' }}
      >
        <ThumbUp
          width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
          height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
        />
        <span className={isGrid ? 'grid__percentage' : 'list__percentage'}>
          {percentagePositive}%
        </span>
      </button>
      <button
        className={`poll card__thumbDown ${
          isGrid ? 'grid__button-poll' : 'list__button-poll'
        }`}
        style={{ width: percentageNegative + '%' }}
      >
        <span className={isGrid ? 'grid__percentage' : 'list__percentage'}>
          {percentageNegative}%
        </span>
        <ThumbDown
          width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
          height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
        />
      </button>
    </footer>
  )
}
