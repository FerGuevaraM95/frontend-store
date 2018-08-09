import React, { Component } from 'react';

import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="image">
                    <img src="./img/shirt_1.jpg" alt="about image"/>
                </div>
                <div className="content">
                    <h2>Sobre nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut dolores quis molestiae voluptatum? Magni vel impedit tempora ad repudiandae! Illo aliquam dignissimos suscipit non. Quo dolor maxime tempore ducimus accusantium quis temporibus quasi voluptas, perspiciatis est modi itaque architecto ratione provident, vero fugiat voluptatum, tempora minima hic expedita! Nobis quam voluptatum, obcaecati asperiores ratione tenetur autem quibusdam, rem ducimus aliquid aut nostrum mollitia beatae aspernatur voluptatibus ullam, nemo adipisci!</p>
                </div>
            </div>
        );
    }
}

export default About;