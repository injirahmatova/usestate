import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <p>{item.orderDate}</p>
        <p>{item.id}</p>
        <p>{item.customerId}</p>
    </div>
  )
}

export default ProductCard