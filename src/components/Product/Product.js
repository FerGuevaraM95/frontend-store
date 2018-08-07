import React from 'react';

const Product = (props) => {
    const {image, name, price, id} = props.info;
    return (
        <li>
            <img src={`img/${image}.jpg`} alt={name}/>
            <p>{name} <span>${price}</span></p>
            <a href="#">Más Información</a>
        </li>
    )
}

export default Product;