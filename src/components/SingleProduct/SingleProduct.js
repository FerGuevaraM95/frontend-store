import React from 'react';

import './single-product.css';

const SingleProduct = (props) => {
    if(!props) return null;

    const {image, name, price, description} = props.product

    return (
        <div className="product-info">
            <div className="image">
                <img src={`/img/${image}.jpg`} alt={name}/>
            </div>

            <div className="info">
                <h2>{name}</h2>
                <p className="price">${price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}
 
export default SingleProduct;