import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

import '../../../styles/FormOptions.css';

function FormOptions() {
    
    return (
        <PageDefault>
            <h1>O que você deseja adicionar?</h1>

            <div className="btn-options">
                <Link className="link-button" to="/cadastro/Video">
                    <Button>Vídeo</Button>
                </Link>

                <Link className="link-button" to="/cadastro/Categoria">
                    <Button>Categoria</Button>
                </Link>
            </div>
        </PageDefault>
    );
}

export default FormOptions;