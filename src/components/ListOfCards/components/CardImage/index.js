import './styles.css'

export const CardImage = ({ isGrid }) => {
  return (
    <figure
      className={`card__image-container ${
        isGrid ? 'grid__card-image' : 'list__card-image'
      }`}
    >
      <img
        className={`card__image ${isGrid ? 'grid__image' : 'list__image'}`}
        src='https://i.imgur.com/bbptQSV.png'
        alt='Mark Zuckerberg'
      />
    </figure>
  )
}
