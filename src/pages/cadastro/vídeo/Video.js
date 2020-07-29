import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/PageDefault/PageDefault'

function CadastroVideo() {
    
    return (

        <DefaultPage>
            
            <h1>cadastro de Vídeo.</h1>

            <Link to="/cadastro/categoria">
                
                Cadastrar Categoria

            </Link>

        </DefaultPage>

    )

}

export default CadastroVideo; 