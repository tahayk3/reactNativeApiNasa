import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';

const Home = () => {
  /*constante para manejar el estado, en este caso, se maneja de manera local(no hacia otros componentes), de ser
   el caso, podria implementarse redux
  */
  const [todaysImage, setTodayImage] = useState({});
  //useEffect para cargar y recargar api
  useEffect(() => {
    //metodo para llamar api
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodayImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodayImage({undefined});
      }
    };
    //llamada a la funcion y se captura el error
    loadTodayImage().catch(null);
  }, []);

  console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Home;
