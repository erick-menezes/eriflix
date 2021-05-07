import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {


      if (response.ok) {
          const resposta = await response.json();
          return resposta;
      }

      throw new Error('Não foi possível encontrar os dados. :(');
    },);
}

async function getAllWithVideos() {
    const response = await fetch(`${URL_CATEGORIES}?_embed=videos`);

    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      throw new Error('Não foi possível encontrar os dados. :(');
    }
}

export default { getAllWithVideos, getAll };