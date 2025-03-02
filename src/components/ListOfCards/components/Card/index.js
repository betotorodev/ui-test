import { CardImage } from '../CardImage'
import { CardInformation } from '../CardInformation'
import { CardPoll } from '../CardPoll'
import './style.css'

export const Card = ({ listView, name, description, picture, votes, id }) => {
  const isGrid = listView === 'Grid'
  return (
    <div
      className={`card__container ${
        isGrid ? 'grid__container' : 'list__container'
      }`}
    >
      <div className={`${isGrid ? 'hide' : 'card__gradient'}`}></div>
      <CardImage picture={picture} isGrid={isGrid} />
      <CardInformation
        id={id}
        name={name}
        description={description}
        isGrid={isGrid}
        votes={votes}
      />
      <CardPoll votes={votes} isGrid={isGrid} />
    </div>
  )
}
