import React, { useContext } from 'react'
import ShopData from '../../../shop-data.json'
import { productsContext } from '../../../context/productsContext'
import ProductCard from '../../products-cart/ProductsCard'
import './shop.style.scss'
const Shop = () => {
  const { products } = useContext(productsContext)
  console.log(products)
  return (
    <div className='products-container'>
      {ShopData.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  )
}

export default Shop
