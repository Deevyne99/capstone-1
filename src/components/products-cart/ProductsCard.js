import Button from '../button/Button'
import './productCard.style.scss'

const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </div>
  )
}
export default ProductCard
