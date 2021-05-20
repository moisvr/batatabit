import React from 'react';

import logo from '../../assets/img/logo.svg';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <section className="left">
                <ul>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Crunchbase</a></li>
                    <li><a href="#">Hackernews</a></li>
                </ul>
            </section>
            <section className="right">
                <img src={logo} alt="logo de batatabit" />
            </section>
        </footer>
    )
}

export default Footer;