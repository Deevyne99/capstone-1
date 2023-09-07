import { createContext, useState } from 'react'
import shopProducts from '../../src/shop-data.json'
export const productsContext = createContext({})

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopProducts)
  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  )
}

export default ProductsProvider
