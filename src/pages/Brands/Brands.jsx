import React, { useContext } from 'react'
import { ShopContext } from '../../components/Context_Api/ContextApi'
import Product from '../../components/Product_data.js/Product'
import "./Brands.css"

const Brands = (props) => {
  const { products } = useContext(ShopContext)
  return (
    <section className='brand-page'>
      <div className='adjust-brands'>
    <div className='shopBrands'>
      {products.filter(product => product.brand === props.brand).map((product,index) => {
        return <Product {...product}/>
      })}
    </div>
    </div>
    </section>
  )
}

export default Brands