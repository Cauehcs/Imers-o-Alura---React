import React from 'react';
import Logo from '../../assets/img/devflix-logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {

    return (

        <header className="Menu">

            <a href="/">
                
                <img className="Logo" src={Logo} alt="Devflix logo"/>

            </a>

            <Button as="a"  className="ButtonLink" href="/">

                NOVO VÍDEO

            </Button>

        </header>

    );
}

export default Menu;