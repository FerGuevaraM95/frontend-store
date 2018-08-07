import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Error from './Error';

import infoProducts from './data.json';

const propTypes = {
    products: PropTypes.array
}

class Router extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.setState({
            products: infoProducts
        })
    }

    render() { 
        return (
            <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
Router.propTypes = propTypes;

export default Router;