import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Products from './Products';
import SingleProduct from './SingleProduct';
import About from './About';
import Contact from './Contact';
import Error from './Error';

import infoProducts from './data.json';

const propTypes = {
    products: PropTypes.array
}

class Router extends Component {

    state = {
        products: [],
        searchTerm : ''
    }

    componentWillMount() {
        this.setState({
            products: infoProducts
        })
    }

    searchProduct = (search) => {
        if(search.length > 2) {
            this.setState({
                searchTerm : search
            })
        } else {
            this.setState({
                searchTerm : ''
            })
        }
    }

    render() {

        let products = [...this.state.products];
        let search = this.state.searchTerm;
        let result;

        if(search !== '') {
            result = products.filter(product => (
                product.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
            ))
        } else {
            result = products;
        }

        return (
            <BrowserRouter>

                <div className="container">
                    <Header />
                    <Navigation />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Products
                                products={result}
                                searchProduct={this.searchProduct}
                            />
                        )} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" render={() => (
                            <Products
                                products={result}
                                searchProduct={this.searchProduct}
                            />
                        )} />
                        <Route exact path="/product/:productId" render={(props) => {
                            let idProduct = props.location.pathname.replace('/product/', '');
                            return (
                                <SingleProduct
                                    product={this.state.products[idProduct]}
                                />
                            )
                        }} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
 
Router.propTypes = propTypes;

export default Router;