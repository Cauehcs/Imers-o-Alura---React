import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/PageDefault/PageDefault'

function CadastroCategoria() {
    
    return (

        <DefaultPage>
            
            <h1>cadastro de Vídeo.</h1>

            <Link to="/">
                
                Ir para home

            </Link>

        </DefaultPage>

    )

}

export default CadastroCategoria;