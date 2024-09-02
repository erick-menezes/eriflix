import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

export function create(videoObject) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method:'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(videoObject),
    })
      .then(async (response) => {


        if (response.ok) {
            const resposta = await response.json();
            return resposta;
        }

        throw new Error('Não foi possível cadastrar os dados. :(');
      },);
}