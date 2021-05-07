import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import CircleLoader from '../../components/CircleLoader';

import categoriasRepository from '../../repositories/categorias';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);
  
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<CircleLoader/>)}

      {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription="Sem perdoar. Sem esquecer. Conheça a história dos irmãos divididos pela lâmina."
                />
              </div>
            );
          }

          return (
            <div key={categoria.id}>
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
              <Carousel
                category={categoria}
              />
            </div>
          );
      })}

    </PageDefault>
  );
}

export default Home;