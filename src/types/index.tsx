//Tipos que podrian venir en las respuestas de la API
export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

//Type para las rutas
export type RootStackParams = {
  //la pantalla no recibe parametros
  Home: undefined;
  Detail: undefined;
};
