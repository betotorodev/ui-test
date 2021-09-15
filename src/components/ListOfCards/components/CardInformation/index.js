import { useEffect } from 'react'
import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import './styles.css'

const APP_SIZE = {
  DESKTOP: '1100',
  TABLET: '768'
}

export const CardInformation = ({ isGrid }) => {
  let screenSize = 0
  useEffect(() => {
    screenSize = window.screen.width
  }, [])
  return (
    <aside
      className={`card__information ${
        isGrid ? 'grid__information' : 'list__information'
      }`}
    >
      <section
        className={`${
          isGrid ? 'grid__information-profile' : 'list__information-profile'
        }`}
      >
        <button
          className={`card__thumbUp ${
            isGrid ? 'grid__button' : 'list__button button__state'
          }`}
        >
          <ThumbUp
            width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
            height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
          />
        </button>
        <div className={`card__header ${isGrid && 'grid__card-header'}`}>
          <h1
            className={`card__title ${
              isGrid ? 'grid__card-title' : 'list__card-title'
            }`}
          >
            Mark Zuckerberg
          </h1>
          <p className={`card__description ${isGrid && 'grid__description'}`}>
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit…
          </p>
        </div>
      </section>
      <section className='card__information-poll'>
        <p className={`time ${isGrid ? 'grid__time' : 'list__time'}`}>
          1 month ago in Entertainment
        </p>
        <div className='card__buttons-container'>
          <button
            className={`card__thumbUp ${
              isGrid ? 'grid__button' : 'list__button'
            }`}
          >
            <ThumbUp
              width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
              height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
            />
          </button>
          <button
            className={`card__thumbDown ${
              isGrid ? 'grid__button' : 'list__button'
            }`}
          >
            <ThumbDown
              width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
              height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
            />
          </button>
          <button
            className={`card__button--vote ${
              isGrid ? 'grid__button--vote' : 'list__button--vote'
            }`}
          >
            Vote now
          </button>
        </div>
      </section>
    </aside>
  )
}
