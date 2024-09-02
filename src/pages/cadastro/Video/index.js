import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import { create } from '../../../repositories/videos';
import { index } from '../../../repositories/categorias';

import '../../../styles/CadastroVideo.scss';
import { MainWrapper } from '../../../components/MainWrapper';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo)
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });

    useEffect(() => {
        (async () => {
            const allCategories = await index();
            
            setCategorias(allCategories);    
        })();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        const chooseCategory = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
        });

        create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: chooseCategory.id,
        })

        .then(() => {
            history.push("/");
        })
    }

    return (
        <MainWrapper>
            <h1>Cadastro de Video: {values.titulo}</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria do Vídeo"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <Button className="btn-center" type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link className="go-back" to="/cadastro/FormOptions">    
                <BsArrowLeftShort className="back-icon" />
                Voltar
            </Link>
        </MainWrapper>
    )
}

export default CadastroVideo;