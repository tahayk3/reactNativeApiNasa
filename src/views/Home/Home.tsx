import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import {format, sub} from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

const Home = () => {
  /*constante para manejar el estado, en este caso, se maneja de manera local(no hacia otros componentes), de ser
   el caso, podria implementarse redux
  */
  const [todaysImage, setTodayImage] = useState({});
  //constante para guardar los ultimos 5 dias
  const [fiveDaysAgoImage, setfiveDaysAgoImage] = useState([]);
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
    //funcion para cargar la imagen del dia de los ultimos 5 dias
    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        //obtener dia actual
        const todaysDate = format(date, 'yyyy-MM-dd');
        //obtener fecha hace 5 dias
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );
        setfiveDaysAgoImage(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    //llamada a la funcion y se captura el error
    loadTodayImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  console.log(todaysImage);
  console.log(fiveDaysAgoImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImageProps={fiveDaysAgoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#000',
  },
});

export default Home;
