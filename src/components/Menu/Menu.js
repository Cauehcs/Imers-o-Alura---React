import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/devflix-logo.png';
import './Menu.css';
import Button from '../Button/Button';

function Menu() {

    return (

        <nav className="Menu">

            <Link to="/">
                
                <img className="Logo" src={Logo} alt="Devflix logo"/>

            </Link>

            <Button as={Link}  className="ButtonLink" to="cadastro/video">

                NOVO VÍDEO

            </Button>

        </nav>  

    );
}

export default Menu;