import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import ProductInfo from '../ProductDesc/ProductInfo'
import '../styles/product.css'
import ProductCompare from './ProductCompare'

const Product = () => {
  const [showComparison, setComparison] = useState(false)
  const { products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = products.find(product => product.id === Number(productId))

  const filteredProducts = products.filter(filteredProduct => filteredProduct.category === product.category && filteredProduct.id !== product.id)

  return (
    <div className='product'>
      {showComparison && (
        <ProductCompare
        filteredProducts={filteredProducts}
        product={product}
        />
      )}
      <BreadCrumb {...product}/>
      <ProductInfo {...product} setComparison={setComparison}/>
      <RelatedProducts category={product.category}/>
    </div>
  )
}

export default Product;