import React, { Component } from 'react';

import Product from '../Product';

import './products.css';

class Products extends Component {
    render() { 
        return (
            <div className="products">
                <h2>Nuestros productos</h2>
                <ul className="products-list">
                    {Object.keys(this.props.products).map(product =>(
                        <Product
                            info={this.props.products[product]}
                            key={product}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default Products;