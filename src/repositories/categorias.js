import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

export async function index() {
  const allVideoCategories = await fetch(`${URL_CATEGORIES}`)
                              .then((response) => response.json())
                              .then((data) => data)
                              .catch((error) => console.log(error));

  return allVideoCategories;
}

export async function show(videoCategoryId) {
  const category = await fetch(`${URL_CATEGORIES}?id=${videoCategoryId}`)
                    .then((response) => response.json())
                    .then((data) => data)
                    .catch((error) => console.log(error));

  return category;
}

export async function getAllVideoCategoriesWithContent() {
  const allVideoCategoriesWithContent = await fetch(`${URL_CATEGORIES}?_embed=videos`)
                                          .then((response) => response.json())
                                          .then((data) => data)
                                          .catch((error) => console.log(error));

  return allVideoCategoriesWithContent;
}
