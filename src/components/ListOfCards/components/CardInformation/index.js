import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import './styles.css'

export const CardInformation = ({ isGrid }) => {
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
            width={`${isGrid ? '16' : '22'}`}
            height={`${isGrid ? '16' : '22'}`}
          />
        </button>
        <div className={isGrid && 'grid__card-header'}>
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
              width={isGrid ? '16' : '22'}
              height={isGrid ? '16' : '22'}
            />
          </button>
          <button
            className={`card__thumbDown ${
              isGrid ? 'grid__button' : 'list__button'
            }`}
          >
            <ThumbDown
              width={isGrid ? '16' : '22'}
              height={isGrid ? '16' : '22'}
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
