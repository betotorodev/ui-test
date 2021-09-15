import { CardImage } from '../CardImage'
import { CardInformation } from '../CardInformation'
import { CardPoll } from '../CardPoll'
import './style.css'

export const Card = ({ listView, name, description, picture, votes }) => {
  const isGrid = listView === 'Grid'
  return (
    <div
      className={`card__container ${
        isGrid ? 'grid__container' : 'list__container'
      }`}
    >
      <div className={`${isGrid ? 'hide' : 'card__gradient'}`}></div>
      <CardImage picture={picture} isGrid={isGrid} />
      <CardInformation name={name} description={description} isGrid={isGrid} />
      <CardPoll votes={votes} isGrid={isGrid} />
    </div>
  )
}
