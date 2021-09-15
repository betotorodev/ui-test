import { CardImage } from '../CardImage'
import { CardInformation } from '../CardInformation'
import { CardPoll } from '../CardPoll'
import './style.css'

export const Card = ({ listView }) => {
  const isGrid = listView === 'Grid'
  return (
    <div
      className={`card__container ${
        isGrid ? 'grid__container' : 'list__container'
      }`}
    >
      <div className={`${isGrid ? 'hide' : 'card__gradient'}`}></div>
      <CardImage isGrid={isGrid} />
      <CardInformation isGrid={isGrid} />
      <CardPoll isGrid={isGrid} />
    </div>
  )
}
