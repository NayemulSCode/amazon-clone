import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,price,rating,image}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    return (
        <div className="chekoutProduct">
            <img className="checkout__img" src={image} alt="" />
            <div className="checkout__info">
                <p className="checkout__title">{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_) =>(
                        <p>&#x2605;</p>
                    ))}
               </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
