//KEY proporcionada por api de la Nasa
const API_KEY = 'LT9AWKJJWnpBI09ispSm7b1fEcDHAm2m6BVfX10r';
//URL DE LA API
const API_URL = 'http://api.nasa.gov/planetary/apod';

//Funcion asincrona para realizar consulta
export default async (urlParams?: string) => {
  try {
    //contatenando API_KEY y otros posibles parametros
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== 'undefined' && urlParams?.length > 0
          ? urlParams
          : ''
      }`,
    );
    //Convirtiendo respuesta en json
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    //devolviendo el error en caso de ser necesario
    return Promise.reject(error);
  }
};
