import React from 'react'
import Image from 'next/image'

const ProductoCard = ({ image, title, description }) => {
  return (
    <div className="producto-card">
      <Image src={image} alt={title}  width={300} height={200}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProductoCard
