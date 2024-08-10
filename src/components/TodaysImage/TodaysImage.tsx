import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {PostImage, RootStackParams} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PostImageNavigationsProps = NativeStackNavigationProp<
  RootStackParams,
  'Detalle'
>;

const TodaysImage = (todaysImage: PostImage) => {
  //metodo para cambiar de pantalla
  const {navigate} = useNavigation<PostImageNavigationsProps>();
  const handleViewPress = () => {
    //nombre de pantalla y parametros
    navigate('Detalle', {
      title: todaysImage.title,
      date: todaysImage.date,
      url: todaysImage.url,
      explanation: todaysImage.explanation,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: todaysImage.url}} style={styles.image}></Image>
      </View>
      <Text style={styles.title}>{todaysImage.title}</Text>
      <Text style={styles.date}>{todaysImage.date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleViewPress} style={styles.button}>
          <Text style={styles.buttonText}>Ver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    marginVertical: 16,
    marginHorizontal: 1,
    padding: 16,
    borderRadius: 1,
    borderWidth: 25,
    borderBlockColor: '#fff',
  },
  imageContainer: {
    borderColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderWidth: 2,
    borderBlockColor: '#fff',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodaysImage;
