import React from 'react';

import logo from '../../assets/img/logoandname.svg';
import './Header.css';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logotipo de la empresa" />
            <div className="header--title-container" >
                <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
                <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
                <a href="#plans" className="header--button">Conoce Nuestros Planes <span></span></a>
            </div>
        </header>
    )
}

export default Header;