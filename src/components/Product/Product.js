import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {image, name, price, id} = props.info;
    return (
        <li>
            <img src={`img/${image}.jpg`} alt={name}/>
            <p>{name} <span>${price}</span></p>
            <Link to={`/product/${id}`}>Más Información</Link>
        </li>
    )
}

export default Product;