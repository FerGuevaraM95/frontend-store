import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to={'/about'} activeClassName="active">Acerca de</NavLink>
            <NavLink to={'/products'} activeClassName="active">Productos</NavLink>
            <NavLink to={'/contact'} activeClassName="active">Contacto</NavLink>
        </nav>
    );
}
 
export default Navigation;