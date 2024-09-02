import React from 'react';
import { useRepository } from '../../hooks/useRepository';

import { getAllVideoCategoriesWithContent } from '../../repositories/categorias';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import CircleLoader from '../../components/CircleLoader';
import { MainWrapper } from '../../components/MainWrapper';

function Home() {
  const { data: dadosIniciais, error, loading } = useRepository(getAllVideoCategoriesWithContent);

  return (
    <MainWrapper padding={0}>
      
      {error && (
        <p>Erro ao buscar dados, tente novamente.</p>
      )}
     
      {dadosIniciais?.length === 0 && (
        <CircleLoader/>
      )}

      {dadosIniciais?.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[6].titulo}
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

    </MainWrapper>
  );
}

export default Home;