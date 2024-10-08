import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

import { BsArrowLeftShort } from 'react-icons/bs';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { MainWrapper } from '../../../components/MainWrapper';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FFFFFF',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://eriflixx.herokuapp.com/categorias';

    fetch(URL_TOP)
    .then(async (response) => {
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <MainWrapper>
      <h1>
        Cadastro de Categoria: {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && <div>  
          <CircleLoader />
      </div>}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link className="go-back" to="/cadastro/FormOptions">    
        <BsArrowLeftShort className="back-icon" />
        Voltar
      </Link>
    </MainWrapper>
  );
}

export default CadastroCategoria;
