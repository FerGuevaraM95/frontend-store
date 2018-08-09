import React, { Component } from 'react';

import './searcher.css';

class Searcher extends Component {

    readData = (e) => {;
        // Termino de busqueda
        const term = e.target.value;

        //Enviamos por props
        this.props.search(term);
    
    }

    prevent(e) {
        e.preventDefault();
    }


    render() { 
        return (
            <form className="searcher"
                onSubmit={this.prevent}
            >
                <input type="text" placeholder="Busqueda"
                onChange={this.readData} />
            </form>
        );
    }
}
 
export default Searcher;