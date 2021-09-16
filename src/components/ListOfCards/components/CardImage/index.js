import './styles.css'

export const CardImage = ({ isGrid, picture }) => {
  return (
    <figure
      className={`card__image-container ${
        isGrid ? 'grid__card-image' : 'list__card-image'
      }`}
    >
      <img
        className={`card__image ${isGrid ? 'grid__image' : 'list__image'}`}
        src={picture}
        alt='Mark Zuckerberg'
      />
    </figure>
  )
}
