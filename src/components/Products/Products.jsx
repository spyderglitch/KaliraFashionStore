import React from 'react'
import ProductCard from '../card/card'
import './products.styles.scss'

function Products({collections}) {
  return (
    <div className='products-container'>
        {
            collections.map((product) => {
                return <ProductCard product={product} />
            })
        }
    </div>
  )
}

export default Products