import { useEffect, useState } from 'react'
import { ThumbDown } from '../../../Icons/ThumbDown'
import { ThumbUp } from '../../../Icons/ThumbUp'
import { useUpdateVotes } from '../../../../hooks/useUpdateVotes'
import './styles.css'

const APP_SIZE = {
  DESKTOP: '1100',
  TABLET: '768'
}

const BOTTOMS_STATE = {
  DISABLED: 0,
  POSITIVE: 1,
  NEGATIVE: 2
}

export const CardInformation = ({ isGrid, name, description, id, votes }) => {
  const { updateVotes } = useUpdateVotes()
  const [active, setActive] = useState(BOTTOMS_STATE.DISABLED)
  let screenSize = 0
  useEffect(() => {
    screenSize = window.screen.width
  }, [])
  const handlePositiveClick = () => {
    setActive(BOTTOMS_STATE.POSITIVE)
  }
  const handleNegativeClick = () => {
    setActive(BOTTOMS_STATE.NEGATIVE)
  }
  const handleVoteClick = () => {
    const { positive, negative } = votes
    const newVotes = { positive: positive + 1, negative }
    updateVotes(id, newVotes)
  }
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
            {name}
          </h1>
          <p className={`card__description ${isGrid && 'grid__description'}`}>
            {description}
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
            } ${active === BOTTOMS_STATE.POSITIVE && 'selected'}`}
            onClick={handlePositiveClick}
          >
            <ThumbUp
              width={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
              height={screenSize <= APP_SIZE.TABLET ? '16' : '22'}
            />
          </button>
          <button
            className={`card__thumbDown ${
              isGrid ? 'grid__button' : 'list__button'
            } ${active === BOTTOMS_STATE.NEGATIVE && 'selected'}`}
            onClick={handleNegativeClick}
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
            disabled={active === BOTTOMS_STATE.DISABLED}
            onClick={handleVoteClick}
          >
            Vote now
          </button>
        </div>
      </section>
    </aside>
  )
}
