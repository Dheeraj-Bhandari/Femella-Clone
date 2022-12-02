import React, { useContext } from 'react';
import { CartContext } from './cart';



export default function Items({id,description , title , img , price ,quantity}) {
  const {removeItem , increment , decrement} = useContext(CartContext)

  return (
    <div>  <div className="items-info">
            <div className='product-img'>
                <img src={img} alt='' />

            </div>
            <div className='title'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='add-minus-quantity'>
            <i className="fa-solid fa-minus" minus onClick={() => decrement(id)}></i>
            <input type="text" placeholder={quantity}/>
            <i className="fa-solid fa-plus" add onClick={() => increment(id)}></i>
            </div>
            <div className='price'>
                <h3>{price}</h3>
            </div>
            <div className='remove-item'>
                <i className="fa-solid fa-trash" remove onClick={ () => removeItem(id)}></i>
            </div>
            </div>
            <hr />
    </div>
  )
}
